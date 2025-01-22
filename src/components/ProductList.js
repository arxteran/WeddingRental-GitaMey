import React, { useState } from "react";
import ProductCard from "./ProductCard";
import "../assets/css/ProductList.css";
import { useForm } from "@formspree/react";

const products = [
  {
    id: 1,
    name: "Dekorasi Bunga",
    price: "Rp 2.500.000",
    description: "Dekorasi bunga untuk mempercantik acara pernikahan Anda.",
    image: require("../assets/images/dekorasi_bunga.jpg"),
  },
  {
    id: 2,
    name: "Karpet Merah",
    price: "Rp 1.000.000",
    description: "Karpet merah untuk memberikan kesan mewah pada acara.",
    image: require("../assets/images/karpet_merah.jpg"),
  },
  {
    id: 3,
    name: "Lampu Hias",
    price: "Rp 700.000",
    description: "Lampu hias yang memperindah suasana pernikahan.",
    image: require("../assets/images/lampu_hias.jpg"),
  },
  {
    id: 4,
    name: "Meja Kursi",
    price: "Rp 1.500.000",
    description: "Meja dan kursi untuk tamu dengan desain elegan.",
    image: require("../assets/images/meja_kursi.jpg"),
  },
  {
    id: 5,
    name: "Panggung Mini",
    price: "Rp 3.000.000",
    description: "Panggung mini untuk acara pernikahan Anda.",
    image: require("../assets/images/panggung_mini.jpg"),
  },
  {
    id: 6,
    name: "Pelaminan",
    price: "Rp 5.000.000",
    description: "Pelaminan mewah untuk pengantin.",
    image: require("../assets/images/pelaminan.jpg"),
  },
  {
    id: 7,
    name: "Sound System",
    price: "Rp 1.200.000",
    description: "Sound system dengan kualitas suara terbaik.",
    image: require("../assets/images/sound_system.jpg"),
  },
  {
    id: 8,
    name: "Tenda",
    price: "Rp 2.000.000",
    description: "Tenda besar untuk acara pernikahan outdoor.",
    image: require("../assets/images/tenda.jpg"),
  },
];

const ProductList = () => {
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tenantName, setTenantName] = useState("");
  const [rentalDate, setRentalDate] = useState("");
  const [state, handleSubmit] = useForm("xyzkgnql"); // Ganti dengan ID Formspree kamu

  const addToCart = (product) => setCart((prevCart) => [...prevCart, product]);
  const removeFromCart = (productId) =>
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));

  const getTotalPrice = () =>
    cart.reduce((total, product) => {
      const price = parseInt(
        product.price.replace("Rp ", "").replace(/\./g, "")
      );
      return total + price;
    }, 0);

  const handleRentClick = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setTenantName("");
    setRentalDate("");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Membuat daftar produk yang disewa
    const rentedProducts = cart
      .map((product) => `${product.name} - ${product.price}`)
      .join(", ");

    // Mengirimkan data ke Formspree
    handleSubmit({
      tenantName,
      rentalDate,
      rentedProducts, // Menambahkan produk yang disewa ke form
    });

    alert(
      `Terima kasih, ${tenantName}! Anda telah berhasil menyewa pada tanggal ${rentalDate}.`
    );

    setCart([]); // Reset cart setelah berhasil menyewa
    closeModal();
  };

  return (
    <div>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            cart={cart}
          />
        ))}
      </div>

      {cart.length > 0 && ( // Tampilkan cart hanya jika ada produk di cart
        <div className="cart">
          <h2>Shopping Cart</h2>
          <ul>
            {cart.map((product) => (
              <li key={product.id}>
                {product.name} - {product.price}
                <button onClick={() => removeFromCart(product.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <span>Total: Rp {getTotalPrice().toLocaleString()}</span>
          </div>
          <button onClick={handleRentClick}>Sewa</button>
        </div>
      )}

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Form Sewa</h3>
            <form onSubmit={handleFormSubmit}>
              <label htmlFor="tenantName">Nama Penyewa:</label>
              <input
                type="text"
                id="tenantName"
                value={tenantName}
                onChange={(e) => setTenantName(e.target.value)}
                required
              />
              <label htmlFor="rentalDate">Tanggal Sewa:</label>
              <input
                type="date"
                id="rentalDate"
                value={rentalDate}
                onChange={(e) => setRentalDate(e.target.value)}
                required
              />
              <div className="modal-buttons">
                <button
                  type="button"
                  className="cancel-button"
                  onClick={closeModal}
                >
                  Batal
                </button>
                <button type="submit" className="confirm-button">
                  Sewa
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
