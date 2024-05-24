// src/components/MovieCard.tsx
import React from 'react';

interface Movie {
  movieName: string;
  coverImg: string;
}

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="card m-auto mt-2" style={{ height: '750px', width: '300px' }}>
      <div className="card-body">
        <h4 className="card-title">{movie.movieName}</h4>
        <img className="card-img-top" src={movie.coverImg} alt="Card image" />
        <hr />
        <p>Korku, Aksiyon</p>
        <hr />
        <p>NİSAN: 11, 12, 13</p>
        <a href="#" className="btn btn-primary">Bilet Al</a>
      </div>
      <div className="card-footer">
        <p className="card-text">
          <legend className="lead">Bugünkü Seanslar</legend>
          <button type="button" className="btn btn-outline-primary m-1">12:30</button>
          <button type="button" className="btn btn-outline-primary m-1">13:30</button>
          <button type="button" className="btn btn-outline-primary m-1">14:30</button>
        </p>
      </div>
    </div>
  );
}

export default MovieCard;
