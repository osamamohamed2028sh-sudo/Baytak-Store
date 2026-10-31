const PRODUCTS = [
  {
    "id": "bottle-sport-01",
    "name": "زمزمية رياضية بغطاء",
    "category": "زجاجات ومجات",
    "price": 95,
    "image": "assets/image10.jpeg",
    "description": "زمزمية عملية للاستخدام اليومي، ألوان متعددة حسب المتاح."
  },
  {
    "id": "bottle-sport-02",
    "name": "زمزمية رياضية شفافة",
    "category": "زجاجات ومجات",
    "price": 85,
    "image": "assets/image118.jpeg",
    "description": "زجاجة مياه خفيفة مناسبة للجامعة والشغل."
  },
  {
    "id": "bottle-sport-03",
    "name": "زمزمية رياضية بيد",
    "category": "زجاجات ومجات",
    "price": 110,
    "image": "assets/image123.jpeg",
    "description": "تصميم عملي بغطاء محكم، اللون حسب المتاح."
  },
  {
    "id": "bottle-sport-04",
    "name": "زمزمية أطفال برسومات",
    "category": "زجاجات ومجات",
    "price": 90,
    "image": "assets/image214.jpeg",
    "description": "زمزمية برسومات وألوان متنوعة."
  },
  {
    "id": "bottle-sport-05",
    "name": "زمزمية رياضية طويلة",
    "category": "زجاجات ومجات",
    "price": 100,
    "image": "assets/image166.jpeg",
    "description": "زجاجة مياه للاستخدام اليومي."
  },
  {
    "id": "bottle-glass-01",
    "name": "زجاجة مياه زجاج",
    "category": "زجاجات ومجات",
    "price": 75,
    "image": "assets/image137.jpeg",
    "description": "زجاجة زجاجية أنيقة للمياه والعصائر."
  },
  {
    "id": "bottle-glass-02",
    "name": "زجاجة زجاج بغطاء",
    "category": "زجاجات ومجات",
    "price": 95,
    "image": "assets/image146.jpeg",
    "description": "زجاجة زجاجية بتصميم مميز."
  },
  {
    "id": "bottle-glass-03",
    "name": "زجاجة مياه زجاج ملونة",
    "category": "زجاجات ومجات",
    "price": 85,
    "image": "assets/image204.jpeg",
    "description": "ألوان متعددة حسب المتاح."
  },
  {
    "id": "mug-set-01",
    "name": "مج سيراميك",
    "category": "أكواب وتقديم",
    "price": 75,
    "image": "assets/image202.jpeg",
    "description": "مج سيراميك للاستخدام اليومي."
  },
  {
    "id": "mug-set-02",
    "name": "طقم مجات قهوة وشاي",
    "category": "أكواب وتقديم",
    "price": 220,
    "image": "assets/image114.jpeg",
    "description": "طقم مجات بتصميم كتابة أنيق."
  },
  {
    "id": "mug-set-03",
    "name": "طقم مجات بقاعدة",
    "category": "أكواب وتقديم",
    "price": 240,
    "image": "assets/image126.jpeg",
    "description": "طقم تقديم للمشروبات الساخنة."
  },
  {
    "id": "mug-set-04",
    "name": "مج سيراميك ملون",
    "category": "أكواب وتقديم",
    "price": 80,
    "image": "assets/image174.jpeg",
    "description": "ألوان متنوعة حسب المتاح."
  },
  {
    "id": "glass-jar-01",
    "name": "برطمان زجاج بغطاء خشبي",
    "category": "تخزين وتنظيم",
    "price": 135,
    "image": "assets/image131.jpeg",
    "description": "مناسب لحفظ السكر أو القهوة أو التوابل."
  },
  {
    "id": "glass-jar-02",
    "name": "طقم برطمانات زجاج",
    "category": "تخزين وتنظيم",
    "price": 260,
    "image": "assets/image127.jpeg",
    "description": "برطمانات زجاج للتخزين والتنظيم."
  },
  {
    "id": "spice-01",
    "name": "طقم علب توابل",
    "category": "تخزين وتنظيم",
    "price": 195,
    "image": "assets/image183.jpeg",
    "description": "علب توابل عملية للمطبخ."
  },
  {
    "id": "utensils-01",
    "name": "طقم أدوات مطبخ استانلس",
    "category": "أدوات المطبخ",
    "price": 275,
    "image": "assets/image145.jpeg",
    "description": "مجموعة أدوات تقديم ومطبخ."
  },
  {
    "id": "utensils-02",
    "name": "طقم معالق وشوك",
    "category": "أدوات المطبخ",
    "price": 120,
    "image": "assets/image120.jpeg",
    "description": "طقم أدوات مائدة للاستخدام اليومي."
  },
  {
    "id": "utensils-03",
    "name": "طقم أدوات مطبخ بمقابض",
    "category": "أدوات المطبخ",
    "price": 290,
    "image": "assets/image184.jpeg",
    "description": "أدوات مطبخ متعددة الاستخدامات."
  },
  {
    "id": "utensils-04",
    "name": "ملاعق سيليكون ملونة",
    "category": "أدوات المطبخ",
    "price": 95,
    "image": "assets/image94.jpeg",
    "description": "ملاعق سيليكون بألوان متنوعة."
  },
  {
    "id": "utensils-05",
    "name": "مضرب يدوي",
    "category": "أدوات المطبخ",
    "price": 65,
    "image": "assets/image89.jpeg",
    "description": "مناسب لخفق البيض وخلط المكونات."
  },
  {
    "id": "scissors-01",
    "name": "مقص مطبخ",
    "category": "أدوات المطبخ",
    "price": 65,
    "image": "assets/image105.jpeg",
    "description": "مقص متعدد الاستخدامات."
  },
  {
    "id": "scissors-02",
    "name": "طقم مقصات",
    "category": "أدوات المطبخ",
    "price": 125,
    "image": "assets/image150.jpeg",
    "description": "أحجام وألوان مختلفة حسب المتاح."
  },
  {
    "id": "grater-01",
    "name": "مبشرة مطبخ",
    "category": "أدوات المطبخ",
    "price": 75,
    "image": "assets/image101.jpeg",
    "description": "أداة عملية لتجهيز الخضروات."
  },
  {
    "id": "grater-02",
    "name": "قطاعة ومبشرة خضروات",
    "category": "أدوات المطبخ",
    "price": 165,
    "image": "assets/image17.jpeg",
    "description": "قطاعة يدوية متعددة الاستخدامات."
  },
  {
    "id": "strainer-01",
    "name": "طقم مصافي مطبخ",
    "category": "أدوات المطبخ",
    "price": 90,
    "image": "assets/image75.jpeg",
    "description": "مجموعة مصافي بأحجام مختلفة."
  },
  {
    "id": "baking-01",
    "name": "قالب مافن 12 عين",
    "category": "أدوات الخَبز",
    "price": 145,
    "image": "assets/image35.jpeg",
    "description": "قالب مناسب للمافن والكيك الصغير."
  },
  {
    "id": "baking-02",
    "name": "قالب كيك غير لاصق",
    "category": "أدوات الخَبز",
    "price": 160,
    "image": "assets/image25.jpeg",
    "description": "قالب للخبز والحلويات."
  },
  {
    "id": "baking-03",
    "name": "قوالب فرن متنوعة",
    "category": "أدوات الخَبز",
    "price": 125,
    "image": "assets/image45.jpeg",
    "description": "قوالب متعددة حسب الشكل المتاح."
  },
  {
    "id": "pan-01",
    "name": "طاسة تقديم بمقابض",
    "category": "أواني الطهي",
    "price": 195,
    "image": "assets/image23.jpeg",
    "description": "إناء تقديم بمقابض جانبية."
  },
  {
    "id": "pan-02",
    "name": "طاسة صغيرة",
    "category": "أواني الطهي",
    "price": 175,
    "image": "assets/image49.jpeg",
    "description": "مناسبة للتقديم والاستخدامات اليومية."
  },
  {
    "id": "clean-01",
    "name": "ممسحة تنظيف مسطحة",
    "category": "التنظيف",
    "price": 225,
    "image": "assets/image163.jpeg",
    "description": "أداة تنظيف للأرضيات والأسطح."
  },
  {
    "id": "clean-02",
    "name": "ليفة تنظيف متعددة الاستخدام",
    "category": "التنظيف",
    "price": 45,
    "image": "assets/image77.jpeg",
    "description": "قطعة تنظيف عملية للمطبخ."
  },
  {
    "id": "clean-03",
    "name": "فوط تنظيف متعددة",
    "category": "التنظيف",
    "price": 75,
    "image": "assets/image54.jpeg",
    "description": "فوط تنظيف بألوان متنوعة."
  },
  {
    "id": "organizer-01",
    "name": "علاقة حائط متعددة الخطافات",
    "category": "تخزين وتنظيم",
    "price": 110,
    "image": "assets/image38.jpeg",
    "description": "لتعليق أدوات المطبخ والأغراض الخفيفة."
  },
  {
    "id": "organizer-02",
    "name": "منظم تعليق للمطبخ",
    "category": "تخزين وتنظيم",
    "price": 125,
    "image": "assets/image47.jpeg",
    "description": "يساعد على تنظيم الأدوات وتوفير المساحة."
  },
  {
    "id": "organizer-03",
    "name": "سلة تخزين",
    "category": "تخزين وتنظيم",
    "price": 95,
    "image": "assets/image104.jpeg",
    "description": "سلة عملية للتخزين والتنظيم."
  },
  {
    "id": "apron-01",
    "name": "مريلة مطبخ",
    "category": "مستلزمات المنزل",
    "price": 125,
    "image": "assets/image20.jpeg",
    "description": "مريلة لحماية الملابس أثناء الطبخ."
  },
  {
    "id": "apron-02",
    "name": "مريلة مطبخ قماش",
    "category": "مستلزمات المنزل",
    "price": 110,
    "image": "assets/image119.jpeg",
    "description": "تصميم عملي للاستخدام اليومي."
  },
  {
    "id": "scale-01",
    "name": "ميزان مطبخ رقمي",
    "category": "أجهزة منزلية",
    "price": 250,
    "image": "assets/image67.jpeg",
    "description": "ميزان للمكونات والمقادير."
  },
  {
    "id": "hotplate-01",
    "name": "سخان كهربائي صغير",
    "category": "أجهزة منزلية",
    "price": 450,
    "image": "assets/image78.jpeg",
    "description": "جهاز تسخين صغير؛ تأكد من المواصفات والضمان قبل البيع."
  },
  {
    "id": "trolley-01",
    "name": "عربة تسوق بعجلات",
    "category": "مستلزمات المنزل",
    "price": 650,
    "image": "assets/image68.jpeg",
    "description": "عربة عملية لحمل المشتريات."
  },
  {
    "id": "bottle-insulated-01",
    "name": "زجاجة حرارية",
    "category": "زجاجات ومجات",
    "price": 280,
    "image": "assets/image190.jpeg",
    "description": "زجاجة لحفظ المشروبات؛ مدة الاحتفاظ بالحرارة حسب المنتج."
  }
];
