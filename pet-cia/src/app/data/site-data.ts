/**
 * Conteúdo de demonstração do Pet&Cia.
 * Tudo aqui é mockado — serve para o modelo/portfólio. No futuro, estes dados
 * viriam de uma API / painel administrativo (etapa de e-commerce).
 */

export interface Category {
  id: string;
  name: string;
  icon: string;      // emoji ilustrativo
  blurb: string;
  count: number;     // qtde de itens (fictício)
}

export interface Product {
  id: number;
  name: string;
  brand: string;
  category: string;  // Category.id
  size: string;      // ex.: "10,1 kg"
  emoji: string;
  tag?: string;      // ex.: "Mais vendido", "Novidade"
  priceHint: string; // faixa/placeholder — sem venda ainda
}

export interface Testimonial {
  name: string;
  pet: string;
  text: string;
  avatar: string; // emoji
}

/* ---------------- Categorias ---------------- */
export const CATEGORIES: Category[] = [
  { id: 'racao',      name: 'Ração & Alimentos', icon: '🦴', blurb: 'Seca, úmida e petiscos das melhores marcas.', count: 84 },
  { id: 'higiene',    name: 'Higiene & Banho',   icon: '🧴', blurb: 'Shampoos, tapetes, sacolinhas e cuidado.',   count: 47 },
  { id: 'brinquedos', name: 'Brinquedos',        icon: '🎾', blurb: 'Diversão e estímulo para cães e gatos.',      count: 39 },
  { id: 'acessorios', name: 'Acessórios',        icon: '🐾', blurb: 'Coleiras, guias, comedouros e camas.',        count: 62 },
  { id: 'aves',       name: 'Aves & Peixes',     icon: '🐟', blurb: 'Alimentos, aquários e tudo para o viveiro.',  count: 28 },
  { id: 'farmacia',   name: 'Farmácia Pet',      icon: '💊', blurb: 'Antipulgas, vermífugos e suplementos.',       count: 33 },
];

/* ---------------- Produtos (vitrine) ---------------- */
export const PRODUCTS: Product[] = [
  { id: 1,  name: 'Ração Premium Cães Adultos',        brand: 'GoldenLife',   category: 'racao',      size: '15 kg',   emoji: '🦴', tag: 'Mais vendido', priceHint: 'A partir de R$ 189' },
  { id: 2,  name: 'Ração Gatos Castrados Salmão',      brand: 'FelineCare',   category: 'racao',      size: '10,1 kg', emoji: '🐟', priceHint: 'A partir de R$ 164' },
  { id: 3,  name: 'Petisco Bifinho Carne',             brand: 'DogSnack',     category: 'racao',      size: '500 g',   emoji: '🍖', tag: 'Novidade',     priceHint: 'A partir de R$ 21' },
  { id: 4,  name: 'Shampoo Neutro Hipoalergênico',     brand: 'PetClean',     category: 'higiene',    size: '700 ml',  emoji: '🧴', priceHint: 'A partir de R$ 34' },
  { id: 5,  name: 'Tapete Higiênico (30 un.)',         brand: 'SecoJá',       category: 'higiene',    size: '30 un.',  emoji: '🧻', tag: 'Mais vendido', priceHint: 'A partir de R$ 49' },
  { id: 6,  name: 'Areia Sanitária Sílica',            brand: 'GatoLimpo',    category: 'higiene',    size: '1,6 kg',  emoji: '🪣', priceHint: 'A partir de R$ 28' },
  { id: 7,  name: 'Bolinha Interativa com Guizo',      brand: 'PlayPet',      category: 'brinquedos', size: 'Único',   emoji: '🎾', priceHint: 'A partir de R$ 18' },
  { id: 8,  name: 'Mordedor de Corda Resistente',      brand: 'ToughToy',     category: 'brinquedos', size: 'M',       emoji: '🪢', tag: 'Novidade',     priceHint: 'A partir de R$ 26' },
  { id: 9,  name: 'Arranhador Torre para Gatos',       brand: 'MiauHome',     category: 'brinquedos', size: '60 cm',   emoji: '🐱', priceHint: 'A partir de R$ 139' },
  { id: 10, name: 'Coleira Ajustável Refletiva',       brand: 'WalkSafe',     category: 'acessorios', size: 'P/M/G',   emoji: '🐾', priceHint: 'A partir de R$ 32' },
  { id: 11, name: 'Comedouro Duplo Antiderrapante',    brand: 'EatWell',      category: 'acessorios', size: '2x 400ml',emoji: '🥣', tag: 'Mais vendido', priceHint: 'A partir de R$ 45' },
  { id: 12, name: 'Cama Ninho Aconchego',              brand: 'SoftNest',     category: 'acessorios', size: 'M',       emoji: '🛏️', priceHint: 'A partir de R$ 119' },
  { id: 13, name: 'Ração para Calopsitas & Periquitos',brand: 'AveVida',      category: 'aves',       size: '500 g',   emoji: '🐦', priceHint: 'A partir de R$ 23' },
  { id: 14, name: 'Ração para Peixes Tropicais',       brand: 'AquaFlakes',   category: 'aves',       size: '100 g',   emoji: '🐠', priceHint: 'A partir de R$ 19' },
  { id: 15, name: 'Antipulgas & Carrapatos (cães)',    brand: 'ProtectVet',   category: 'farmacia',   size: '3 pipetas',emoji: '💧', tag: 'Novidade',    priceHint: 'A partir de R$ 89' },
  { id: 16, name: 'Vermífugo de Amplo Espectro',       brand: 'ProtectVet',   category: 'farmacia',   size: '4 comp.', emoji: '💊', priceHint: 'A partir de R$ 42' },
  { id: 17, name: 'Suplemento Pelagem & Pele',         brand: 'VitaPet',      category: 'farmacia',   size: '60 comp.',emoji: '✨', priceHint: 'A partir de R$ 67' },
  { id: 18, name: 'Ração Filhotes Frango & Arroz',     brand: 'GoldenLife',   category: 'racao',      size: '3 kg',    emoji: '🐶', priceHint: 'A partir de R$ 59' },
];

