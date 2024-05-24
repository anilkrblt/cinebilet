    import React, { useState } from 'react';

    // Define a type for the selected seats array
    type SelectedSeatsType = number[];


    const SeatSelect: React.FC = () => {
    const [selectedSeats, setSelectedSeats] = useState<SelectedSeatsType>([]);
    const [price, setPrice] = useState(0)

    const toggleSeatSelection = (seatNumber: number): void => {
        setSelectedSeats((prevSelectedSeats: SelectedSeatsType) => {
        // Koltuk zaten seçili mi kontrol et
        const isSelected = prevSelectedSeats.includes(seatNumber);
        
        // Eğer seçiliyse, koltuğu çıkar ve fiyatı azalt
        if (isSelected) {
            setPrice((prevPrice) => prevPrice - 100);
            return prevSelectedSeats.filter((seat) => seat !== seatNumber);
        } else {
            // Eğer seçili değilse, koltuğu ekle ve fiyatı artır
            setPrice((prevPrice) => prevPrice + 100);
            return [...prevSelectedSeats, seatNumber];
        }
        });
    };

    return (

        
        <div className="container  bg-danger">
        
        <div className="container ">
        <div className="screen py-5 text-center"><h1>SAHNE</h1></div>
            {[...Array(8)].map((_, rowIndex) => (
            <ul key={rowIndex} className="row justify-content-center">
                {[...Array(12)].map((_, colIndex) => (
                <div
                    key={colIndex}
                    className={`col-3 seat ${selectedSeats.includes(rowIndex * 12 + colIndex) ? 'selected' : ''}`}
                    onClick={() => toggleSeatSelection(rowIndex * 12 + colIndex)}
                ></div>
                ))}
            </ul>
            ))}
        </div>
        <div className='col'>
            <div className=''><h1>Ödeme</h1></div>
            <div className=''><h2>Toplam fiyat:  {price} TL</h2></div>
            <button type="button" className="btn btn-danger">Ödeme yap</button>
        </div>
        </div>
    );
    };

    export default SeatSelect;
