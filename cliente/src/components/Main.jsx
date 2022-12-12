import { data } from "../data/data";
import { ContentRowMovies } from "./ContentRowMovies";
import { Genres } from "./Genres";
import { LastMovies } from "./LastMovies";
import { Navbar } from "./Navbar";
import { TableMovies } from "./TableMovies";

export const Main = () => {
  return (
    <div id="content">
      <Navbar />
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
        </div>

        <div className="row">
          {data.map((item) => (
            <ContentRowMovies data={item} key={item.title} />
          ))}
        </div>

        <div className="row">
          <LastMovies />
          <Genres />
        </div>
        <TableMovies />
      </div>
     
    </div>
  );
};
