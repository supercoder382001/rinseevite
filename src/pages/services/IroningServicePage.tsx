
import React from 'react';
import { AlignJustify, CheckCircle } from 'lucide-react';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import AnimatedSection from '@/components/AnimatedSection';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

// Sample data based on the new structure
const ironingItems = [
  {
    "name": "Long Coat",
    "finalprice": 119,
    "category": "Men",
    "type": "Steam Iron"
  },
  {
    "name": "Jeans Flat Front",
    "finalprice": 12,
    "category": "Men",
    "type": "Steam Iron"
  },
  {
    "name": "Shirt",
    "finalprice": 17,
    "category": "Men",
    "type": "Steam Iron"
  },
  {
    "name": "Trousers Flat Front",
    "finalprice": 20,
    "category": "Men",
    "type": "Steam Iron"
  },
  {
    "name": "Kurta",
    "finalprice": 14,
    "category": "Men",
    "type": "Steam Iron"
  },
  {
    "name": "Sweater",
    "finalprice": 60,
    "category": "Men",
    "type": "Steam Iron"
  },
  {
    "name": "Woolen Jacket",
    "finalprice": 99,
    "category": "Men",
    "type": "Steam Iron"
  },
  {
    "name": "Suit (2 Pc)",
    "finalprice": 105,
    "category": "Men",
    "type": "Steam Iron"
  },
  {
    "name": "Suit (3 Pc)",
    "finalprice": 125,
    "category": "Men",
    "type": "Steam Iron"
  },
  {
    "name": "Sherwani",
    "finalprice": 99,
    "category": "Men",
    "type": "Steam Iron"
  },
  {
    "name": "Dhoti Silk",
    "finalprice": 30,
    "category": "Men",
    "type": "Steam Iron"
  },
  {
    "name": "Dhoti Silk Double",
    "finalprice": 40,
    "category": "Men",
    "type": "Steam Iron"
  },
  {
    "name": "Blazer",
    "finalprice": 90,
    "category": "Men",
    "type": "Steam Iron"
  },
  {
    "name": "Dhoti Single",
    "finalprice": 20,
    "category": "Men",
    "type": "Steam Iron"
  },
  {
    "name": "Coat/Blazer",
    "finalprice": 99,
    "category": "Men",
    "type": "Steam Iron"
  },
  {
    "name": "Jeans Crease Front",
    "finalprice": 14,
    "category": "Men",
    "type": "Steam Iron"
  },
  {
    "name": "Safari Shirt & Pant",
    "finalprice": 49,
    "category": "Men",
    "type": "Steam Iron"
  },
  {
    "name": "Trousers Crease Front",
    "finalprice": 25,
    "category": "Men",
    "type": "Steam Iron"
  },
  {
    "name": "Indo Western",
    "finalprice": 344,
    "category": "Men",
    "type": "Steam Iron"
  },
  {
    "name": "Kurta ( Silk )",
    "finalprice": 89,
    "category": "Men",
    "type": "Steam Iron"
  },
  {
    "name": "Kurta Heavy",
    "finalprice": 110,
    "category": "Men",
    "type": "Steam Iron"
  },
  {
    "name": "Track Pant",
    "finalprice": 44,
    "category": "Men",
    "type": "Steam Iron"
  },
  {
    "name": "Blouse",
    "finalprice": 49,
    "category": "Women",
    "type": "Steam Iron"
  },
  {
    "name": "Shawl - Pashmina",
    "finalprice": 339,
    "category": "Men",
    "type": "Steam Iron"
  },
  {
    "name": "Jacket Puffer Long",
    "finalprice": 189,
    "category": "Men",
    "type": "Steam Iron"
  },
  {
    "name": "Pyjama",
    "finalprice": 49,
    "category": "Men",
    "type": "Steam Iron"
  },
  {
    "name": "T-Shirt",
    "finalprice": 20,
    "category": "Men",
    "type": "Steam Iron"
  },
  {
    "name": "Dress",
    "finalprice": 74,
    "category": "Women",
    "type": "Steam Iron"
  },
  {
    "name": "Tuxedo ( 3 pcs )",
    "finalprice": 398,
    "category": "Men",
    "type": "Steam Iron"
  },
  {
    "name": "Waist Coat",
    "finalprice": 74,
    "category": "Men",
    "type": "Steam Iron"
  },
  {
    "name": "Sweater - Full Sleeve",
    "finalprice": 99,
    "category": "Men",
    "type": "Steam Iron"
  },
  {
    "name": "Sweater - Sleeveless",
    "finalprice": 84,
    "category": "Men",
    "type": "Steam Iron"
  },
  {
    "name": "Shawl - Toosh",
    "finalprice": 499,
    "category": "Men",
    "type": "Steam Iron"
  },
  {
    "name": "Shawl/Lohi",
    "finalprice": 99,
    "category": "Men",
    "type": "Steam Iron"
  },
  {
    "name": "Jacket Leather",
    "finalprice": 399,
    "category": "Men",
    "type": "Steam Iron"
  },
  {
    "name": "Jacket Normal Short",
    "finalprice": 99,
    "category": "Men",
    "type": "Steam Iron"
  },
  {
    "name": "Jacket Rexine",
    "finalprice": 149,
    "category": "Men",
    "type": "Steam Iron"
  },
  {
    "name": "Jacket Puffer Short",
    "finalprice": 139,
    "category": "Men",
    "type": "Steam Iron"
  },
  {
    "name": "Blouse Heavy Work",
    "finalprice": 64,
    "category": "Women",
    "type": "Steam Iron"
  },
  {
    "name": "Blouse Designer",
    "finalprice": 79,
    "category": "Women",
    "type": "Steam Iron"
  },
  {
    "name": "Blouse Normal",
    "finalprice": 34,
    "category": "Women",
    "type": "Steam Iron"
  },
  {
    "name": "Coat - Short",
    "finalprice": 89,
    "category": "Women",
    "type": "Steam Iron"
  },
  {
    "name": "Lehenga Designer",
    "finalprice": 359,
    "category": "Women",
    "type": "Steam Iron"
  },
  {
    "name": "Jacket Normal Short",
    "finalprice": 99,
    "category": "Women",
    "type": "Steam Iron"
  },
  {
    "name": "Jacket Puffer Long",
    "finalprice": 189,
    "category": "Women",
    "type": "Steam Iron"
  },
  {
    "name": "Lehenga Medium Work",
    "finalprice": 209,
    "category": "Women",
    "type": "Steam Iron"
  },
  {
    "name": "Jeans Crease Front",
    "finalprice": 14,
    "category": "Women",
    "type": "Steam Iron"
  },
  {
    "name": "T-Shirt",
    "finalprice": 20,
    "category": "Women",
    "type": "Steam Iron"
  },
  {
    "name": "Jeans Flat Front",
    "finalprice": 12,
    "category": "Women",
    "type": "Steam Iron"
  },
  {
    "name": "Shirt",
    "finalprice": 17,
    "category": "Women",
    "type": "Steam Iron"
  },
  {
    "name": "Dupatta",
    "finalprice": 49,
    "category": "Women",
    "type": "Steam Iron"
  },
  {
    "name": "Jumpsuit",
    "finalprice": 30,
    "category": "Women",
    "type": "Steam Iron"
  },
  {
    "name": "Saree Plain",
    "finalprice": 89,
    "category": "Women",
    "type": "Steam Iron"
  },
  {
    "name": "Jacket Leather",
    "finalprice": 399,
    "category": "Women",
    "type": "Steam Iron"
  },
  {
    "name": "Jacket Puffer Short",
    "finalprice": 149,
    "category": "Women",
    "type": "Steam Iron"
  },
  {
    "name": "Waist Coat",
    "finalprice": 59,
    "category": "Women",
    "type": "Steam Iron"
  },
  {
    "name": "Bath Towel",
    "finalprice": 29,
    "category": "Household",
    "type": "Steam Iron"
  },
  {
    "name": "Bed Sheet Double",
    "finalprice": 99,
    "category": "Household",
    "type": "Steam Iron"
  },
  {
    "name": "Bed Sheet Single",
    "finalprice": 59,
    "category": "Household",
    "type": "Steam Iron"
  },
  {
    "name": "Hand Towel",
    "finalprice": 24,
    "category": "Household",
    "type": "Steam Iron"
  },
  {
    "name": "Blanket Double",
    "finalprice": 224,
    "category": "Household",
    "type": "Steam Iron"
  },
  {
    "name": "Blanket Single",
    "finalprice": 174,
    "category": "Household",
    "type": "Steam Iron"
  },
  {
    "name": "Shrug",
    "finalprice": 59,
    "category": "Women",
    "type": "Steam Iron"
  },
  {
    "name": "Quilt ( Single )",
    "finalprice": 224,
    "category": "Household",
    "type": "Steam Iron"
  },
  {
    "name": "Sofa cover - \r\nLace ( Single )",
    "finalprice": 189,
    "category": "Household",
    "type": "Steam Iron"
  },
  {
    "name": "Kurta",
    "finalprice": 16,
    "category": "Kids",
    "type": "Steam Iron"
  },
  {
    "name": "Coat / Blazer",
    "finalprice": 89,
    "category": "Kids",
    "type": "Steam Iron"
  },
  {
    "name": "Shirt",
    "finalprice": 14,
    "category": "Kids",
    "type": "Steam Iron"
  },
  {
    "name": "Cotton Frock",
    "finalprice": 20,
    "category": "Kids",
    "type": "Steam Iron"
  },
  {
    "name": "Blouse/Top",
    "finalprice": 29,
    "category": "Kids",
    "type": "Steam Iron"
  },
  {
    "name": "Dress",
    "finalprice": 59,
    "category": "Kids",
    "type": "Steam Iron"
  },
  {
    "name": "Dress (Heavy)",
    "finalprice": 149,
    "category": "Kids",
    "type": "Steam Iron"
  },
  {
    "name": "Ethnic Kurta Set",
    "finalprice": 89,
    "category": "Kids",
    "type": "Steam Iron"
  },
  {
    "name": "Ethnic Wear (Normal / Heavy work)",
    "finalprice": 99,
    "category": "Kids",
    "type": "Steam Iron"
  },
  {
    "name": "Jumpsuit",
    "finalprice": 16,
    "category": "Kids",
    "type": "Steam Iron"
  },
  {
    "name": "Jacket",
    "finalprice": 74,
    "category": "Kids",
    "type": "Steam Iron"
  },
  {
    "name": "Sweater (Sleeveless)",
    "finalprice": 54,
    "category": "Kids",
    "type": "Steam Iron"
  },
  {
    "name": "Sweater (Full Sleeves)",
    "finalprice": 59,
    "category": "Kids",
    "type": "Steam Iron"
  },
  {
    "name": "Suit 3 Pc",
    "finalprice": 89,
    "category": "Kids",
    "type": "Steam Iron"
  },
  {
    "name": "Suit 2 Pc",
    "finalprice": 79,
    "category": "Kids",
    "type": "Steam Iron"
  },
  {
    "name": "Pyjama",
    "finalprice": 22,
    "category": "Kids",
    "type": "Steam Iron"
  },
  {
    "name": "Frock",
    "finalprice": 20,
    "category": "Kids",
    "type": "Steam Iron"
  },
  {
    "name": "Designer Frock",
    "finalprice": 49,
    "category": "Kids",
    "type": "Steam Iron"
  },
  {
    "name": "Blouse",
    "finalprice": 19,
    "category": "Kids",
    "type": "Steam Iron"
  },
  {
    "name": "Table Cloth Small",
    "finalprice": 44,
    "category": "Household",
    "type": "Steam Iron"
  },
  {
    "name": "Table Cloth Big",
    "finalprice": 74,
    "category": "Household",
    "type": "Steam Iron"
  },
  {
    "name": "Sofa cover - \r\nNormal ( Single )",
    "finalprice": 172,
    "category": "Household",
    "type": "Steam Iron"
  },
  {
    "name": "Shorts",
    "finalprice": 10,
    "category": "Women",
    "type": "Steam Iron"
  },
  {
    "name": "Shorts",
    "finalprice": 10,
    "category": "Men",
    "type": "Steam Iron"
  },
  {
    "name": "Shorts",
    "finalprice": 19,
    "category": "Kids",
    "type": "Steam Iron"
  },
  {
    "name": "Jeans",
    "finalprice": 19,
    "category": "Kids",
    "type": "Steam Iron"
  },
  {
    "name": "Dhoti Double",
    "finalprice": 30,
    "category": "Men",
    "type": "Steam Iron"
  },
  {
    "name": "Track Suit",
    "finalprice": 89,
    "category": "Men",
    "type": "Steam Iron"
  },
  {
    "name": "Tuxedo Designer ( 3 pcs )",
    "finalprice": 498,
    "category": "Men",
    "type": "Steam Iron"
  },
  {
    "name": "Jacket Normal Long",
    "finalprice": 124,
    "category": "Men",
    "type": "Steam Iron"
  },
  {
    "name": "Jacket Rexine",
    "finalprice": 119,
    "category": "Women",
    "type": "Steam Iron"
  },
  {
    "name": "Choli",
    "finalprice": 149,
    "category": "Women",
    "type": "Steam Iron"
  },
  {
    "name": "Pants",
    "finalprice": 24,
    "category": "Men",
    "type": "Steam Iron"
  },
  {
    "name": "Blazer/Coat Long",
    "finalprice": 199,
    "category": "Men",
    "type": "Steam Iron"
  },
  {
    "name": "Blazer/Coat Short",
    "finalprice": 124,
    "category": "Men",
    "type": "Steam Iron"
  },
  {
    "name": "Dress (Cotton)",
    "finalprice": 109,
    "category": "Women",
    "type": "Steam Iron"
  },
  {
    "name": "SweatShirt/Jumper",
    "finalprice": 99,
    "category": "Men",
    "type": "Steam Iron"
  },
  {
    "name": "Coat - Long",
    "finalprice": 114,
    "category": "Women",
    "type": "Steam Iron"
  },
  {
    "name": "Dress (Heavy)",
    "finalprice": 224,
    "category": "Women",
    "type": "Steam Iron"
  },
  {
    "name": "Dress Indo Western",
    "finalprice": 349,
    "category": "Women",
    "type": "Steam Iron"
  },
  {
    "name": "Ladies Suit (2 Pc)",
    "finalprice": 149,
    "category": "Women",
    "type": "Steam Iron"
  },
  {
    "name": "Ladies Suit (3 Pc)",
    "finalprice": 199,
    "category": "Women",
    "type": "Steam Iron"
  },
  {
    "name": "Lehenga Heavy Work",
    "finalprice": 239,
    "category": "Women",
    "type": "Steam Iron"
  },
  {
    "name": "Choli + \r\nLehenga + Dupatta",
    "finalprice": 349,
    "category": "Women",
    "type": "Steam Iron"
  },
  {
    "name": "Muffler (Woolen/\r\nPashmina)",
    "finalprice": 109,
    "category": "Men",
    "type": "Steam Iron"
  },
  {
    "name": "Lehenga Normal Work",
    "finalprice": 179,
    "category": "Women",
    "type": "Steam Iron"
  },
  {
    "name": "Lehenga / Flared Skirt",
    "finalprice": 179,
    "category": "Women",
    "type": "Steam Iron"
  },
  {
    "name": "Lehenga / Ghagra",
    "finalprice": 199,
    "category": "Women",
    "type": "Steam Iron"
  },
  {
    "name": "Salwar / Churidar 3 Pcs",
    "finalprice": 149,
    "category": "Women",
    "type": "Steam Iron"
  },
  {
    "name": "Anarkali Suit - Heavy",
    "finalprice": 199,
    "category": "Women",
    "type": "Steam Iron"
  },
  {
    "name": "Anarkali Suit - Light",
    "finalprice": 149,
    "category": "Women",
    "type": "Steam Iron"
  },
  {
    "name": "Saree Designer",
    "finalprice": 179,
    "category": "Women",
    "type": "Steam Iron"
  },
  {
    "name": "Silk Saree",
    "finalprice": 119,
    "category": "Women",
    "type": "Steam Iron"
  },
  {
    "name": "Jacket Normal Long\n",
    "finalprice": 124,
    "category": "Women",
    "type": "Steam Iron"
  },
  {
    "name": "Dupatta Heavy Work",
    "finalprice": 74,
    "category": "Women",
    "type": "Steam Iron"
  },
  {
    "name": "Kameez - Silk",
    "finalprice": 25,
    "category": "Women",
    "type": "Steam Iron"
  },
  {
    "name": "Sharara",
    "finalprice": 70,
    "category": "Women",
    "type": "Steam Iron"
  },
  {
    "name": "Night Dress",
    "finalprice": 47,
    "category": "Women",
    "type": "Steam Iron"
  },
  {
    "name": "Designer Choli + \r\nLehenga + Dupatta",
    "finalprice": 749,
    "category": "Women",
    "type": "Steam Iron"
  },
  {
    "name": "Saree\r\n(Embroidered/Heavy)",
    "finalprice": 169,
    "category": "Women",
    "type": "Steam Iron"
  },
  {
    "name": "Sweater  -  Full Sleeve",
    "finalprice": 99,
    "category": "Women",
    "type": "Steam Iron"
  },
  {
    "name": "Saree \r\n( Cotton / Synthetic)",
    "finalprice": 99,
    "category": "Women",
    "type": "Steam Iron"
  },
  {
    "name": "Cardigan - Sleeveless",
    "finalprice": 84,
    "category": "Women",
    "type": "Steam Iron"
  },
  {
    "name": "Cardigan - Full Sleeve",
    "finalprice": 99,
    "category": "Women",
    "type": "Steam Iron"
  },
  {
    "name": "Sweater  -  Sleeveless",
    "finalprice": 84,
    "category": "Women",
    "type": "Steam Iron"
  },
  {
    "name": "Shawl Pashmina",
    "finalprice": 349,
    "category": "Women",
    "type": "Steam Iron"
  },
  {
    "name": "Shawl Shahtoosh",
    "finalprice": 449,
    "category": "Women",
    "type": "Steam Iron"
  },
  {
    "name": "Shawl Woolen",
    "finalprice": 149,
    "category": "Women",
    "type": "Steam Iron"
  },
  {
    "name": "Gown Long Heavy work",
    "finalprice": 179,
    "category": "Women",
    "type": "Steam Iron"
  },
  {
    "name": "Gown Long Normal",
    "finalprice": 119,
    "category": "Women",
    "type": "Steam Iron"
  },
  {
    "name": "Gown Short Heavy Work",
    "finalprice": 149,
    "category": "Women",
    "type": "Steam Iron"
  },
  {
    "name": "Gown Short Normal",
    "finalprice": 89,
    "category": "Women",
    "type": "Steam Iron"
  },
  {
    "name": "Palazo Pant",
    "finalprice": 69,
    "category": "Women",
    "type": "Steam Iron"
  },
  {
    "name": "Stole / Scarf",
    "finalprice": 44,
    "category": "Women",
    "type": "Steam Iron"
  },
  {
    "name": "Socks Pair",
    "finalprice": 14,
    "category": "Women",
    "type": "Steam Iron"
  },
  {
    "name": "Socks Pair",
    "finalprice": 14,
    "category": "Women",
    "type": "Steam Iron"
  },
  {
    "name": "Bath Mat ( Large )",
    "finalprice": 44,
    "category": "Household",
    "type": "Steam Iron"
  },
  {
    "name": "Bath Mat ( Small )",
    "finalprice": 24,
    "category": "Household",
    "type": "Steam Iron"
  },
  {
    "name": "Bath Robe ( Medium )",
    "finalprice": 34,
    "category": "Household",
    "type": "Steam Iron"
  },
  {
    "name": "Bath Robe ( Big )",
    "finalprice": 44,
    "category": "Household",
    "type": "Steam Iron"
  },
  {
    "name": "Bath Robe ( Small )",
    "finalprice": 29,
    "category": "Household",
    "type": "Steam Iron"
  },
  {
    "name": "Bed Cover Double",
    "finalprice": 174,
    "category": "Household",
    "type": "Steam Iron"
  },
  {
    "name": "Bed Cover Single",
    "finalprice": 124,
    "category": "Household",
    "type": "Steam Iron"
  },
  {
    "name": "Curtain - Embroidery \r\nWork [Per Panel]",
    "finalprice": 134,
    "category": "Household",
    "type": "Steam Iron"
  },
  {
    "name": "Curtain - Cotton \r\n[Per Panel]",
    "finalprice": 114,
    "category": "Household",
    "type": "Steam Iron"
  },
  {
    "name": "Curtain - Lace \r\n[Per Panel]",
    "finalprice": 144,
    "category": "Household",
    "type": "Steam Iron"
  },
  {
    "name": "Curtain - With Lining\r\n[Per Panel]",
    "finalprice": 174,
    "category": "Household",
    "type": "Steam Iron"
  },
  {
    "name": "Curtain - Without \r\nLining [ Per Panel ]",
    "finalprice": 119,
    "category": "Household",
    "type": "Steam Iron"
  },
  {
    "name": "Cushion Cover \r\n( Medium )",
    "finalprice": 44,
    "category": "Household",
    "type": "Steam Iron"
  },
  {
    "name": "Cushion Cover \nEmbroidery (Any Size)",
    "finalprice": 84,
    "category": "Household",
    "type": "Steam Iron"
  },
  {
    "name": "Pillow Cover - \nCotton / Terry Cotton",
    "finalprice": 34,
    "category": "Household",
    "type": "Steam Iron"
  },
  {
    "name": "Pillow Cover - Embroidery",
    "finalprice": 49,
    "category": "Household",
    "type": "Steam Iron"
  },
  {
    "name": "Pillow Cover 2 pc",
    "finalprice": 29,
    "category": "Household",
    "type": "Steam Iron"
  },
  {
    "name": "Quilt ( Double )",
    "finalprice": 274,
    "category": "Household",
    "type": "Steam Iron"
  },
  {
    "name": "Cushion Cover\r\n( Small )",
    "finalprice": 34,
    "category": "Household",
    "type": "Steam Iron"
  },
  {
    "name": "Quilt Cover ( Double )",
    "finalprice": 174,
    "category": "Household",
    "type": "Steam Iron"
  },
  {
    "name": "Quilt Cover ( Single )",
    "finalprice": 119,
    "category": "Household",
    "type": "Steam Iron"
  },
  {
    "name": "Razai",
    "finalprice": 234,
    "category": "Household",
    "type": "Steam Iron"
  },
  {
    "name": "Cushion Cover \r\n( Large )",
    "finalprice": 59,
    "category": "Household",
    "type": "Steam Iron"
  },
  {
    "name": "Sofa cover - \r\nEmbroidery ( Single )",
    "finalprice": 234,
    "category": "Household",
    "type": "Steam Iron"
  }
];

