import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form verilerini işle
    console.log(formData);
    // Formu sıfırla
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className='container  bg-danger'>
      <h2>İletişim</h2>
  

      <div className="mb-3">
  <label className="form-label">Email</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
</div>
<div className="mb-3">
  <label  className="form-label">Mesaj</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" ></textarea>
</div>
<button type="button" className="btn btn-danger">Gönder</button>
    </div>
  );
};

export default ContactForm;