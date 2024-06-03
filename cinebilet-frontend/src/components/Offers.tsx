// src/components/Offers.tsx
//
import React from "react";
import Navbar from "./Navbar";

const Offers: React.FC = () => {
  return (

<div className="container mt-5">
  <Navbar></Navbar>
        <div className="row justify-content-center" style={{margin:"200px"}}>
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Sepet İçeriği</h5>
                        <ul className="list-group mb-3">
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                            Man From Toronto  <span className="fw-bold">H6 , H7</span> 28 Nisan
                                <span className="badge bg-danger">₺300</span> 
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                            The Prestige  <span className="fw-bold">D5 , D6, D7</span> 3 Mayıs
                                <span className="badge bg-danger">₺450</span> 
                            </li>
                            
                        </ul>
                        <h5 className="card-title">Toplam Ücret</h5>
                        <p className="card-text">Toplam: <strong>₺750</strong></p>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="cardNumber" className="form-label">Kart Numarası</label>
                                <input type="text" className="form-control" id="cardNumber" placeholder="**** **** **** ****"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="expiryDate" className="form-label">Son Kullanma Tarihi</label>
                                <input type="text" className="form-control" id="expiryDate" placeholder="MM/YY"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="cvv" className="form-label">CVV</label>
                                <input type="text" className="form-control" id="cvv" placeholder="123"/>
                            </div>
                            <button type="submit" className="btn btn-danger">Ödeme Yap</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Offers;