const IroningServicePage = () => {
  const processSteps = [
    {
      title: "Inspection & Organization",
      description: "We carefully inspect each garment for special care needs and organize items by fabric type."
    },
    {
      title: "Steam Treatment",
      description: "Items are lightly sprayed or steamed to prepare them for optimal ironing results."
    },
    {
      title: "Professional Pressing",
      description: "Each garment is expertly pressed with attention to details like pleats, cuffs, and collars."
    },
    {
      title: "Finishing & Packaging",
      description: "Your crisply ironed items are hung or folded as appropriate and packaged for delivery."
    }
  ];

  const pricingItems = [
    {
      name: "Standard Ironing",
      price: "From ₹20 per item",
      description: "Professional ironing for everyday clothing items."
    },
    {
      name: "Premium Ironing",
      price: "From ₹40 per item",
      description: "Detailed ironing for formal wear and complex garments."
    },
    {
      name: "Bulk Service",
      price: "From ₹15 per item",
      description: "Special rates for large quantities of items."
    }
  ];

  // Create categories from the data
  const categorizedItems = {
    "Men": ironingItems.filter(item => item.category === "Men"),
    "Women": ironingItems.filter(item => item.category === "Women"),
    "Kids": ironingItems.filter(item => item.category === "Kids"),
    "Household": ironingItems.filter(item => item.category === "Household")
  };

  const PricingTable = () => (
    <div>
      <h3 className="text-2xl font-bold mb-6 text-center">Detailed Pricing</h3>
      
      {Object.entries(categorizedItems).map(([category, items]) => (
        items.length > 0 && (
          <div key={category} className="mb-8">
            <h4 className="text-xl font-semibold mb-3">{category}</h4>
            <div className="rounded-lg border border-gray-200 overflow-hidden">
              <ScrollArea className="w-full h-[300px]">
                <div className="min-w-full">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Item</TableHead>
                        <TableHead>Price</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {items.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{item.name}</TableCell>
                          <TableCell>₹{item.finalprice}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>
          </div>
        )
      ))}
    </div>
  );

  const AdditionalContent = () => (
    <AnimatedSection>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">The Professional Touch</h2>
        
        <div className="mb-8 bg-laundry-50 p-6 rounded-lg">
          <p className="text-lg mb-4">
            There's a distinct difference between home ironing and professional pressing. Our ironing service delivers that crisp, polished look that's hard to achieve at home, even with the best equipment.
          </p>
          <p className="text-lg">
            Whether it's for a job interview, important meeting, special event, or simply to maintain a professional appearance, our ironing service helps you make a lasting impression.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="bg-laundry-100 p-2 rounded-full mr-3">
                <CheckCircle className="text-laundry-600 h-5 w-5" />
              </span>
              Expert Technique
            </h3>
            <p>
              Our pressers have years of experience and know exactly how to handle different fabrics and garment types. They understand the right temperature, pressure, and technique for everything from cotton shirts to silk blouses.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="bg-laundry-100 p-2 rounded-full mr-3">
                <CheckCircle className="text-laundry-600 h-5 w-5" />
              </span>
              Professional Equipment
            </h3>
            <p>
              We use industrial-grade steam irons, presses, and finishing equipment that deliver results far superior to home ironing. Our professional steamers can remove even the most stubborn wrinkles.
            </p>
          </div>
        </div>
        
        <div className="bg-laundry-600 p-6 rounded-lg text-white mb-12">
          <h3 className="text-xl font-semibold mb-4 text-center">Popular Items</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-3">
              <p className="font-semibold">Business Shirts</p>
              <p className="text-laundry-100">₹20/each</p>
            </div>
            <div className="p-3">
              <p className="font-semibold">Dress Pants</p>
              <p className="text-laundry-100">₹25/each</p>
            </div>
            <div className="p-3">
              <p className="font-semibold">Blouses</p>
              <p className="text-laundry-100">₹30/each</p>
            </div>
            <div className="p-3">
              <p className="font-semibold">Skirts</p>
              <p className="text-laundry-100">₹35-₹45</p>
            </div>
          </div>
        </div>
        
        <PricingTable />
      </div>
    </AnimatedSection>
  );

  return (
    <ServicePageTemplate
      icon={AlignJustify}
      title="Ironing & Pressing Service"
      description="Achieve that crisp, professional look with our expert ironing and pressing service. We pay close attention to every detail, from collars and cuffs to pleats and creases."
      image="/images/steam.png"
      processSteps={processSteps}
      pricingItems={pricingItems}
      additionalInfo="Same-day service available for orders received before 10am. Corporate accounts welcome with volume discounts."
      additionalImages={[
        "https://source.unsplash.com/random/800x600?ironing,shirt",
        "https://source.unsplash.com/random/800x600?steam,iron",
        "https://source.unsplash.com/random/800x600?pressing,clothes"
      ]}
      additionalContent={<AdditionalContent />}
    />
  );
};

export default IroningServicePage;
