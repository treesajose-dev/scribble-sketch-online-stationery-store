# Scribble & Sketch

A stationary management system and online shopping website built with **Bootstrap 5**, **Material Design**, and **JavaScript + LocalStorage**.

## Features

- **User Authentication**: Registration and Login with LocalStorage persistence.
- **Product Management**: Admin can Add, Edit, and Delete products (CRUD operations).
- **Shopping Cart**: Users can add items, update quantities, and remove items.
- **Responsive Design**: Built with Bootstrap 5 and custom Material Design components.
- **Static Site**: No backend required - runs entirely in the browser!

## Setup & Run

### Option 1: Direct File Access
Simply open `index.html` in your web browser.

### Option 2: VS Code Live Server
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html` and select "Open with Live Server"

## Pages Overview

-   **Home (`index.html`)**: Landing page with hero banner and categories.
-   **Shop (`shop.html`)**: Displays all products. Admins see Edit/Delete buttons.
-   **Login (`login.html`)**: User login page.
-   **Register (`register.html`)**: User registration page.
-   **Add Product (`add_product.html`)**: Admin only page to add new products.
-   **Edit Product (`edit_product.html`)**: Admin only page to edit existing products.
-   **Cart (`cart.html`)**: Shopping cart to manage selected items.

## Admin Credentials

To access admin features (Add/Edit/Delete products), use the following credentials:
-   **Email**: `admin@gmail.com`
-   **Password**: `admin123`

## Technologies Used

-   **Frontend**: HTML, CSS, JavaScript
-   **Styling**: Bootstrap 5, Material Design (Material Icons, Cards, Shadows)
-   **Database**: LocalStorage (Browser-based)
-   **CRUD Operations**: Fully implemented using JavaScript

## Data Persistence

All data (users, products, cart) is stored in the browser's LocalStorage:
- Data persists across page refreshes
- Each browser/device maintains separate data
- Clearing browser data will reset the application

## Demo Products

The application comes with 3 demo products pre-loaded:
1. Premium Notebook - ₹499
2. Gel Pen Set - ₹199
3. Acrylic Paints - ₹850

---

**Note**: This is a client-side only implementation suitable for demos and learning. For production use, implement proper server-side authentication and database storage.
