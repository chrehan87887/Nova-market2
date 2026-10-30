// Dummy data (database ki jagah). oldPrice wale products "on sale" hain.
export const PRODUCTS = [
  { id: 1, name: "Wireless Headphones", category: "Electronics", price: 59, emoji: "🎧", image: "/images/products/wireless headphones.jpg" },
  { id: 2, name: "Smart Watch", category: "Electronics", price: 89, oldPrice: 119, emoji: "⌚", image: "/images/products/smart watch.jpg" },
  { id: 3, name: "Bluetooth Speaker", category: "Electronics", price: 35, emoji: "🔊", image: "/images/products/bluetooth speaker.jpg" },
  { id: 4, name: "Running Shoes", category: "Fashion", price: 72, emoji: "👟", image: "/images/products/running shoes.jpg" },
  { id: 5, name: "Denim Jacket", category: "Fashion", price: 64, oldPrice: 80, emoji: "🧥", image: "/images/products/denim jacket.jpg" },
  { id: 6, name: "Sunglasses", category: "Fashion", price: 28, emoji: "🕶️", image: "/images/products/sunglasses.jpg" },
  { id: 7, name: "Ceramic Mug Set", category: "Home", price: 22, oldPrice: 28, emoji: "☕", image: "/images/products/ceramic mugs.jpg" },
  { id: 8, name: "Desk Lamp", category: "Home", price: 31, emoji: "💡", image: "/images/products/desk lamp.jpg" },
  { id: 9, name: "Backpack", category: "Accessories", price: 45, oldPrice: 60, emoji: "🎒", image: "/images/products/backpack.jpg" },
  { id: 10, name: "Leather Wallet", category: "Accessories", price: 26, emoji: "👛", image: "/images/products/leather wallet.jpg" },
  { id: 11, name: "Notebook Pack", category: "Home", price: 12, emoji: "📓", image: "/images/products/notebooks.jpg" },
  { id: 12, name: "Phone Case", category: "Accessories", price: 15, oldPrice: 20, emoji: "📱", image: "/images/products/phone case.jpg" },
];

export const CATEGORIES = ["All", "Electronics", "Fashion", "Home", "Accessories"];

// Highest price rounded up to the next 10 (used by the price slider)
export const MAX_PRICE = Math.ceil(Math.max(...PRODUCTS.map((p) => p.price)) / 10) * 10;