import { useEffect, useState } from "react";
import axios from "axios";
import { Genres } from "./Genres";

export const GenresInDb = () => {
  const [genres, setGenres] = useState([]);
  const [hover, setHover] = useState("");

  useEffect(() => {
    const getGenres = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/api/genres");

        setGenres(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getGenres();
  }, []);

  const handlerHover = () => {
    setHover("bg-secondary");
  };
  const handlerLeave = () => {
    setHover("");
  };

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5
            className={`m-0 font-weight-bold text-gray-800 ${hover}`}
            onMouseOver={handlerHover}
            onMouseLeave={handlerLeave}
          >
            Genres in Data Base
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            {genres.map((genre) => (
              <Genres genre={genre} key={genre.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
