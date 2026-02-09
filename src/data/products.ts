// data/products.ts
import img1 from "../images/img1.jpeg";
import img2 from "../images/img2.jpeg";
import img3 from "../images/img3.jpeg";
import img4 from "../images/img4.jpeg";
import img5 from "../images/img5.jpeg";
import img6 from "../images/img6.jpeg";
import img7 from "../images/img7.jpeg";
import img8 from "../images/img8.jpeg";

export interface Product {
  id: number;
  nameEn: string;
  nameFr: string;
  nameAr: string;
  category: string;
  price: number;
  description: string;
  longDescription: string;
  image: string;
  notes: string;
}

export const products: Product[] = [
  {
    id: 1,
    nameEn: "Rose Pétales Doux",
    nameFr: "Pétales de Rose Doux",
    nameAr: "بتلات الورد الناعمة",
    category: "Women",
    price: 49,
    description: "Premium 50ml - Romantic floral with delicate pink rose petals",
    longDescription:
      "BEN FARES Rose Pétales Doux (50ML) captures the essence of blooming roses in Moroccan gardens. Presented in an elegant pink crystal bottle adorned with soft rose petals, this fragrance opens with fresh rose petal notes that dance with jasmine and tender peony. The heart reveals a delicate floral bouquet, while the base settles into creamy vanilla, amber, and light woods. Perfect for the romantic woman who appreciates nature's delicate beauty.",
    image: img1,
    notes: "Rose Petals, Jasmine, Peony, Vanilla, Musk, Light Woods"
  },
  {
  id: 2,
  nameEn: "Cherry Splash",
  nameFr: "Éclat de Cerise",
  nameAr: "رذاذ الكرز",
  category: "Men",  // Ou Unisex ? Mais gardé Men comme fourni, même si cerise souvent unisex/gourmand
  price: 49,  // MAD – prix typique Ben Fares, livraison gratuite Casablanca
  description: "Eau de Parfum Premium 50 ml – Gourmand fruité à la cerise rouge juteuse et explosive",
  longDescription: 
    "BEN FARES Cherry Splash (50 ml) explose de fraîcheur fruitée et addictive avec son flacon cristal rouge intense, surmonté d'un bouchon métallisé élégant et éclaboussé de jus de cerise. Cette fragrance masculine audacieuse s'ouvre sur une cerise rouge ultra-juteuse et croquante, mêlée à des notes pétillantes de bergamote et une touche acidulée de fruits rouges. Le cœur gourmand révèle une cerise confite sensuelle avec des accents amandés et floraux subtils, avant de plonger dans un fond chaud et magnétique : vanille douce, ambre enveloppant, musc sensuel et une pointe de bois précieux. Parfait pour l'homme confiant, moderne et charismatique de Casablanca – projection puissante, tenue longue (8h+), sillage addictif qui attire les compliments ! Idéal pour les soirées ou quand tu veux marquer les esprits.",
  image: img2,
  notes: "Cerise Rouge, Bergamote, Fruits Rouges, Cerise Confite, Amande, Vanille, Ambre, Musc, Bois Précieux"
},
  {
  id: 3,  // Suite logique après les précédents (ajuste si besoin : 1 rose, 2 cerise, 3 citrus, 4 autre citrus, 5 celui-ci)
  nameEn: "Stronger With Ginger",
  nameFr: "Stronger With Ginger",
  nameAr: "أقوى مع الزنجبيل",
  category: "Men",  // Typique des dupes SWY Intensely – masculin gourmand
  price: 49,  // MAD – prix canon Benfares, livraison gratuite Casablanca/Maroc via WhatsApp
  description: "Eau de Parfum Premium 50 ml – Gourmand intense au gingembre chaud et vanille addictive (inspired Stronger With You)",
  longDescription: 
    "BEN FARES Stronger With Ginger (50 ml) – le dupe marocain ultra-addictif inspiré d'Emporio Armani Stronger With You Intensely ! Son flacon cristal ambré/orange chaleureux, surmonté d'un bouchon sphérique noir élégant, renferme une fragrance masculine puissante, sensuelle et réconfortante. L'ouverture explose sur un gingembre épicé et vif mêlé à une touche de cardamome et poivre rose, pour un kick immédiat. Le cœur révèle des notes gourmandes irrésistibles : lavande douce, violette poudrée et accents de châtaigne grillée toastée. Le fond s'enroule autour d'une vanille crémeuse intense, ambre chaud, musc sensuel et une pointe d'oud subtil pour le twist oriental marocain. Parfait pour l'homme charismatique et séducteur de Casa – projection monstrueuse, tenue longue (8-12h), sillage qui attire les compliments à chaque pas ! Idéal pour les soirées hivernales ou quand tu veux marquer les esprits. (Associe-le au Citrus Impérial bleu pour un layering frais-gourmand de fou !)",
  image: img8,  // Remplace par le nom de cette image uploadée (ex. img4 ou img_stronger_orange)
  notes: "Gingembre, Cardamome, Poivre Rose, Lavande, Violette, Châtaigne Grillée, Vanille Crémeuse, Ambre, Musc, Oud Léger"
},
  {
  id: 4,  // Suite de la gamme (rose 1, cerise 2, citrus 3, ginger 4, noir 5 → celui-ci 6)
  nameEn: "Bleu Man Torso",
  nameFr: "Bleu Man Torso",
  nameAr: "الرجل الأزرق",
  category: "Men",
  price: 49,  // MAD – deal Ben Fares, livraison gratuite Casablanca/Maroc
  description: "Eau de Parfum Premium 50 ml – Frais bleu intense en flacon torse mannequin iconique, vibe masculine élégante",
  longDescription: 
    "BEN FARES Bleu Man Torso (50 ml) – hadi riha l'bleu li kat3jb lbnadem f'Casa ! Son flacon iconique en forme de torse masculin bleu profond, avec bouchon argenté chic, renferme une fragrance fraîche, sophistiquée et ultra-charismatique. L'ouverture explose en citrus pétillant (bergamote, citron, pamplemousse) mêlé à une menthe vivifiante et poivre rose pour un kick marin immédiat. Le cœur apporte de la chaleur aromatique avec gingembre, noix de muscade et jasmin subtil. Le fond s'ancre dans un bois élégant : cèdre sec, santal crémeux, ambre chaud et une touche d'encens pour profondeur. Parfait pour l'homme moderne et confiant – du bureau à la corniche de Casa aux soirées, tenue solide (7-10h), sillage frais qui attire les compliments sans être lourd. Polyvalent toute l'année, layering possible avec le Ginger Oriental pour un twist épicé !",
  image: img4,
  notes: "Bergamote, Citron, Pamplemousse, Menthe, Poivre Rose, Gingembre, Noix de Muscade, Jasmin, Cèdre, Santal, Ambre, Encens"
},
  {
  id: 5,
  nameEn: "Bleu de Fares",
  nameFr: "Bleu de Fares",
  nameAr: "أزرق فارس",
  category: "Men",
  price: 49,
  description: "Eau de Parfum Premium 50 ml – Clone ultra-proche de Bleu de Chanel : citrus frais, gingembre vif et bois élégant",
  longDescription: 
    "BEN FARES Bleu de Fares (50 ml) – hadi riha l'bleu li kat3jb lbnadem f'Casa, dupe parfait du mythique Bleu de Chanel ! Flacon cristal limpide avec bouchon bleu royal luxueux, fragrance masculine raffinée et addictive. Ouverture explosive : pamplemousse, citron, menthe et poivre rose pour un frais immédiat. Cœur épicé : gingembre piquant, noix de muscade et jasmin subtil. Fond sophistiqué : encens, cèdre, vétiver, santal, patchouli et musc blanc – tenue longue (8h+), sillage magnétique qui remplit la pièce sans agresser. Idéal pour le bureau, la corniche ou les soirées chic à Casablanca. Polyvalent toute l'année, compliments assurés ! (Layer avec le Ginger Oriental pour un boost épicé de ouf.)",
  image: img5,
  notes: "Pamplemousse, Citron, Menthe, Poivre Rose, Gingembre, Noix de Muscade, Jasmin, Encens, Cèdre, Vétiver, Santal, Patchouli, Musc Blanc"
},
  {
  id: 6,
  nameEn: "Lavande Velours",
  nameFr: "Lavande Velours",
  nameAr: "الخزامى المخملية",
  category: "Women",
  price: 49,  // MAD – prix canon Ben Fares, livraison gratuite Casablanca/Maroc
  description: "Eau de Parfum Premium 50 ml – Lavande douce et veloutée avec touche florale apaisante, ambiance zen et romantique",
  longDescription: 
    "BEN FARES Lavande Velours (50 ml) – riha l'lavande li kat3jb lbnat f'Casa, ode à la douceur des champs de lavande sous le soleil marocain ! Son flacon cristal transparent et élégant, surmonté d'un bouchon or raffiné, renferme une fragrance féminine ultra-calmante et addictive. L'ouverture s'ouvre sur une lavande fraîche et aromatique, mêlée à des notes herbacées vertes légères et une pointe de bergamote citronnée pour un réveil doux. Le cœur s'épanouit en un bouquet floral velouté : lavande pure, fleurs blanches tendres et une douceur miellée subtile. Le fond enveloppe la peau d'une vanille crémeuse, ambre chaud et santal lisse pour une tenue longue et un sillage réconfortant. Parfait pour la femme romantique et zen – idéal pour les journées calmes, soirées cocooning ou quand tu veux sentir propre et élégante à Casablanca. Longévité 7-9h, compliments doux et naturels garantis ! (Layer avec le Rose Pétales Doux pour un floral gourmand de ouf.)",
  image: img6,
  notes: "Lavande Fraîche, Notes Herbacées Vertes, Bergamote, Fleurs Blanches, Vanille Crémeuse, Ambre, Santal"
},
  {
  id: 7,
  nameEn: "Rose Romance",
  nameFr: "Rose Romance",
  nameAr: "رومانسية الورد",
  category: "Women",
  price: 49,  // MAD – prix Ben Fares canon, livraison gratuite Casablanca/Maroc
  description: "Eau de Parfum Premium 50 ml – Rose pétales douce et gourmande avec explosion florale romantique",
  longDescription: 
    "BEN FARES Rose Romance (50 ml) – riha l'rose li kat3jb lbnat f'Casa, explosion de tendresse et de gourmandise comme un bouquet de roses fraîches cueillies au matin ! Son flacon cristal rose délicat, surmonté d'un bouchon or élégant, renferme une fragrance féminine ultra-romantique et addictive. L'ouverture s'ouvre sur des pétales de rose frais et veloutés, mêlés à une touche de baies rouges légères et bergamote pour un éclat joyeux. Le cœur s'épanouit en un bouquet floral poudré : rose centifolia pure, pivoine tendre et fleurs blanches subtiles. Le fond enveloppe de vanille crémeuse, ambre doux et une pointe de bois légers pour une tenue longue et un sillage doux qui colle à la peau. Parfait pour la femme romantique, coquette et confiante – idéal pour les dates, journées douces ou quand tu veux sentir fresh et feminine à Casablanca. Longévité 7-9h, compliments massifs (les filles adorent !) – layer avec le Jasmin ou Lavande Velours pour un floral de ouf.",
  image: img7,
  notes: "Pétales de Rose, Baies Rouges, Bergamote, Rose Centifolia, Pivoine, Fleurs Blanches, Vanille Crémeuse, Ambre, Bois Légers"
},
  {
    id: 8,
    nameEn: "BEN FARES Trilogy Pack",
    nameFr: "Pack Trilogie BEN FARES",
    nameAr: "مجموعة ثلاثيات بن فارس",
    category: "Luxury",
    price: 149,
    description: "Exclusive 3-piece luxury collection - Premium 50ml fragrances with neon-inspired design",
    longDescription:
      "The BEN FARES Trilogy Pack is the ultimate expression of luxury and craftsmanship. This exceptional collection features three exquisite fragrances displayed in premium crystal bottles with electrifying neon-inspired lighting effects - featuring the enchanting dance of blue, pink, and purple luminescence. Each 50ML bottle is a masterpiece, carefully curated to represent different facets of Moroccan olfactory heritage. The entire ensemble is beautifully presented in an elegant luxury gift box adorned with authentic Moroccan patterns in gold embossing. Perfect as a cherished gift or as a personal treasure representing sophistication and timeless elegance.",
    image: img3,
    notes: "Floral, Fruity, Woody - Mixed Collection"
  }
];