/* ---------------- Diferenciais ---------------- */
export const DIFFERENTIALS = [
  { icon: '🏅', title: 'Marcas premium',        text: 'Trabalhamos com as linhas mais recomendadas por veterinários.' },
  { icon: '🛵', title: 'Entrega no bairro',      text: 'Peça pelo WhatsApp e receba no mesmo dia na sua casa.' },
  { icon: '💬', title: 'Atendimento de verdade', text: 'Gente que conhece o seu pet pelo nome e indica o certo.' },
  { icon: '🏷️', title: 'Preço justo',            text: 'Promoções semanais e clube de fidelidade para clientes.' },
];

/* ---------------- Depoimentos ---------------- */
export const TESTIMONIALS: Testimonial[] = [
  { name: 'Marina Alves',   pet: 'tutora da Nina 🐩',   avatar: '👩', text: 'Atendimento maravilhoso! Sempre me indicam a ração certa e a entrega chega rapidinho.' },
  { name: 'Rafael Souza',   pet: 'tutor do Thor 🐕',    avatar: '🧔', text: 'Preço melhor que dos concorrentes e ainda dá pra pedir tudo pelo WhatsApp. Virei cliente fiel.' },
  { name: 'Juliana Prado',  pet: 'tutora da Mel 🐈',    avatar: '👩‍🦱', text: 'Amo essa loja! Encontro de tudo pra minha gata e o pessoal é super atencioso.' },
];

/* ---------------- Números da loja ---------------- */
export const STATS = [
  { value: '12+',   label: 'anos no bairro' },
  { value: '3 mil', label: 'clientes felizes' },
  { value: '40+',   label: 'marcas parceiras' },
  { value: 'Mesmo dia', label: 'entrega local' },
];

/* ---------------- Marcas parceiras (fictícias) ---------------- */
export const BRANDS = ['GoldenLife', 'FelineCare', 'PetClean', 'PlayPet', 'ProtectVet', 'AquaFlakes'];

/* ---------------- Dados de contato da loja ---------------- */
export const STORE = {
  name: 'Pet&Cia',
  slogan: 'Tudo para quem você ama de patas.',
  phone: '(11) 4002-8922',
  whatsapp: '5511940028922',       // formato internacional para o link wa.me
  whatsappLabel: '(11) 94002-8922',
  email: 'contato@petecia.com.br',
  address: 'Av. dos Bichos, 1234 — Jardim Alegre, São Paulo/SP',
  hours: [
    { day: 'Segunda a Sexta', time: '08h00 — 19h00' },
    { day: 'Sábado',          time: '08h00 — 17h00' },
    { day: 'Domingo',         time: '09h00 — 13h00' },
  ],
  social: [
    { name: 'Instagram', handle: '@petecia', url: '#' },
    { name: 'Facebook',  handle: '/petecia', url: '#' },
  ],
};

/** Monta a mensagem padrão do WhatsApp. */
export function waLink(message = 'Olá! Vim pelo site e gostaria de mais informações. 🐾'): string {
  return `https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent(message)}`;
}
