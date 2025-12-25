const Mitems = ({movie}) => {
  const { img_url, name, year, rating, trailer } = movie;
     return(
        <>
        <div>
            <div>
                <img src={img_url} alt="" />
            </div>
            <h1>Name : {name}</h1>
            <p>Year: {year}</p>
            <p>Rating :{rating}</p>
            <a href={trailer}>
             <button>Watch Now</button>
            </a>
        </div>
       </>
    )
}
export default Mitems;