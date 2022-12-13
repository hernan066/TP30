export const Genres = ({genre}) => {
  //console.log(genres)
  
  return (
    
    <div className="col-lg-6 mb-4">
      <div className="card bg-dark text-white shadow">
        <div className="card-body">{genre.name}</div>
      </div>
    </div>
  );
};
