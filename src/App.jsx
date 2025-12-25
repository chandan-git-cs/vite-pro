import NetflixSeries from "./components/NetflixSeries";
import styles from "./components/Netflix.module.css";
import { EventHandling } from "./components/EventHandling";
import "./App.css";
export const App = () => {
  return (
    <>
    <section className="container">
      <h1 className={styles["card-heading"]}>List of best NetflixSeries</h1>
      {/* <NetflixSeries /> */}
      <EventHandling />
    </section>

    </>
  );
};  