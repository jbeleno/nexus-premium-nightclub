import imgExample from '../assets/images/img.jpg'

export const MENU_ITEMS = {
  cocktails: [
    {
      id: 1,
      name: 'Nexus Signature',
      description: 'Vodka premium, licor de coco, jugo de piña y un toque de lima',
      price: '$18',
      image: imgExample
    },
    {
      id: 2,
      name: 'Electric Blue',
      description: 'Tequila azul, triple sec, jugo de arándano y soda de lima',
      price: '$16',
      image: imgExample
    },
    {
      id: 3,
      name: 'Neon Dreams',
      description: 'Gin premium, agua de rosas, limón y un toque de miel',
      price: '$20',
      image: imgExample
    },
    {
      id: 4,
      name: 'Gold Rush',
      description: 'Whisky premium, miel, limón y agua mineral',
      price: '$22',
      image: imgExample
    },
    {
      id: 5,
      name: 'Purple Haze',
      description: 'Vodka, triple sec, jugo de uva y soda',
      price: '$17',
      image: imgExample
    }
  ],
  bottles: [
    {
      id: 1,
      name: 'Dom Pérignon',
      description: 'Champagne premium francés, perfecto para celebraciones especiales',
      price: '$350',
      image: imgExample
    },
    {
      id: 2,
      name: 'Johnnie Walker Blue',
      description: 'Whisky escocés de edición limitada, sabor suave y elegante',
      price: '$280',
      image: imgExample
    },
    {
      id: 3,
      name: 'Grey Goose Vodka',
      description: 'Vodka francés premium, destilado con trigo francés',
      price: '$120',
      image: imgExample
    },
    {
      id: 4,
      name: 'Hennessy XO',
      description: 'Cognac francés premium, envejecido en barricas de roble',
      price: '$200',
      image: imgExample
    },
    {
      id: 5,
      name: 'Patrón Silver',
      description: 'Tequila premium mexicano, destilado 3 veces',
      price: '$150',
      image: imgExample
    },
    {
      id: 6,
      name: 'Moët & Chandon',
      description: 'Champagne francés clásico, burbujas elegantes',
      price: '$180',
      image: imgExample
    }
  ],
  vip: [
    {
      id: 1,
      name: 'VIP Table Package',
      description: 'Mesa privada para 6 personas, botella premium incluida',
      price: '$400',
      image: imgExample
    },
    {
      id: 2,
      name: 'Ultimate VIP Experience',
      description: 'Mesa VIP para 8 personas, 2 botellas premium, servicio dedicado',
      price: '$600',
      image: imgExample
    },
    {
      id: 3,
      name: 'Royal VIP Package',
      description: 'Mesa exclusiva, champagne premium, acceso prioritario',
      price: '$800',
      image: imgExample
    },
    {
      id: 4,
      name: 'Bottle Service',
      description: 'Servicio de botella con mixers, hielo y servicio personalizado',
      price: '$250',
      image: imgExample
    }
  ],
  hookah: [
    {
      id: 1,
      name: 'Double Apple',
      description: 'Tabaco tradicional con sabor a manzana verde y roja',
      price: '$25',
      image: imgExample
    },
    {
      id: 2,
      name: 'Mint Chocolate',
      description: 'Combinación refrescante de menta y chocolate',
      price: '$30',
      image: imgExample
    },
    {
      id: 3,
      name: 'Grape Mint',
      description: 'Sabor a uva con un toque refrescante de menta',
      price: '$28',
      image: imgExample
    },
    {
      id: 4,
      name: 'Strawberry Kiwi',
      description: 'Combinación tropical de fresa y kiwi',
      price: '$32',
      image: imgExample
    }
  ]
}

export const MENU_TABS = [
  { id: 'cocktails', name: 'Cócteles' },
  { id: 'bottles', name: 'Botellas' },
  { id: 'vip', name: 'VIP Packages' },
  { id: 'hookah', name: 'Hookah' }
]

