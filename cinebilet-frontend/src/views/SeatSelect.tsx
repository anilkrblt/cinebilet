import React, { useState } from "react";
import Navbar from "../components/Navbar";

// Seçili koltuklar dizisi için tip tanımı
type SelectedSeatsType = string[];

const SeatSelect: React.FC = () => {
  const [selectedSeats, setSelectedSeats] = useState<SelectedSeatsType>([]);
  const [price, setPrice] = useState(0);

  // Sıra harfleri
  const rowLetters = 'ABCDEFGHIJKL'.split('');

  const toggleSeatSelection = (seatId: string): void => {
    setSelectedSeats((prevSelectedSeats: SelectedSeatsType) => {
      // Koltuk zaten seçili mi kontrol et
      const isSelected = prevSelectedSeats.includes(seatId);

      // Eğer seçiliyse, koltuğu çıkar ve fiyatı azalt
      if (isSelected) {
        setPrice((prevPrice) => prevPrice - 100);
        return prevSelectedSeats.filter((seat) => seat !== seatId);
      } else {
        // Eğer seçili değilse, koltuğu ekle ve fiyatı artır
        setPrice((prevPrice) => prevPrice + 100);
        return [...prevSelectedSeats, seatId];
      }
    });
  };

  return (
    <>
      <Navbar />
      <div className="container bg-danger">
        <div className="container">
          <div className="screen py-5 text-center ">
            <h1>SAHNE</h1>
          </div>
  
          {rowLetters.map((rowLetter, rowIndex) => (
            
            <ul key={rowIndex} className={`row justify-content-center`}>
              {[...Array(12)].map((_, colIndex) => {
                const seatId = `${rowLetter}${colIndex + 1}`;
                return (
                  <li
                    key={colIndex}
                    className={`col-3 seat ${selectedSeats.includes(seatId) ? "selected" : ""}`}
                    onClick={() => toggleSeatSelection(seatId)}
                  >
                    {seatId}
                  </li>
                );
              })}
            </ul>
          ))}
        </div>
        <div className="col">
          <div className="">
            <h1>Ödeme</h1>
          </div>
          <div className="">
            <h2>Toplam fiyat: {price} TL</h2>
          </div>
          <button type="button" className="btn btn-danger">
            Ödeme yap
          </button>
        </div>
      </div>
    </>
  );
};

export default SeatSelect;
