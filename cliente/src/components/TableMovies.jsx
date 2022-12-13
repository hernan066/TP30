import { useEffect, useState } from "react";
import { Movie } from "./Movie";
import axios from "axios";

export const TableMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getGenres = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/api/movies");
        console.log(data);
        setMovies(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getGenres();
  }, []);

  return (
    <>
      <h1 className="h3 mb-2 text-gray-800">All the movies in the Database</h1>

      <div className="card shadow mb-4">
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Titulo</th>
                  <th>Calificación</th>
                  <th>Premios</th>
                  <th>Duración</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Id</th>
                  <th>Titulo</th>
                  <th>Calificación</th>
                  <th>Premios</th>
                  <th>Duración</th>
                </tr>
              </tfoot>
              <tbody>
                {movies.map((movie) => (
                  <Movie movie={movie} key={movie.id} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
