export const ListData = ({ data }) => {
  const { img_url, name, year, rating, trailer } = data;

  return (
    <li className="card">
        <div className="card-img">
        <img src={img_url} alt=""  />
        </div>
        <div className="card-content">
          <h1>Name :{name}</h1>
          <p>Year :{year}</p>
          <p>Rating : {rating}</p>
          <a href={trailer} target="_blank">
            <button>Watch Now</button>
          </a>
        </div>
    </li> 
  );
};