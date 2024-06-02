// src/components/MovieList.tsx
import React from "react";
import { data } from "../dummy_data/dummy_data";
import MovieCard from "./MovieCard";

interface Movie {
  movieName: string;
  coverImg: string;
}

const MovieList: React.FC = () => {
  return (
    <div className="container tab-pane active">
      <br />
      <h3 className="lead display-3 text-white">Vizyondakiler</h3>
      <div className="container border d-flex flex-wrap py-3 bg-secondary">
        {data.map((movie: Movie, index: number) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
