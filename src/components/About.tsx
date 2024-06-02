import React from "react";
import "../index.css";
import { Form } from "react-router-dom";
import ContactForm from "./ContactForm";
import Navbar from "./Navbar";

const About: React.FC = () => {
  return (
    <div>
      <div className="container-fluid text-center p-5">
        <div className="row">
          <Navbar />
        </div>
      </div>
      <div style={{ marginTop: "150px" }}>
        <div className="container p-5 expense bg-danger navbar-spacing">
          <h1>Hakkımızda</h1>
          <p className="lh-lg fs-5">
            Hoş Geldiniz! Firmamız, CineBilet, 2024 tarihinde kurulmuş bir Film
            şirketidir. Amacımız, müşterilerimize Film Sektöründe alanında en
            kaliteli ve yenilikçi çözümleri sunmaktır. Vizyonumuz, işimizi en
            iyi şekilde yapmak. Misyonumuz ise siz müşterilerimize en iyi
            deneyimi sunmaktır. Müşteri memnuniyetini her zaman ön planda
            tutarak, verdiğimiz hizmet konusundaki uzmanlığımızı ve deneyimimizi
            en iyi şekilde sunmaya odaklanıyoruz. Ekibimizdeki her birey, alanı
            konusunda yeteneklidir ve işimize olan tutkumuzla bilinir.
            Sektördeki gelişmeleri yakından takip ediyor ve sürekli olarak
            kendimizi geliştirmeye çaba gösteriyoruz. Siz değerli
            müşterilerimizin güvenini kazanmak ve uzun vadeli iş ilişkileri
            kurmak, bizim için en önemli önceliklerden biridir. Her zaman açık
            ve şeffaf bir iletişim politikası benimseyerek, sizinle güçlü bir iş
            ortaklığı kurmak istiyoruz. Eğer sorularınız varsa veya işbirliği
            teklifleriyle ilgileniyorsanız, lütfen bizimle iletişime geçmekten
            çekinmeyin. Sizleri firmamıza bekliyoruz!
            <br></br>Saygılarımızla,<br></br>
            Cinebilet Ekibi
          </p>

          <button>
            <a href=""> Facebook</a>
          </button>
        </div>
      </div>
      <div className="">
        <ContactForm></ContactForm>
      </div>
    </div>
  );
};

export default About;
