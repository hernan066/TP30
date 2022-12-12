export const ContentRowMovies = ({ data }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className={`card border-left-${data.color} shadow h-100 py-2`}>
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div
                className={`text-xs font-weight-bold text-${data.color} text-uppercase mb-1`}
              >
                {data.title}
              </div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">
                {data.quantity}
              </div>
            </div>
            <div className="col-auto">
              <i className={`${data.icon} text-gray-300`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
