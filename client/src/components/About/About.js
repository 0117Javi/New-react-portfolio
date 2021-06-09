import classes from "./About.module.css";
import PageHeader from "./../PageHeader/PageHeader";
import me from "./../../img/IMG_3204.jpg";

const About = () => {
  return (
    <div className={classes.AboutMe}>
      <PageHeader title={"about me"} />
      <div className={classes.Container}>
        <div className={classes.Text}>
          <h2>hola, me llamo j.j.!</h2>
          <p>
            soy un mago multidisciplinario de la red quien tiene dificultades
            financieras debido al curso de codificación en la universidad de
            Northwestern. Estoy tratando de llegar a fin de mes pero me enojo
            cuando el trabajo se califica en cosas triviales como cuando no
            tengo una biografía o un currículum en mi sitio web.
          </p>
        </div>
        <div className={classes.Photo}>
          <img className={classes.Me} src={me} alt="me"></img>
        </div>
      </div>
    </div>
  );
};

export default About;
