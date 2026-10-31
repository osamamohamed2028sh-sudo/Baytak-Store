const WA_NUMBER = "201554283448"; // رقم واتساب بصيغة دولية بدون + أو أصفار البداية
const grid = document.getElementById("productGrid");
const filters = document.getElementById("filters");
const searchInput = document.getElementById("searchInput");
const cartPanel = document.getElementById("cartPanel");
const overlay = document.getElementById("overlay");
let activeCategory = "الكل";
let cart = JSON.parse(localStorage.getItem("baytakCart") || "{}");

const categories = ["الكل", ...new Set(PRODUCTS.map(p => p.category))];
filters.innerHTML = categories.map(c => `<button class="filter-btn ${c==="الكل"?"active":""}" data-category="${c}">${c}</button>`).join("");

function money(n){return n.toLocaleString("ar-EG")+" ج.م";}
function renderProducts(){
  const q = searchInput.value.trim().toLowerCase();
  const shown = PRODUCTS.filter(p => (activeCategory==="الكل" || p.category===activeCategory) &&
    (p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)));
  grid.innerHTML = shown.map(p => `
    <article class="product-card">
      <div class="product-image"><img src="${p.image}" alt="${p.name}" loading="lazy"></div>
      <div class="product-info">
        <span class="product-category">${p.category}</span>
        <h3>${p.name}</h3><p class="product-desc">${p.description}</p>
        <div class="product-foot"><span class="price">${money(p.price)}</span>
        <button class="add-btn" data-add="${p.id}">+ أضف للسلة</button></div>
      </div>
    </article>`).join("");
  document.getElementById("emptyState").hidden = shown.length !== 0;
}
function saveCart(){localStorage.setItem("baytakCart",JSON.stringify(cart));renderCart();}
function addToCart(id){cart[id]=(cart[id]||0)+1;saveCart();}
function changeQty(id,delta){cart[id]=(cart[id]||0)+delta;if(cart[id]<=0)delete cart[id];saveCart();}
function renderCart(){
  const entries=Object.entries(cart).filter(([id,qty])=>qty>0);
  const count=entries.reduce((s,[id,q])=>s+q,0);
  document.getElementById("cartCount").textContent=count;
  const items=document.getElementById("cartItems");
  if(!entries.length){items.innerHTML='<div class="empty-cart">السلة لسه فاضية 🛒<br>اختار المنتجات اللي محتاجها.</div>';}
  else{
    items.innerHTML=entries.map(([id,qty])=>{
      const p=PRODUCTS.find(x=>x.id===id); if(!p)return "";
      return `<div class="cart-row"><img src="${p.image}" alt=""><div><h4>${p.name}</h4><small>${money(p.price*qty)}</small><div class="qty"><button data-qty="-1" data-id="${id}">−</button><b>${qty}</b><button data-qty="1" data-id="${id}">+</button></div></div><button class="remove" data-remove="${id}">حذف</button></div>`;
    }).join("");
  }
  const total=entries.reduce((s,[id,q])=>s+(PRODUCTS.find(p=>p.id===id)?.price||0)*q,0);
  document.getElementById("cartTotal").textContent=money(total);
  document.getElementById("checkoutBtn").disabled=!entries.length;
}
function openCart(){cartPanel.classList.add("open");overlay.classList.add("show");}
function closeCart(){cartPanel.classList.remove("open");overlay.classList.remove("show");}
function checkout(){
  const entries=Object.entries(cart).filter(([id,q])=>q>0);
  if(!entries.length)return;
  let lines=["السلام عليكم، عايز أأكد الطلب من متجر بيتك:", ""];
  let total=0;
  entries.forEach(([id,q],i)=>{
    const p=PRODUCTS.find(x=>x.id===id); if(!p)return;
    total+=p.price*q; lines.push(`${i+1}) ${p.name} — الكمية: ${q} — ${money(p.price*q)}`);
  });
  lines.push("",`الإجمالي المبدئي: ${money(total)}`,"محتاج أعرف تكلفة وميعاد التوصيل.","الاسم:","العنوان بالتفصيل:","رقم للتواصل:");
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`,"_blank");
}
grid.addEventListener("click",e=>{const b=e.target.closest("[data-add]");if(b){addToCart(b.dataset.add);b.textContent="✓ اتضاف";setTimeout(()=>b.textContent="+ أضف للسلة",900);}});
filters.addEventListener("click",e=>{const b=e.target.closest("[data-category]");if(!b)return;activeCategory=b.dataset.category;document.querySelectorAll(".filter-btn").forEach(x=>x.classList.toggle("active",x===b));renderProducts();});
searchInput.addEventListener("input",renderProducts);
document.getElementById("openCart").addEventListener("click",openCart);
document.getElementById("closeCart").addEventListener("click",closeCart);
overlay.addEventListener("click",closeCart);
document.getElementById("checkoutBtn").addEventListener("click",checkout);
document.getElementById("cartItems").addEventListener("click",e=>{
  const q=e.target.closest("[data-qty]");const r=e.target.closest("[data-remove]");
  if(q)changeQty(q.dataset.id,Number(q.dataset.qty));
  if(r){delete cart[r.dataset.remove];saveCart();}
});
document.getElementById("year").textContent=new Date().getFullYear();
renderProducts();renderCart();