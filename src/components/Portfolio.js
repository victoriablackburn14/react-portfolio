import "../App.css";
import weed from "../assets/images/Project2.png";
// import Project2 from "https://gentle-chamber-24039.herokuapp.com/";

function Portfolio() {
  return (
    <div class="container">
      <img src={weed} alt="Project2" />
      <a href='https://gentle-chamber-24039.herokuapp.com/'>Weed</a>
    </div>
  );
}

export default Portfolio;
