
import React from 'react';
import { Shirt, ShieldCheck } from 'lucide-react';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import AnimatedSection from '@/components/AnimatedSection';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

// Sample data based on the new structure
const dryCleaningItems = [
  {
    "name": "Shirt",
    "finalprice": 104,
    "category": "Men",
    "type": "Dry Cleaning"
  },
  {
    "name": "Suit (2 Pc)",
    "finalprice": 314,
    "category": "Men",
    "type": "Dry Cleaning"
  },
  {
    "name": "Suit (3 Pc)",
    "finalprice": 449,
    "category": "Men",
    "type": "Dry Cleaning"
  },
  {
    "name": "Sherwani",
    "finalprice": 275,
    "category": "Men",
    "type": "Dry Cleaning"
  },
  {
    "name": "Dhoti Silk Double",
    "finalprice": 219,
    "category": "Men",
    "type": "Dry Cleaning"
  },
  {
    "name": "Jeans Flat Front",
    "finalprice": 144,
    "category": "Men",
    "type": "Dry Cleaning"
  },
  {
    "name": "Pyjama",
    "finalprice": 89,
    "category": "Men",
    "type": "Dry Cleaning"
  },
  {
    "name": "Trousers Flat Front",
    "finalprice": 119,
    "category": "Men",
    "type": "Dry Cleaning"
  },
  {
    "name": "T-Shirt",
    "finalprice": 99,
    "category": "Men",
    "type": "Dry Cleaning"
  },
  {
    "name": "Kurta",
    "finalprice": 124,
    "category": "Men",
    "type": "Dry Cleaning"
  },
  {
    "name": "Sweater",
    "finalprice": 229,
    "category": "Men",
    "type": "Dry Cleaning"
  },
  {
    "name": "Dhoti Silk Double",
    "finalprice": 174,
    "category": "Men",
    "type": "Dry Cleaning"
  },
  {
    "name": "Blazer",
    "finalprice": 279,
    "category": "Men",
    "type": "Dry Cleaning"
  },
  {
    "name": "Dhoti Double",
    "finalprice": 119,
    "category": "Men",
    "type": "Dry Cleaning"
  },
  {
    "name": "Dhoti Single",
    "finalprice": 99,
    "category": "Men",
    "type": "Dry Cleaning"
  },
  {
    "name": "Jeans Crease Front",
    "finalprice": 149,
    "category": "Men",
    "type": "Dry Cleaning"
  },
  {
    "name": "Long Coat",
    "finalprice": 329,
    "category": "Men",
    "type": "Dry Cleaning"
  },
  {
    "name": "Trousers Crease Front",
    "finalprice": 129,
    "category": "Men",
    "type": "Dry Cleaning"
  },
  {
    "name": "Coat",
    "finalprice": 279,
    "category": "Men",
    "type": "Dry Cleaning"
  },
  {
    "name": "Indo Western",
    "finalprice": 599,
    "category": "Men",
    "type": "Dry Cleaning"
  },
  {
    "name": "Kurta ( Silk )",
    "finalprice": 199,
    "category": "Men",
    "type": "Dry Cleaning"
  },
  {
    "name": "Kurta Heavy",
    "finalprice": 229,
    "category": "Men",
    "type": "Dry Cleaning"
  },
  {
    "name": "Track Pant",
    "finalprice": 94,
    "category": "Men",
    "type": "Dry Cleaning"
  },
  {
    "name": "Track Suit",
    "finalprice": 179,
    "category": "Men",
    "type": "Dry Cleaning"
  },
  {
    "name": "Tuxedo ( 3 pcs )",
    "finalprice": 699,
    "category": "Men",
    "type": "Dry Cleaning"
  },
  {
    "name": "Tuxedo Designer ( 3 pcs )",
    "finalprice": 849,
    "category": "Men",
    "type": "Dry Cleaning"
  },
  {
    "name": "Waist Coat",
    "finalprice": 149,
    "category": "Men",
    "type": "Dry Cleaning"
  },
  {
    "name": "Jumper",
    "finalprice": 179,
    "category": "Men",
    "type": "Dry Cleaning"
  },
  {
    "name": "Sweater - Full Sleeve",
    "finalprice": 189,
    "category": "Men",
    "type": "Dry Cleaning"
  },
  {
    "name": "Sweater - Sleeveless",
    "finalprice": 179,
    "category": "Men",
    "type": "Dry Cleaning"
  },
  {
    "name": "Shawl - Toosh",
    "finalprice": 349,
    "category": "Men",
    "type": "Dry Cleaning"
  },
  {
    "name": "Shawl - Pashmina",
    "finalprice": 249,
    "category": "Men",
    "type": "Dry Cleaning"
  },
  {
    "name": "Jacket Leather",
    "finalprice": 499,
    "category": "Men",
    "type": "Dry Cleaning"
  },
  {
    "name": "Jacket Normal Long",
    "finalprice": 249,
    "category": "Men",
    "type": "Dry Cleaning"
  },
  {
    "name": "Jacket Puffer Long",
    "finalprice": 349,
    "category": "Men",
    "type": "Dry Cleaning"
  },
  {
    "name": "Jacket Puffer Short",
    "finalprice": 249,
    "category": "Men",
    "type": "Dry Cleaning"
  },
  {
    "name": "Blazer/Coat Long",
    "finalprice": 349,
    "category": "Men",
    "type": "Dry Cleaning"
  },
  {
    "name": "Shawl/Lohi",
    "finalprice": 189,
    "category": "Men",
    "type": "Dry Cleaning"
  },
  {
    "name": "Blouse",
    "finalprice": 89,
    "category": "Women",
    "type": "Dry Cleaning"
  },
  {
    "name": "Dress",
    "finalprice": 149,
    "category": "Women",
    "type": "Dry Cleaning"
  },
  {
    "name": "Saree Plain",
    "finalprice": 179,
    "category": "Women",
    "type": "Dry Cleaning"
  },
  {
    "name": "Dress (Cotton)",
    "finalprice": 219,
    "category": "Women",
    "type": "Dry Cleaning"
  },
  {
    "name": "Jacket Leather",
    "finalprice": 499,
    "category": "Women",
    "type": "Dry Cleaning"
  },
  {
    "name": "Jacket Normal Short",
    "finalprice": 199,
    "category": "Women",
    "type": "Dry Cleaning"
  },
  {
    "name": "Jacket Normal Long",
    "finalprice": 249,
    "category": "Women",
    "type": "Dry Cleaning"
  },
  {
    "name": "Jacket Rexine",
    "finalprice": 249,
    "category": "Women",
    "type": "Dry Cleaning"
  },
  {
    "name": "Jacket Puffer Long",
    "finalprice": 349,
    "category": "Women",
    "type": "Dry Cleaning"
  },
  {
    "name": "Muffler (Woolen/Pashmina)",
    "finalprice": 199,
    "category": "Men",
    "type": "Dry Cleaning"
  },
  {
    "name": "Blouse Heavy Work",
    "finalprice": 129,
    "category": "Women",
    "type": "Dry Cleaning"
  },
  {
    "name": "Blouse Designer",
    "finalprice": 159,
    "category": "Women",
    "type": "Dry Cleaning"
  },
  {
    "name": "Blouse Normal",
    "finalprice": 69,
    "category": "Women",
    "type": "Dry Cleaning"
  },
  {
    "name": "Designer Choli + Lehenga + Dupatta",
    "finalprice": 849,
    "category": "Women",
    "type": "Dry Cleaning"
  },
  {
    "name": "Lehenga Designer",
    "finalprice": 659,
    "category": "Women",
    "type": "Dry Cleaning"
  },
  {
    "name": "Choli",
    "finalprice": 289,
    "category": "Women",
    "type": "Dry Cleaning"
  },
  {
    "name": "Dress (Heavy)",
    "finalprice": 449,
    "category": "Women",
    "type": "Dry Cleaning"
  },
  {
    "name": "Dress Indo Western",
    "finalprice": 599,
    "category": "Women",
    "type": "Dry Cleaning"
  },
  {
    "name": "Coat - Long",
    "finalprice": 229,
    "category": "Women",
    "type": "Dry Cleaning"
  },
  {
    "name": "Coat - Short",
    "finalprice": 169,
    "category": "Women",
    "type": "Dry Cleaning"
  },
  {
    "name": "Ladies Suit (2 Pc)",
    "finalprice": 299,
    "category": "Women",
    "type": "Dry Cleaning"
  },
  {
    "name": "Ladies Suit (3 Pc)",
    "finalprice": 399,
    "category": "Women",
    "type": "Dry Cleaning"
  },
  {
    "name": "Lehenga Heavy Work",
    "finalprice": 469,
    "category": "Women",
    "type": "Dry Cleaning"
  },
  {
    "name": "Lehenga Medium Work",
    "finalprice": 419,
    "category": "Women",
    "type": "Dry Cleaning"
  },
  {
    "name": "Lehenga Normal Work",
    "finalprice": 359,
    "category": "Women",
    "type": "Dry Cleaning"
  },
  {
    "name": "Lehenga / Flared Skirt",
    "finalprice": 359,
    "category": "Women",
    "type": "Dry Cleaning"
  },
  {
    "name": "Lehenga / Ghagra",
    "finalprice": 399,
    "category": "Women",
    "type": "Dry Cleaning"
  },
  {
    "name": "Salwar / Churidar 3 Pcs",
    "finalprice": 299,
    "category": "Women",
    "type": "Dry Cleaning"
  },
  {
    "name": "Anarkali Suit - Heavy",
    "finalprice": 699,
    "category": "Women",
    "type": "Dry Cleaning"
  },
  {
    "name": "Anarkali Suit - Light",
    "finalprice": 449,
    "category": "Women",
    "type": "Dry Cleaning"
  },
  {
    "name": "Saree Designer",
    "finalprice": 599,
    "category": "Women",
    "type": "Dry Cleaning"
  },
  {
    "name": "Silk Saree",
    "finalprice": 299,
    "category": "Women",
    "type": "Dry Cleaning"
  },
  {
    "name": "Dupatta Heavy Work",
    "finalprice": 149,
    "category": "Women",
    "type": "Dry Cleaning"
  },
  {
    "name": "Kameez - Silk",
    "finalprice": 199,
    "category": "Women",
    "type": "Dry Cleaning"
  },
  {
    "name": "Sweater  -  Full Sleeve",
    "finalprice": 199,
    "category": "Women",
    "type": "Dry Cleaning"
  },
  {
    "name": "Shorts",
    "finalprice": 99,
    "category": "Women",
    "type": "Dry Cleaning"
  },
  {
    "name": "Shirt",
    "finalprice": 104,
    "category": "Women",
    "type": "Dry Cleaning"
  },
  {
    "name": "T-Shirt",
    "finalprice": 99,
    "category": "Women",
    "type": "Dry Cleaning"
  },
  {
    "name": "Jeans Crease Front",
    "finalprice": 149,
    "category": "Women",
    "type": "Dry Cleaning"
  },
  {
    "name": "Jeans Flat Front",
    "finalprice": 144,
    "category": "Women",
    "type": "Dry Cleaning"
  },
  {
    "name": "Waist Coat",
    "finalprice": 129,
    "category": "Women",
    "type": "Dry Cleaning"
  },
  {
    "name": "Jumpsuit",
    "finalprice": 99,
    "category": "Women",
    "type": "Dry Cleaning"
  },
  {
    "name": "Bath Towel",
    "finalprice": 59,
    "category": "Household",
    "type": "Dry Cleaning"
  },
  {
    "name": "Bed Sheet Double",
    "finalprice": 199,
    "category": "Household",
    "type": "Dry Cleaning"
  },
  {
    "name": "Kameez Silk - heavy",
    "finalprice": 279,
    "category": "Women",
    "type": "Dry Cleaning"
  },
  {
    "name": "Sharara",
    "finalprice": 129,
    "category": "Women",
    "type": "Dry Cleaning"
  },
  {
    "name": "Night Dress",
    "finalprice": 99,
    "category": "Women",
    "type": "Dry Cleaning"
  },
  {
    "name": "Saree\r\n(Embroidered/Heavy)",
    "finalprice": 349,
    "category": "Women",
    "type": "Dry Cleaning"
  },
  {
    "name": "Cardigan - Full Sleeve",
    "finalprice": 199,
    "category": "Women",
    "type": "Dry Cleaning"
  },
  {
    "name": "Sweater  -  Sleeveless",
    "finalprice": 169,
    "category": "Women",
    "type": "Dry Cleaning"
  },
  {
    "name": "Cardigan - Sleeveless",
    "finalprice": 169,
    "category": "Women",
    "type": "Dry Cleaning"
  },
  {
    "name": "Shawl Pashmina",
    "finalprice": 549,
    "category": "Women",
    "type": "Dry Cleaning"
  },
  {
    "name": "Shawl Shahtoosh",
    "finalprice": 599,
    "category": "Women",
    "type": "Dry Cleaning"
  },
  {
    "name": "Shawl Woolen",
    "finalprice": 349,
    "category": "Women",
    "type": "Dry Cleaning"
  },
  {
    "name": "Shrug",
    "finalprice": 129,
    "category": "Women",
    "type": "Dry Cleaning"
  },
  {
    "name": "Gown Long Heavy work",
    "finalprice": 359,
    "category": "Women",
    "type": "Dry Cleaning"
  },
  {
    "name": "Gown Long Normal",
    "finalprice": 239,
    "category": "Women",
    "type": "Dry Cleaning"
  },
  {
    "name": "Gown Short Heavy Work",
    "finalprice": 299,
    "category": "Women",
    "type": "Dry Cleaning"
  },
  {
    "name": "Gown Short Normal",
    "finalprice": 179,
    "category": "Women",
    "type": "Dry Cleaning"
  },
  {
    "name": "Palazo Pant",
    "finalprice": 139,
    "category": "Women",
    "type": "Dry Cleaning"
  },
  {
    "name": "Stole / Scarf",
    "finalprice": 89,
    "category": "Women",
    "type": "Dry Cleaning"
  },
  {
    "name": "Socks Pair",
    "finalprice": 29,
    "category": "Women",
    "type": "Dry Cleaning"
  },
  {
    "name": "Socks Pair",
    "finalprice": 29,
    "category": "Men",
    "type": "Dry Cleaning"
  },
  {
    "name": "Bath Mat ( Large )",
    "finalprice": 89,
    "category": "Household",
    "type": "Dry Cleaning"
  },
  {
    "name": "Bath Mat ( Small )",
    "finalprice": 49,
    "category": "Household",
    "type": "Dry Cleaning"
  },
  {
    "name": "Bath Robe ( Medium )",
    "finalprice": 69,
    "category": "Household",
    "type": "Dry Cleaning"
  },
  {
    "name": "Bath Robe ( Big )",
    "finalprice": 89,
    "category": "Household",
    "type": "Dry Cleaning"
  },
  {
    "name": "Bath Robe ( Small )",
    "finalprice": 59,
    "category": "Household",
    "type": "Dry Cleaning"
  },
  {
    "name": "Bed Cover Double",
    "finalprice": 349,
    "category": "Household",
    "type": "Dry Cleaning"
  },
  {
    "name": "Bed Cover Single",
    "finalprice": 249,
    "category": "Household",
    "type": "Dry Cleaning"
  },
  {
    "name": "Cushion Cover\r\n( Small )",
    "finalprice": 69,
    "category": "Household",
    "type": "Dry Cleaning"
  },
  {
    "name": "Cushion Cover \r\nEmbroidery (Any Size)",
    "finalprice": 169,
    "category": "Household",
    "type": "Dry Cleaning"
  },
  {
    "name": "Cushion Cover \r\n( Medium )",
    "finalprice": 89,
    "category": "Household",
    "type": "Dry Cleaning"
  },
  {
    "name": "Pillow Cover - \\nCotton / Terry Cotton",
    "finalprice": 49,
    "category": "Household",
    "type": "Dry Cleaning"
  },
  {
    "name": "Curtain - Without \r\nLining [ Per Panel ]",
    "finalprice": 239,
    "category": "Household",
    "type": "Dry Cleaning"
  },
  {
    "name": "Curtain - With Lining\r\n[Per Panel]",
    "finalprice": 349,
    "category": "Household",
    "type": "Dry Cleaning"
  },
  {
    "name": "Curtain - Lace \r\n[Per Panel]",
    "finalprice": 289,
    "category": "Household",
    "type": "Dry Cleaning"
  },
  {
    "name": "Curtain - Embroidery \r\nWork [Per Panel]",
    "finalprice": 269,
    "category": "Household",
    "type": "Dry Cleaning"
  },
  {
    "name": "Sofa cover - \r\nLace ( Single )",
    "finalprice": 399,
    "category": "Household",
    "type": "Dry Cleaning"
  },
  {
    "name": "Sofa cover - \r\nNormal ( Single )",
    "finalprice": 349,
    "category": "Household",
    "type": "Dry Cleaning"
  },
  {
    "name": "Table Cloth Big",
    "finalprice": 149,
    "category": "Household",
    "type": "Dry Cleaning"
  },
  {
    "name": "Bed Sheet Single",
    "finalprice": 119,
    "category": "Household",
    "type": "Dry Cleaning"
  },
  {
    "name": "Hand Towel",
    "finalprice": 49,
    "category": "Household",
    "type": "Dry Cleaning"
  },
  {
    "name": "Blanket Double",
    "finalprice": 449,
    "category": "Household",
    "type": "Dry Cleaning"
  },
  {
    "name": "Blanket Single",
    "finalprice": 349,
    "category": "Household",
    "type": "Dry Cleaning"
  },
  {
    "name": "Curtain - Cotton \r\n[Per Panel]",
    "finalprice": 229,
    "category": "Household",
    "type": "Dry Cleaning"
  },
  {
    "name": "Pillow Cover - Embroidery",
    "finalprice": 99,
    "category": "Household",
    "type": "Dry Cleaning"
  },
  {
    "name": "Pillow Cover 2 pc",
    "finalprice": 69,
    "category": "Household",
    "type": "Dry Cleaning"
  },
  {
    "name": "Quilt ( Double )",
    "finalprice": 549,
    "category": "Household",
    "type": "Dry Cleaning"
  },
  {
    "name": "Quilt ( Single )",
    "finalprice": 449,
    "category": "Household",
    "type": "Dry Cleaning"
  },
  {
    "name": "Quilt Cover ( Double )",
    "finalprice": 349,
    "category": "Household",
    "type": "Dry Cleaning"
  },
  {
    "name": "Quilt Cover ( Single )",
    "finalprice": 249,
    "category": "Household",
    "type": "Dry Cleaning"
  },
  {
    "name": "Razai",
    "finalprice": 449,
    "category": "Household",
    "type": "Dry Cleaning"
  },
  {
    "name": "Sofa cover - \r\nEmbroidery ( Single )",
    "finalprice": 479,
    "category": "Household",
    "type": "Dry Cleaning"
  },
  {
    "name": "Table Cloth Small",
    "finalprice": 89,
    "category": "Household",
    "type": "Dry Cleaning"
  },
  {
    "name": "Blouse",
    "finalprice": 39,
    "category": "Kids",
    "type": "Dry Cleaning"
  },
  {
    "name": "Blouse/Top",
    "finalprice": 69,
    "category": "Kids",
    "type": "Dry Cleaning"
  },
  {
    "name": "Coat / Blazer",
    "finalprice": 149,
    "category": "Kids",
    "type": "Dry Cleaning"
  },
  {
    "name": "Cotton Frock",
    "finalprice": 149,
    "category": "Kids",
    "type": "Dry Cleaning"
  },
  {
    "name": "Designer Frock",
    "finalprice": 299,
    "category": "Kids",
    "type": "Dry Cleaning"
  },
  {
    "name": "Dress",
    "finalprice": 119,
    "category": "Kids",
    "type": "Dry Cleaning"
  },
  {
    "name": "Dress (Heavy)",
    "finalprice": 249,
    "category": "Kids",
    "type": "Dry Cleaning"
  },
  {
    "name": "Ethnic Kurta Set",
    "finalprice": 199,
    "category": "Kids",
    "type": "Dry Cleaning"
  },
  {
    "name": "Ethnic Wear (Normal / Heavy work)",
    "finalprice": 299,
    "category": "Kids",
    "type": "Dry Cleaning"
  },
  {
    "name": "Frock",
    "finalprice": 119,
    "category": "Kids",
    "type": "Dry Cleaning"
  },
  {
    "name": "Shorts",
    "finalprice": 99,
    "category": "Men",
    "type": "Dry Cleaning"
  },
  {
    "name": "Shorts",
    "finalprice": 49,
    "category": "Kids",
    "type": "Dry Cleaning"
  },
  {
    "name": "Dupatta",
    "finalprice": 99,
    "category": "Women",
    "type": "Dry Cleaning"
  },
  {
    "name": "Jeans",
    "finalprice": 65,
    "category": "Kids",
    "type": "Dry Cleaning"
  },
  {
    "name": "T-Shirt",
    "finalprice": 69,
    "category": "Kids",
    "type": "Dry Cleaning"
  },
  {
    "name": "Shirt",
    "finalprice": 55,
    "category": "Kids",
    "type": "Dry Cleaning"
  },
  {
    "name": "Kurta",
    "finalprice": 39,
    "category": "Kids",
    "type": "Dry Cleaning"
  },
  {
    "name": "Jumpsuit",
    "finalprice": 29,
    "category": "Kids",
    "type": "Dry Cleaning"
  },
  {
    "name": "Jacket",
    "finalprice": 149,
    "category": "Kids",
    "type": "Dry Cleaning"
  },
  {
    "name": "Jacket Rexine",
    "finalprice": 249,
    "category": "Men",
    "type": "Dry Cleaning"
  },
  {
    "name": "Saree \r\n( Cotton / Synthetic)",
    "finalprice": 199,
    "category": "Women",
    "type": "Dry Cleaning"
  },
  {
    "name": "Cushion Cover \r\n( Large )",
    "finalprice": 119,
    "category": "Household",
    "type": "Dry Cleaning"
  },
  {
    "name": "Pyjama",
    "finalprice": 45,
    "category": "Kids",
    "type": "Dry Cleaning"
  },
  {
    "name": "Suit 2 Pc",
    "finalprice": 239,
    "category": "Kids",
    "type": "Dry Cleaning"
  },
  {
    "name": "Suit 3 Pc",
    "finalprice": 299,
    "category": "Kids",
    "type": "Dry Cleaning"
  },
  {
    "name": "Sweater (Full Sleeves)",
    "finalprice": 129,
    "category": "Kids",
    "type": "Dry Cleaning"
  },
  {
    "name": "Sweater (Sleeveless)",
    "finalprice": 109,
    "category": "Kids",
    "type": "Dry Cleaning"
  },
  {
    "name": "Woolen Jacket",
    "finalprice": 229,
    "category": "Men",
    "type": "Dry Cleaning"
  },
  {
    "name": "Safari Shirt & Pant",
    "finalprice": 229,
    "category": "Men",
    "type": "Dry Cleaning"
  },
  {
    "name": "Sweatshirt",
    "finalprice": 179,
    "category": "Men",
    "type": "Dry Cleaning"
  },
  {
    "name": "Jacket Normal Short",
    "finalprice": 199,
    "category": "Men",
    "type": "Dry Cleaning"
  },
  {
    "name": "Jacket Puffer Short",
    "finalprice": 249,
    "category": "Women",
    "type": "Dry Cleaning"
  },
  {
    "name": "Choli + Lehenga + Dupatta",
    "finalprice": 499,
    "category": "Women",
    "type": "Dry Cleaning"
  },
  {
    "name": "Sherwani Heavy",
    "finalprice": 499,
    "category": "Men",
    "type": "Dry Cleaning"
  },
  {
    "name": "Blazer/Coat Short",
    "finalprice": 249,
    "category": "Men",
    "type": "Dry Cleaning"
  }
];

