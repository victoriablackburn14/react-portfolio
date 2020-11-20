import LAjpg from '../assets/images/LA.jpg';
import '../App.css';

function Home() {
  return (
    <div class="jumbotron">
  <div class="container">
    <h1 class="display-4"> <img src={LAjpg} alt="LA"/></h1>
    <p class="lead">Victoria Blackburn is based in Los Angeles, CA.  She has 5 years of experience in client service, marketing, operations and is pursuing a certificate in full-stack web development.</p>
  </div>
</div>
  );
}

export default Home;