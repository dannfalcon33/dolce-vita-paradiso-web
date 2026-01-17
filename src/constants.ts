import type {
  CompanyInfo,
  MenuCategory,
  MenuItem,
  NavLink,
  Wine,
  LocationInfo,
} from "./types";

// Images
// heroHome import removed (unused)
import dishBurrata from "./assets/images/dish_burrata_retry_1765558545304.webp";
import dishRisotto from "./assets/images/dish_highlight_1_1765550292520.webp";
import dishBranzino from "./assets/images/dish_branzino_1765558397577.webp";
import dishTiramisu from "./assets/images/dish_tiramisu_1765558411570.webp";
import chefMarco from "./assets/images/chef-rossi.webp";
import chefSofia from "./assets/images/somalier.webp";
import chefAlessandro from "./assets/images/sous-chef.webp";
import wineRed1 from "./assets/images/wine_red_1_1765558472859.webp";
import wineRed2 from "./assets/images/wine_red_2_1765558487810.webp";
import wineWhite from "./assets/images/wine_white_1765558500966.webp";
import wineSparkling from "./assets/images/wine_sparkling_1765558514853.webp";
import locNY from "./assets/images/location_ny_1765558427751.webp";
import locMilan from "./assets/images/location_milan_1765558443547.webp";
import locTokyo from "./assets/images/location_tokyo_1765558458036.webp";
import carpaccioDiManzo from "./assets/images/carpaccio_di_manzo.webp";
import calamarriFritti from "./assets/images/calamari_fritti.webp";
import PappardelleCinghiale from "./assets/images/pappardelle_al_cinghiale.webp";
import LasagnaBolognese from "./assets/images/lasagna_alla_bolognese.webp";
import SpaghettiCarbonara from "./assets/images/spaghetti_carbonara.webp";
import OssoBuco from "./assets/images/osso_buco.webp";
import CanolliSiciliani from "./assets/images/cannoli_siciliani.webp";
import PannaCotta from "./assets/images/panna_cotta.webp";

