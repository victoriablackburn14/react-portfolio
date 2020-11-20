import '../App.css';
import resume from '../assets/images/resume.png';

function Resume() {
  return (
    <div class="jumbotron">
    <div class="container">
      <h1 class="display-4"> <img src={resume}  alt="resume"/></h1>
      </div>
      </div>
  );
}

export default Resume;