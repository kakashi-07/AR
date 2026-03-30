// ─────────────────────────────────────────────
//  Furniture Catalog Data
//  Each entry defines a furniture item with:
//  - Metadata (id, name, category, emoji, description)
//  - Available colors
//  - Geometry hint for Three.js builder
//  - Model dimensions (in meters)
// ─────────────────────────────────────────────

export const FURNITURE_COLORS = {
  wood:   { hex: '#8B5E3C', label: 'Oak Wood',  three: 0x8B5E3C },
  walnut: { hex: '#4A2C0A', label: 'Walnut',    three: 0x4A2C0A },
  white:  { hex: '#F5F0EB', label: 'White',     three: 0xF5F0EB },
  black:  { hex: '#1A1A1A', label: 'Matte Black', three: 0x1A1A1A },
  gray:   { hex: '#6B7280', label: 'Ash Gray',  three: 0x6B7280 },
  beige:  { hex: '#D4B896', label: 'Linen',     three: 0xD4B896 },
  navy:   { hex: '#1E3A5F', label: 'Navy Blue', three: 0x1E3A5F },
  sage:   { hex: '#7A9E7E', label: 'Sage Green', three: 0x7A9E7E },
}

export const FURNITURE_CATEGORIES = [
  { id: 'all',      label: 'All',        emoji: '🏠' },
  { id: 'seating',  label: 'Seating',    emoji: '🛋️' },
  { id: 'tables',   label: 'Tables',     emoji: '🪑' },
  { id: 'storage',  label: 'Storage',    emoji: '🗄️' },
  { id: 'bedroom',  label: 'Bedroom',    emoji: '🛏️' },
  { id: 'work',     label: 'Work',       emoji: '💼' },
]

export const FURNITURE_ITEMS = [
  {
    id: 'sofa_3seater',
    name: '3-Seater Sofa',
    category: 'seating',
    emoji: '🛋️',
    description: 'Classic 3-seat sofa with deep cushions and solid wooden legs.',
    colors: ['wood', 'gray', 'navy', 'beige', 'black'],
    defaultColor: 'gray',
    dimensions: { w: 1.8, h: 0.85, d: 0.85 },
    price: '₹45,000',
    popular: true,
  },
  {
    id: 'loveseat',
    name: 'Loveseat',
    category: 'seating',
    emoji: '💑',
    description: 'Compact 2-seater sofa, perfect for cozy corners.',
    colors: ['wood', 'gray', 'beige', 'navy', 'sage'],
    defaultColor: 'beige',
    dimensions: { w: 1.3, h: 0.85, d: 0.82 },
    price: '₹28,000',
    popular: false,
  },
  {
    id: 'armchair',
    name: 'Armchair',
    category: 'seating',
    emoji: '🪑',
    description: 'Elegant single-seat armchair with padded arms.',
    colors: ['wood', 'gray', 'walnut', 'navy', 'black'],
    defaultColor: 'walnut',
    dimensions: { w: 0.75, h: 0.9, d: 0.8 },
    price: '₹15,000',
    popular: false,
  },
  {
    id: 'coffee_table',
    name: 'Coffee Table',
    category: 'tables',
    emoji: '🧋',
    description: 'Low profile rectangular table with shelf underneath.',
    colors: ['wood', 'walnut', 'white', 'black'],
    defaultColor: 'wood',
    dimensions: { w: 1.1, h: 0.42, d: 0.55 },
    price: '₹8,500',
    popular: true,
  },
  {
    id: 'dining_table',
    name: 'Dining Table',
    category: 'tables',
    emoji: '🍽️',
    description: '6-person solid wood dining table with tapered legs.',
    colors: ['wood', 'walnut', 'white', 'black'],
    defaultColor: 'wood',
    dimensions: { w: 1.8, h: 0.76, d: 0.9 },
    price: '₹32,000',
    popular: true,
  },
  {
    id: 'dining_chair',
    name: 'Dining Chair',
    category: 'seating',
    emoji: '🪑',
    description: 'Modern dining chair with upholstered seat pad.',
    colors: ['wood', 'walnut', 'white', 'black', 'gray'],
    defaultColor: 'walnut',
    dimensions: { w: 0.45, h: 0.9, d: 0.48 },
    price: '₹4,500',
    popular: false,
  },
  {
    id: 'bed_queen',
    name: 'Queen Bed',
    category: 'bedroom',
    emoji: '🛏️',
    description: 'Queen-size platform bed with upholstered headboard.',
    colors: ['wood', 'walnut', 'gray', 'beige', 'black'],
    defaultColor: 'walnut',
    dimensions: { w: 1.6, h: 0.9, d: 2.1 },
    price: '₹55,000',
    popular: true,
  },
  {
    id: 'wardrobe',
    name: 'Wardrobe',
    category: 'storage',
    emoji: '🚪',
    description: '3-door wardrobe with mirror panel and internal shelving.',
    colors: ['wood', 'walnut', 'white', 'black'],
    defaultColor: 'white',
    dimensions: { w: 1.5, h: 2.0, d: 0.55 },
    price: '₹38,000',
    popular: false,
  },
  {
    id: 'bookshelf',
    name: 'Bookshelf',
    category: 'storage',
    emoji: '📚',
    description: '5-tier open bookshelf, perfect for books and decor.',
    colors: ['wood', 'walnut', 'white', 'black'],
    defaultColor: 'wood',
    dimensions: { w: 0.8, h: 1.8, d: 0.3 },
    price: '₹12,000',
    popular: false,
  },
  {
    id: 'office_desk',
    name: 'Office Desk',
    category: 'work',
    emoji: '💻',
    description: 'Spacious L-shaped desk with cable management.',
    colors: ['wood', 'walnut', 'white', 'black'],
    defaultColor: 'white',
    dimensions: { w: 1.4, h: 0.75, d: 0.7 },
    price: '₹18,000',
    popular: true,
  },
  {
    id: 'tv_stand',
    name: 'TV Stand',
    category: 'storage',
    emoji: '📺',
    description: 'Modern low-profile media console with two door cabinets.',
    colors: ['wood', 'walnut', 'white', 'black'],
    defaultColor: 'walnut',
    dimensions: { w: 1.5, h: 0.5, d: 0.4 },
    price: '₹14,000',
    popular: false,
  },
  {
    id: 'side_table',
    name: 'Side Table',
    category: 'tables',
    emoji: '🕯️',
    description: 'Round bedside table with single drawer storage.',
    colors: ['wood', 'walnut', 'white', 'black'],
    defaultColor: 'wood',
    dimensions: { w: 0.45, h: 0.58, d: 0.45 },
    price: '₹3,800',
    popular: false,
  },
]

// Helper: get color hex by key
export const getColorHex  = (key) => FURNITURE_COLORS[key]?.hex   || '#8B5E3C'
export const getColorThree = (key) => FURNITURE_COLORS[key]?.three || 0x8B5E3C

// Helper: get furniture by id
export const getFurnitureById = (id) => FURNITURE_ITEMS.find(f => f.id === id)