export const COMPANY_INFO: CompanyInfo = {
  name: "DOLCE VITA",
  tagline: "MODERN ITALIAN CUISINE",
  description:
    "Experience the Art of Dolce Vita Paradiso. Where culinary tradition meets modern luxury. An immersive Italian dining experience in the heart of the city.",
  copyright: "ALL RIGHTS RESERVED",
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", path: "/" },
  { label: "Menu", path: "/menu" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export const MENU_CATEGORIES: MenuCategory[] = [
  "Antipasti",
  "Primi",
  "Secondi",
  "Dolci",
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    category: "Antipasti",
    name: "Burrata al Tartufo",
    price: "24",
    description:
      "Creamy burrata, black truffle shavings, heirloom tomato confit.",
    image: dishBurrata,
  },
  {
    id: 2,
    category: "Antipasti",
    name: "Carpaccio di Manzo",
    price: "28",
    description:
      "Thinly sliced wagyu beef, capers, parmesan crisp, mustard aioli.",
    image: carpaccioDiManzo,
  },
  {
    id: 3,
    category: "Primi",
    name: "Risotto allo Zafferano",
    price: "32",
    description:
      "Acquerello rice, saffron pistils, edible gold leaf, bone marrow.",
    image: dishRisotto,
  },
  {
    id: 4,
    category: "Primi",
    name: "Pappardelle al Cinghiale",
    price: "30",
    description: "Hand-cut pasta, slow-cooked wild boar ragu, pecorino romano.",
    image: PappardelleCinghiale,
  },
  {
    id: 5,
    category: "Secondi",
    name: "Osso Buco",
    price: "45",
    description: "Braised veal shanks, gremolata, polenta concia.",
    image: OssoBuco,
  },
  {
    id: 6,
    category: "Secondi",
    name: "Branzino al Sale",
    price: "42",
    description: "Salt-crusted sea bass, roasted fennel, citrus emulsion.",
    image: dishBranzino,
  },
  {
    id: 7,
    category: "Dolci",
    name: "Tiramisu Moderno",
    price: "18",
    description:
      "Deconstructed mascarpone cream, coffee sphere, savoiardi dust.",
    image: dishTiramisu,
  },
  {
    id: 8,
    category: "Dolci",
    name: "Cannoli Siciliani",
    price: "16",
    description: "Ricotta filling, pistachio crumble, candied orange.",
    image: CanolliSiciliani,
  },
  {
    id: 9,
    category: "Primi",
    name: "Lasagna alla Bolognese",
    price: "26",
    description: "Rich meat sauce, béchamel, golden parmesan crust.",
    image: LasagnaBolognese,
  },
  {
    id: 10,
    category: "Primi",
    name: "Spaghetti Carbonara",
    price: "25",
    description:
      "Authentic recipe with guanciale, pecorino romano, egg yolk, and black pepper.",
    image: SpaghettiCarbonara,
  },
  {
    id: 11,
    category: "Antipasti",
    name: "Calamari Fritti",
    price: "22",
    description: "Crispy fried squid, lemon wedges, marinara sauce.",
    image: calamarriFritti,
  },
  {
    id: 12,
    category: "Dolci",
    name: "Panna Cotta",
    price: "16",
    description: "Vanilla bean panna cotta, wild berry coulis.",
    image: PannaCotta,
  },
];
// ...
export const WINE_SELECTION: Wine[] = [
  {
    id: 1,
    name: "Tignanello Marchesi Antinori",
    year: "2019",
    origin: "Tuscany",
    price: "280",
    type: "Red",
    image: wineRed1,
  },
  {
    id: 2,
    name: "Sassicaia Tenuta San Guido",
    year: "2018",
    origin: "Bolgheri",
    price: "350",
    type: "Red",
    image: wineRed2,
  },
  {
    id: 3,
    name: "Cervaro della Sala",
    year: "2021",
    origin: "Umbria",
    price: "120",
    type: "White",
    image: wineWhite,
  },
  {
    id: 4,
    name: "Ferrari Perlé",
    year: "2016",
    origin: "Trento",
    price: "95",
    type: "Sparkling",
    image: wineSparkling,
  },
];

export const LOCATIONS: LocationInfo[] = [
  {
    id: 1,
    city: "New York",
    address: "152 W 52nd St, New York, NY 10019",
    phone: "+1 (212) 555-0199",
    coordinates: { lat: 40.76, lng: -73.98 },
    image: locNY,
  },
  {
    id: 2,
    city: "Milan",
    address: "Via Monte Napoleone, 12, 20121 Milano MI",
    phone: "+39 02 555 0199",
    coordinates: { lat: 45.46, lng: 9.19 },
    image: locMilan,
  },
  {
    id: 3,
    city: "Tokyo",
    address: "Ginza 6-chome, Chuo-ku, Tokyo",
    phone: "+81 3 5555 0199",
    coordinates: { lat: 35.67, lng: 139.76 },
    image: locTokyo,
  },
];

export const ABOUT_CONTENT = {
  story: {
    title: "Tradition meets Innovation",
    p1: "Founded in 2024, Dolce Vita Paradiso was born from a desire to reimagine the Italian dining experience. We believe that food is not just sustenance, but a form of art that connects us to our roots while propelling us into the future.",
    p2: "Every dish tells a story of heritage, sourced from the finest ingredients and crafted with passion by our world-class chefs.",
  },
  stats: [
    { value: "25+", label: "Years Experience" },
    { value: "3", label: "Michelin Stars" },
  ],
  chef: {
    name: "Chef Marco Rossi",
    description:
      'With a philosophy rooted in "Semplicità Complessa" (Complex Simplicity), Chef Marco transforms humble ingredients into gastronomic masterpieces. His vision drives the culinary soul of Dolce Vita.',
  },
};

export const POPULAR_DISHES: MenuItem[] = [
  MENU_ITEMS[0], // Burrata
  MENU_ITEMS[2], // Risotto
  MENU_ITEMS[5], // Branzino
  MENU_ITEMS[6], // Tiramisu
];

export const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Marco Rossi",
    role: "Executive Chef",
    image: chefMarco,
    bio: "Michelin-starred visionary reinterpreting Italian classics.",
  },
  {
    id: 2,
    name: "Sofia Bianco",
    role: "Head Sommelier",
    image: chefSofia,
    bio: "Curator of our award-winning 500-label wine cellar.",
  },
  {
    id: 3,
    name: "Alessandro Neri",
    role: "Sous Chef",
    image: chefAlessandro,
    bio: "Master of handcrafted pasta and traditional fermentation.",
  },
];
