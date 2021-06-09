import classes from "./Home.module.css";
import hands from "./../../img/IMG_0505.jpg";

const Home = () => {
  return (
    <div className={classes.Home}>
      <div className={classes.Container}>
        <h1 className={classes.Hello}>holla, mundo</h1>
        <h1>bienvenido a mi sitio web! buena Vibra Solamente</h1>
        <img className={classes.Hand} src={hands} alt="hands"></img>
      </div>
    </div>
  );
};

export default Home;
