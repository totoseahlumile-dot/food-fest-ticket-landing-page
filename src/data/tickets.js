// src/data/tickets.js
// All ticket tier data lives here. No hardcoded HTML in components!

export const tickets = [
  {
    id: 1,
    tier: 'BRONZE',
    name: 'The Taste Tester',
    price: 250,
    featured: false,
    benefits: [
      'Single day entry',
      '2 drink tokens',
      'All stage access'
    ]
  },
  {
    id: 2,
    tier: 'SILVER',
    name: 'The Gourmet',
    price: 550,
    featured: true,
    benefits: [
      'Full weekend entry',
      '5 drink tokens',
      'Priority vendor access',
      'Festival tote bag'
    ]
  },
  {
    id: 3,
    tier: 'GOLD',
    name: 'Luxurious',
    price: 1200,
    featured: false,
    benefits: [
      'VIP weekend entry',
      'Private lounge access',
      'Unlimited drinks',
      'Meet & greet with chefs',
      'Exclusive merch pack'
    ]
  }
]