const DryCleaningServicePage = () => {
  // Processing data from dryCleaningData.json
  const processSteps = [
    {
      title: "Inspection & Tagging",
      description: "We carefully inspect each garment for stains, damages, and specific care requirements before tagging them."
    },
    {
      title: "Pre-treatment",
      description: "Specialized pre-treatments are applied to stains and problem areas to ensure best cleaning results."
    },
    {
      title: "Dry Cleaning Process",
      description: "Using professional-grade solvents and equipment, we gently clean your garments without water."
    },
    {
      title: "Finishing & Packaging",
      description: "Each item is pressed, steamed, and inspected before being packaged for delivery or pickup."
    }
  ];

  const pricingItems = [
    {
      name: "Regular Dry Cleaning",
      price: "From ₹150",
      description: "Standard dry cleaning for most common garments."
    },
    {
      name: "Premium Dry Cleaning",
      price: "From ₹300",
      description: "For high-end designer garments and delicate fabrics requiring extra care."
    },
    {
      name: "Express Service",
      price: "Regular price +50%",
      description: "Same-day or next-day service available for urgent needs."
    }
  ];

  // Create categories from the data
  const categorizedItems = {
    "Men": dryCleaningItems.filter(item => item.category === "Men"),
    "Women": dryCleaningItems.filter(item => item.category === "Women"),
    "Kids": dryCleaningItems.filter(item => item.category === "Kids"),
    "Household": dryCleaningItems.filter(item => item.category === "Household")
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
        <h2 className="text-3xl font-bold mb-6 text-center">Dry Cleaning Expertise</h2>
        
        <div className="mb-8">
          <p className="text-lg mb-4">
            Dry cleaning isn't just for suits and formal wear. Many everyday items benefit from professional dry cleaning to extend their life and maintain their appearance:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-laundry-50 p-4 rounded-lg text-center">
              <p className="font-semibold">Wool Sweaters</p>
            </div>
            <div className="bg-laundry-50 p-4 rounded-lg text-center">
              <p className="font-semibold">Silk Garments</p>
            </div>
            <div className="bg-laundry-50 p-4 rounded-lg text-center">
              <p className="font-semibold">Rayon & Viscose</p>
            </div>
            <div className="bg-laundry-50 p-4 rounded-lg text-center">
              <p className="font-semibold">Structured Jackets</p>
            </div>
            <div className="bg-laundry-50 p-4 rounded-lg text-center">
              <p className="font-semibold">Embellished Items</p>
            </div>
            <div className="bg-laundry-50 p-4 rounded-lg text-center">
              <p className="font-semibold">Pleated Garments</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Specialized Stain Removal</h3>
            <p className="mb-4">
              Our dry cleaning experts are trained in advanced stain removal techniques that can safely eliminate:
            </p>
            <ul className="space-y-2 pl-5 list-disc">
              <li>Oil and grease stains</li>
              <li>Wine and food spills</li>
              <li>Ink and makeup marks</li>
              <li>Perspiration and deodorant buildup</li>
              <li>Mystery stains of unknown origin</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Garment Preservation</h3>
            <p className="mb-4">
              Beyond regular cleaning, we offer specialized preservation services for:
            </p>
            <ul className="space-y-2 pl-5 list-disc">
              <li>Wedding dresses and formal gowns</li>
              <li>Vintage and heirloom clothing</li>
              <li>Designer pieces and investment garments</li>
              <li>Seasonal items being stored long-term</li>
              <li>Special occasion outfits</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col md:flex-row items-center gap-6 mb-12">
          <div className="md:w-1/4 flex justify-center">
            <div className="p-4 bg-laundry-100 rounded-full">
              <ShieldCheck className="h-16 w-16 text-laundry-600" />
            </div>
          </div>
          <div className="md:w-3/4">
            <h3 className="text-xl font-semibold mb-2">Our Eco-Friendly Commitment</h3>
            <p>
              We're committed to environmentally responsible dry cleaning. Our facility uses modern, eco-friendly solvents and processes that are gentler on fabrics and the environment than traditional dry cleaning chemicals. We've invested in energy-efficient equipment and reclamation systems to minimize our environmental footprint while delivering exceptional cleaning results.
            </p>
          </div>
        </div>
        
        <PricingTable />
      </div>
    </AnimatedSection>
  );

  return (
    <ServicePageTemplate
      icon={Shirt}
      title="Dry Cleaning Service"
      description="Expert dry cleaning for your delicate fabrics, suits, dresses and special garments. We ensure your valuable pieces retain their quality and appearance for years to come."
      image="/images/dryclean.png"
      processSteps={processSteps}
      pricingItems={pricingItems}
      additionalInfo="Special stain removal and fabric restoration services available upon assessment. Ask about our garment preservation service for wedding dresses and heirloom items."
      additionalImages={[
        "https://source.unsplash.com/random/800x600?dry,cleaning",
        "https://source.unsplash.com/random/800x600?suit,formal",
        "https://source.unsplash.com/random/800x600?jacket,coat"
      ]}
      additionalContent={<AdditionalContent />}
    />
  );
};

export default DryCleaningServicePage;
