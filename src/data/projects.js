export const projects = [
  {
    id: 2,
    title: 'BrewPoint',
    subtitle: 'Coffee Ordering Mobile App',
    description:
      'Mobile UI/UX design for a coffee ordering app. Covers the full user flow — welcome screen, login, browsing a menu with categories, customizing an order, and viewing order history.',
    technologies: ['Figma', 'UI/UX Design', 'Mobile Design'],
    liveUrl: 'https://www.figma.com/design/D6DeFitUtNKxoUpBG3WDnL/Mobile-App?node-id=102-33&t=HhgU5qs23TJIV1HI-4',
    status: 'Completed',
    accent: '#3E2010',
    accentLight: '#7B4F2E',
    accentBg: '#FDF6EE',
    logo: '/images/projects/brewpoint/logo.png',
    mockups: [
      '/images/projects/brewpoint/dashboard.png',
      '/images/projects/brewpoint/order-history.png',
      '/images/projects/brewpoint/login.png',
    ],
    features: [
      { icon: '☕', title: 'Menu Browsing',       description: 'Explore drinks by category with product images and pricing.' },
      { icon: '🛠️', title: 'Order Customization', description: 'Choose size, temperature, and add-ons before placing an order.' },
      { icon: '🧾', title: 'Order History',        description: 'Review past orders any time from a dedicated history screen.' },
      { icon: '🔐', title: 'Authentication',       description: 'Login and account creation for a personalized experience.' },
    ],
  },
  {
    id: 3,
    title: 'SMARTEVENT',
    subtitle: 'Mobile-Based Student Organization Management System',
    description:
      'Designed the mobile UI/UX for SMARTEVENT, a capstone thesis project — covering inventory, financial management, event monitoring, and data analytics reporting for student organizations.',
    technologies: ['Figma', 'UI/UX Design', 'Mobile Design'],
    liveUrl: 'https://www.figma.com/design/D6DeFitUtNKxoUpBG3WDnL/Mobile-App?node-id=120-33&t=HhgU5qs23TJIV1HI-4',
    status: 'Completed',
    accent: '#1A3A6B',
    accentLight: '#E87722',
    accentBg: '#F0F4FF',
    logo: '/images/projects/smartevent/logo.jpg',
    mockups: [
      '/images/projects/smartevent/dashboard.png',
      '/images/projects/smartevent/welcome.png',
      '/images/projects/smartevent/menu.png',
      '/images/projects/smartevent/create-account.png',
    ],
    features: [
      { icon: '📦', title: 'Inventory Management', description: 'Track and manage organization assets and supplies.' },
      { icon: '💰', title: 'Financial Management',  description: 'Monitor income, expenses, and financial records.' },
      { icon: '📅', title: 'Event Monitoring',      description: 'Create, manage, and track event status in real time.' },
      { icon: '📊', title: 'Data Analytics',        description: 'Generate reports and visualize key metrics.' },
    ],
  },
  {
    id: 1,
    title: 'Filipiniana',
    subtitle: 'Filipino Traditional Fashion E-Commerce Web App',
    description:
      'Web UI/UX design for Filipiniana, an e-commerce platform for Filipino traditional clothing and accessories. Covers the full shopping experience — login and account creation, browsing by category (dresses, accessories), product listings with ratings and prices, and cart functionality.',
    technologies: ['Figma', 'UI/UX Design', 'Web Design'],
    liveUrl: 'https://www.figma.com/design/w1zQEjGKQzWzSBw5z12not/Web-App?node-id=0-1&t=Li2UaHbdUA9C1hny-1',
    status: 'Completed',
    accent: '#5C4A1E',
    accentLight: '#C44536',
    accentBg: '#FAF6EE',
    logo: null,
    mockups: [
      '/images/projects/filipiniana/filipiniana-1.png',
      '/images/projects/filipiniana/filipiniana-2.png',
      '/images/projects/filipiniana/filipiniana-3.png',
      '/images/projects/filipiniana/filipiniana-4.png',
    ],
    features: [
      { icon: '👘', title: 'Product Catalog',      description: 'Browse Filipino dresses and accessories organized by category with ratings and pricing.' },
      { icon: '🛒', title: 'Cart & Wishlist',       description: 'Add items to cart or save to wishlist for a smooth shopping experience.' },
      { icon: '🔐', title: 'Authentication',        description: 'Login and account creation screens with a warm, heritage-inspired design.' },
      { icon: '🔍', title: 'Product Search',        description: 'Search bar and category filters to quickly find specific items.' },
    ],
  },
]

export const allTechnologies = [...new Set(projects.flatMap((p) => p.technologies))]
export const projectStatuses = ['All', 'Completed', 'In Progress', 'Coming Soon']
