
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");
  const productsSection = document.getElementById("productsSection");
  let products = []; // Define products as a global variable

  // Function to fetch products from the API
  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      products = await response.json(); // Assign fetched products to the global variable
      displayProducts(products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Function to display products on the page
  const displayProducts = (products) => {
    productsSection.innerHTML = "";
    products.forEach((product) => {
      const article = document.createElement("article");
      article.classList.add("product");
      article.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h2>${product.title}</h2>
        <h5>Catagory : ${product.category}<h5>
        <p>${product.description}</p>
        <p ><span>Rating: ${product.rating.rate}<span>      Count :<span>${product.rating.count}<span><p>
      <p>$${product.price}<p>
        <div class="actions">
          <button class="btn btn-success">Add to Cart</button>
          <button class="btn btn-secondary">Add to Wishlist</button>
        </div>
        `;
      productsSection.appendChild(article);
    });
  };

  // Initial fetch of products when the page loads
  fetchProducts();

  // Function to filter products based on search query
  const filterProducts = (query) => {
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    displayProducts(filteredProducts);
  };

  // Event listener for search button click
  searchButton.addEventListener("click", () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm !== "") {
      filterProducts(searchTerm);
    } else {
      fetchProducts();
    }
  });

  // Event listener for pressing Enter key in search input
  searchInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      const searchTerm = searchInput.value.trim();
      if (searchTerm !== "") {
        filterProducts(searchTerm);
      } else {
        fetchProducts();
      }
    }
  });
});
