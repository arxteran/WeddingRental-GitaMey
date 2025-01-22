import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Dashboard.css";


const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Selamat Datang di Wedding Rental</h1>
      <p>
        Sewa perlengkapan untuk acara pernikahan Anda dengan mudah dan cepat!
      </p>
      <Link to="/products" className="dashboard-link">
        Lihat Produk
      </Link>
    </div>
  );
};

export default Dashboard;
