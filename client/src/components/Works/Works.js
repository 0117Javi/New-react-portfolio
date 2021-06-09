import classes from "./Works.module.css";
import PageHeader from "./../PageHeader/PageHeader";
import bird from "./../../img/IMG_60BFA28155EF-1.jpeg";
import cow from "./../../img/IMG_02BEB7F4FF00-1.jpeg";
import feet from "./../../img/IMG_3841.jpg";
import coffee from "./../../img/IMG_3840.jpg";

const gitLinks = (url) => {
  <div>onClick={(e) => window.open(url, "_blank").focus}</div>;
};

const gitHUb = (url, img, description) => {
  return (
    <div className={classes.GitHubContainer}>
      <div className={classes.img}>
        {gitLinks(url)}
        <img src={img} alt="img"></img>
      </div>
      <div className={classes.Text}>
        <p>{description}</p>
      </div>
    </div>
  );
};

const weatherDescription = `get the local forecast for your area and other cities around the country!`;

const quizDescription = `test your JavaScript knowledge with this quiz`;

const dayPlannerDescription = `use this app to help plan out your day at work, school, or around the house!`;

const drinkMyWeatherDescription = `an app the suggests drinks for the mood outside!`;

const Works = () => {
  return (
    <div classes={classes.Works}>
      <PageHeader title={"works"} />
      <div className={classes.WorksContent}>
        <div className={classes.Paragraph}>
          <h2>"9 times out of 10 i get wrong" - mac miller</h2>
          <p>
            Here are some of the student projects I have worked on during my
            time at Northwestern.
          </p>
        </div>
        <div className={classes.Githubs}>
          {gitHUb(
            "https://0117javi.github.io/cities/",
            cow,
            weatherDescription
          )}

          {gitHUb("https://0117javi.github.io/quiz-hw/", bird, quizDescription)}

          {gitHUb(
            "https://0117javi.github.io/penner/",
            feet,
            dayPlannerDescription
          )}

          {gitHUb(
            "https://rotosti.github.io/DrinkMyWeather/",
            coffee,
            drinkMyWeatherDescription
          )}
        </div>
      </div>
    </div>
  );
};

export default Works;
