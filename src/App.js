import './App.css';
//First Body Container images

import rectangleImage from './DavidSection_home/Group 2.png';
import lionKing from './DavidSection_home/lionKing.png';
import baseball from './DavidSection_home/baseball.png';
import cartoon from './DavidSection_home/cartoon.png';
import alan from './DavidSection_home/alan.png';

function App() {
  return (
    /* navBar Section */
    <div className="navContainer">
      <div className="topNav">
        <p>Top navBar Section</p>
      </div>
      <div className="firstHeader">
      <p>header1</p>
    </div>

      {/* David Section */}
        <div className="row">
          <div className="col-lg-6">
          <div className="firstBody-container">
      <div className="body1-caption">
        <h1>What we offer</h1>
        <p className="body1-p">The Creative Problem Solving programme is series of <br></br>
        digital creation projects aimed to encourage self- <br></br>
        motivation and student agency, designed by New <br></br>
        Zealand’s leading IT industry experts and schools.</p>
      <div className="rectangle_section">
        <h2>What will students create?</h2>
        <img class="rectangle-container" src={rectangleImage} alt="rectangle"/>
        </div>
        </div>
    </div>
    </div>
        <div className="row">
        <div className="col-lg-6">
        <div className="carousel-container">
      <div id="carouselIndicators" class="carousel slide" data-ride="carousel">
      <ol className="carousel-dots carousel-indicators">
        <li data-target="#carouselIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselIndicators" data-slide-to="1"></li>
        <li data-target="#carouselIndicators" data-slide-to="2"></li>
        <li data-target="#carouselIndicators" data-slide-to="3"></li>
     </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img class="lionking-slide" src={lionKing} alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img class="baseball-slide" src={baseball} alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img class="cartoon-slide" src={cartoon} alt="Third slide"/>
    </div>
    <div className="carousel-item">
      <img class="alan-slide" src={alan} alt="Fourth slide"/>
    </div>
  </div>
  <div className="slide-buttons">
  <a class="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>
</div>
  </div>
  </div>
  </div>

      <div className="secondBody">
        <p>BODY #2</p>
        <p>Teaching kids programming and digital skills is MORE than just writing code.</p>
        <ul>
          <li>Creativity & Individuality</li>
          <li>Critical Thinking & Problem Solving</li>
          <li>Communication & Collaboration</li>
          <li>Technology & Future Focus</li>
        </ul>
        <h1>How our programme helps teachers and schools</h1>
        <ol>
          <ul>LEARNING PATHWAYS</ul>
          <ul>DIGITAL TECHNOLOGIES</ul>
          <ul>KEY COMPETENCES</ul>
          <ul>IR4.0</ul>
        </ol>
    </div>
    <div className="thirdBody">
        <p>BODY #3</p>
        <h2>Enhance key competencies</h2>
        <p>The programme enhances capabilities of students in the 5 Key Competencies identified in the New Zealand Curriculum:</p>
        <ol>
          <h3>THINKING</h3>
          <li>In particular the programme focused on problem solving, design thinking and computational thinking.</li>
          <h3>DISCERNING CODES</h3>
          <li>Analysing language, symbols, and texts in order to understand and make sense of the codes in which knowledge is expressed.</li>
          <h3>SELF-MANAGEMENT</h3>
          <li>Projects and challenges are designed to motivate students to explore and experiment with self-motivation</li>
          <h3>RELATIONSHIPS WITH PEERS</h3>
          <li>The programme is designed with unplugged sessions where students interact in a range of different situations, including things like being able to listen well, recognise different points of view, and share ideas.</li>
          <h3>PARTICIPATION AND COLLABORATION</h3>
          <li>The programme encourages students to be involved in communities, such as family, whānau, school, and contribute and make connections with other people</li>
        </ol>
    </div>
    <div className="fourthBody">
        <h1>What are you waiting for?</h1>
        <h2>Start teaching Digital Technologies today.</h2>
        <p>If you need more information, we are happy to answer any questions you may have.</p>
        <li>
          <button>ENQUIRE NOW</button>
          <button>SIGN UP</button>
        </li>
    </div>
    <div className="footerContainer">
        <p className="footerPHeading">COMPANY</p>
        <ul>
          <ol>About Us</ol>
          <ol>Careers</ol>
          <ol>Partners</ol>
        </ul>
    </div>
      <header>
      </header>
</div>
  );
}

export default App;
