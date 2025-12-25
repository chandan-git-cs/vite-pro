import styles from "./Netflix.module.css";

export const ListData = ({ data }) => {
  const { img_url, name, year, rating, trailer } = data;
const ratingClass = rating >= 8 ? styles["super-hit"] : styles.average;
  return (
    <li className={styles.card}>
        <div className={styles["card-img"]}>
          <img src={img_url} alt=""  />
        </div>
        <div className={styles["card-content"]}>
          <h1 className="font-bold underline" >Name :{name}</h1>
          <p className="underline text-red-500">Test Underline</p>
          <p>Year :{year}</p>
          <p>Rating : <span className={`${styles.rating} ${ratingClass}`}>{rating}</span> </p>
          <a href={trailer} target="_blank">
            <button>Watch Now</button>
          </a>
        </div>
    </li> 
  );
};