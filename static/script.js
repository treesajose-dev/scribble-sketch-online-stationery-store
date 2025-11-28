// LocalStorage Keys
const USERS_KEY = 'users';
const LOGGED_IN_USER_KEY = 'loggedInUser';
const PRODUCTS_KEY = 'products';
const CART_KEY = 'cart';

// Helper Functions
function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
}

function setLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function showSnackbar(message) {
    const snackbar = document.getElementById("snackbar");
    snackbar.className = "show";
    snackbar.innerText = message;
    setTimeout(function () { snackbar.className = snackbar.className.replace("show", ""); }, 3000);
}

// Auth Functions
function checkLogin() {
    const userEmail = localStorage.getItem(LOGGED_IN_USER_KEY);
    const navLogin = document.getElementById('nav-login');
    const navLogout = document.getElementById('nav-logout');
    const navAddProduct = document.getElementById('nav-add-product');

    if (userEmail) {
        if (navLogin) navLogin.style.display = 'none';
        if (navLogout) navLogout.style.display = 'block';

        // Admin Check
        if (userEmail === 'admin@gmail.com') {
            if (navAddProduct) navAddProduct.style.display = 'block';
        }
    } else {
        if (navLogin) navLogin.style.display = 'block';
        if (navLogout) navLogout.style.display = 'none';
        if (navAddProduct) navAddProduct.style.display = 'none';
    }
    updateCartCount();
}

function logout() {
    localStorage.removeItem(LOGGED_IN_USER_KEY);
    window.location.href = 'login.html';
}

function updateCartCount() {
    const cart = getLocalStorage(CART_KEY);
    const countElement = document.getElementById('cart-count');
    if (countElement) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        countElement.innerText = totalItems;
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', function () {
    checkLogin();

    // Initialize Products if empty (Demo Data)
    const products = getLocalStorage(PRODUCTS_KEY);
    if (products.length === 0) {
        const demoProducts = [
            { id: 1, name: "Premium Notebook", price: 499, description: "High quality paper for sketching.", imagename: "https://images.meesho.com/images/products/543307742/zmtp9_512.webp" },
            { id: 2, name: "Gel Pen Set", price: 199, description: "Smooth writing gel pens.", imagename: "https://adritishome.in/cdn/shop/files/IMG-20240831-WA0032.jpg" },
            { id: 3, name: "Acrylic Paints", price: 850, description: "Vibrant colors for artists.", imagename: "https://www.montmarte.com/cdn/shop/files/Mont-Marte-Acrylic-Colour-Pastel-Colours-36-x-36ml-MSCP3636_V01-F2.jpg" }
        ];
        setLocalStorage(PRODUCTS_KEY, demoProducts);
    }
});
