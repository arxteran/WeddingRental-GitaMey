import React from "react";
import "../assets/css/AboutPage.css"; // Jangan lupa tambahkan styling CSS untuk halaman ini

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>Tentang Kami</h1>
        <p>Kenali lebih dekat tentang layanan kami.</p>
      </div>
      <div className="about-content">
        <section className="section">
          <h2>Visi Kami</h2>
          <p>
            Kami bertujuan untuk memberikan layanan dekorasi pernikahan yang
            elegan dan berkesan. Dengan pilihan produk berkualitas tinggi, kami
            akan membuat hari istimewa Anda menjadi lebih memukau dan tak
            terlupakan.
          </p>
        </section>
        <section className="section">
          <h2>Misi Kami</h2>
          <p>
            Misi kami adalah menyediakan dekorasi pernikahan yang sesuai dengan
            keinginan dan anggaran Anda, serta memberikan pengalaman sewa yang
            mudah dan menyenangkan. Kami berkomitmen untuk memberikan pelayanan
            terbaik dengan produk yang selalu terjaga kualitasnya.
          </p>
        </section>
        <section className="section">
          <h2>Layanan Kami</h2>
          <p>
            Kami menawarkan berbagai layanan dekorasi pernikahan seperti
            dekorasi bunga, tenda, panggung, meja kursi, hingga sound system.
            Semua produk kami dirancang untuk menciptakan suasana yang sempurna
            untuk acara pernikahan Anda.
          </p>
        </section>
        <section className="section">
          <h2>Kenapa Memilih Kami?</h2>
          <ul>
            <li>Produk berkualitas tinggi</li>
            <li>Pelayanan yang ramah dan profesional</li>
            <li>Harga yang bersaing dan fleksibel</li>
            <li>Desain kreatif dan personalisasi untuk setiap klien</li>
          </ul>
        </section>
      </div>
      <div className="about-footer">
        <h3>Hubungi Kami</h3>
        <p>
          Untuk informasi lebih lanjut atau pertanyaan, Anda bisa menghubungi
          kami di email: <strong>ggitammysta@gmail.com</strong>
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
