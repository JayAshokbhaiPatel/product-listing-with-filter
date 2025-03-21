// Sample product data
const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    description:
      'High-quality sound with noise cancellation, ensuring an immersive audio experience for music lovers and professionals.',
    price: '$99.99',
    category: 'Electronics',
    image: 'https://picsum.photos/200?random=1',
    onSale: true,
    salePrice: '$79.99',
  },
  {
    id: 2,
    name: 'Leather Jacket',
    description:
      'Stylish and comfortable leather jacket, perfect for casual outings and formal occasions, offering both warmth and elegance.',
    price: '$120.00',
    category: 'Clothing',
    image: 'https://picsum.photos/200?random=2',
  },
  {
    id: 3,
    name: 'Smart Watch',
    description:
      'Track your fitness and stay connected with real-time notifications, heart rate monitoring, and step tracking features.',
    price: '$199.99',
    category: 'Electronics',
    image: 'https://picsum.photos/200?random=3',
    onSale: true,
    salePrice: '$149.99',
  },
  {
    id: 4,
    name: 'Backpack',
    description:
      'Durable and spacious backpack for daily use, designed with multiple compartments and a water-resistant exterior.',
    price: '$49.99',
    category: 'Accessories',
    image: 'https://picsum.photos/200?random=4',
  },
  {
    id: 5,
    name: 'Running Shoes',
    description:
      'Lightweight and comfortable for running, featuring breathable mesh and superior grip for all terrains.',
    price: '$79.99',
    category: 'Clothing',
    image: 'https://picsum.photos/200?random=5',
    onSale: true,
    salePrice: '$59.99',
  },
  {
    id: 6,
    name: 'Bluetooth Speaker',
    description:
      'Portable and powerful Bluetooth speaker with deep bass and long battery life, perfect for outdoor adventures.',
    price: '$89.99',
    category: 'Electronics',
    image: 'https://picsum.photos/200?random=6',
  },
  {
    id: 7,
    name: 'Sunglasses',
    description: 'Stylish UV-protection sunglasses with polarized lenses, offering clear vision and a sleek look.',
    price: '$39.99',
    category: 'Accessories',
    image: 'https://picsum.photos/200?random=7',
  },
  {
    id: 8,
    name: 'Gaming Mouse',
    description:
      'Ergonomic gaming mouse with customizable RGB lighting and high-precision sensor for a superior gaming experience.',
    price: '$59.99',
    category: 'Electronics',
    image: 'https://picsum.photos/200?random=8',
    onSale: true,
    salePrice: '$49.99',
  },
  {
    id: 9,
    name: 'Yoga Mat',
    description: 'Non-slip, eco-friendly yoga mat with extra cushioning, perfect for workouts and meditation.',
    price: '$29.99',
    category: 'Accessories',
    image: 'https://picsum.photos/200?random=9',
  },
  {
    id: 10,
    name: 'Coffee Maker',
    description: 'Compact and easy-to-use coffee maker with multiple brewing options for the perfect cup every time.',
    price: '$129.99',
    category: 'Accessories',
    image: 'https://picsum.photos/200?random=10',
    onSale: true,
    salePrice: '$99.99',
  },
];

function createProductCard(product) {
  const productCard = document.createElement('article');
  productCard.classList.add('product-card');

  productCard.innerHTML = `
    <div class="product-image">
      <img src="${product.image}" alt="${product.name}" loading="lazy" />
    </div>
    <div class="product-content-container">
      <div class="product-content">
        <h2 class="product-title">${product.name}</h2>
        <span class="product-category ${product.category.toLowerCase()}">${product.category}</span>
        <p class="product-description">${product.description}</p>
      </div>
      <div class="product-purchase">
        <div class="product-pricing">
          <p class="product-price${product.onSale ? ' original-price' : ''}">${product.price}</p>
          ${product.onSale ? `<p class="sale-price">${product.salePrice}</p>` : ''}
        </div>
        <button 
          type="button" 
          class="add-to-cart-btn" 
          aria-label="Add ${product.name} to cart"
          data-product-id="${product.id}">
          Add to Cart
        </button>
      </div>
    </div>
  `;

  const addButton = productCard.querySelector('.add-to-cart-btn');
  addButton.addEventListener('click', () => handleClickAddToCart(product.id));

  return productCard;
}

function renderProducts(filteredProducts = []) {
  const productsContainer = document.getElementById('products');

  productsContainer.innerHTML = '';

  if (!filteredProducts.length) {
    productsContainer.innerHTML = `<p>No products found matching your criteria`;
    return;
  }

  filteredProducts.forEach((product) => {
    const productCard = createProductCard(product);
    productsContainer.appendChild(productCard);
  });
}

const DEFAULT_ALL = 'All';
function handleClickAddToCart(productId) {
  window.alert(`Product ${productId} added to cart!`);
}

function filterProducts(category = DEFAULT_ALL) {
  const filteredProducts =
    category === DEFAULT_ALL ? products : products.filter((product) => product.category === category);

  return filteredProducts;
}

function handleSelect(event) {
  const filteredProducts = filterProducts(event.target.value);
  renderProducts(filteredProducts);
}

const filterSelect = document.getElementById('category-filter');
// We user click on filter
filterSelect.addEventListener('change', handleSelect);

// Initial Render
document.addEventListener('DOMContentLoaded', () => {
  renderProducts(products);
});
