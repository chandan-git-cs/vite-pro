// import NetflixSeries from "./components/NetflixSeries";
import styles from "./components/Netflix.module.css";
// import { EventHandling } from "./components/EventHandling";
import "./App.css";
import { TodoApp } from "./proComponent/TodoApp";
// import { UserGreetingApp } from "./proComponent/UserGreetingApp";
// import { BgColorChange } from "./proComponent/BgColorChange";
// import { ShowHide } from "./proComponent/ShowHide";
// import { CounterApp } from "./proComponent/CounterApp";
// import { EventPropgation } from "./components/EventPropgation";
// import { State } from "./components/hooks/State";
// import { DerivedState } from "./components/hooks/DerivedState";

export const App = () => {
  return (
    <>
    <section className="container">
      {/* <h1 className={styles["card-heading"]}>List of best NetflixSeries</h1> */}
      {/* <NetflixSeries /> */}
      {/* <EventHandling /> */}
      {/* <EventPropgation /> */}
      {/* <State /> */}
      {/* <DerivedState /> */}
      {/* <CounterApp /> */}
      {/* <ShowHide /> */}
      {/* <BgColorChanga /> */}
      {/* <BgColorChange /> */}
      {/* <UserGreetingApp /> */}
      <TodoApp />
    </section>

    </>
  );
};  