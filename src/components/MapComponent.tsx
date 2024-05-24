import React from "react";

const MapComponent: React.FC = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9841.67073259056!2d26.570768191952006!3d41.668587060795424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b32f674d4b9c73%3A0x45bce4b9b3686080!2sErasta%20Edirne%20AVM!5e0!3m2!1sen!2str!4v1716554514011!5m2!1sen!2str"
        width="600"
        height="450"
        style={{border:0}}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapComponent;
