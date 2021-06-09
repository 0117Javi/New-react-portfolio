import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={classes.NavBar}>
      <nav>
        <ul>
          <li>
            <a href="/">home</a>
          </li>
          <li>
            <a href="/#about">about me</a>
          </li>
          <li>
            <a href="/#works">works</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
