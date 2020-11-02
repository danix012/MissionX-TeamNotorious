import React from 'react';
import './App.css';

// Nav&Header images
import logo from './Star Logo 07-2.png';
import heroimage from './Hero image option 1 edit 2.png';

//First Body Container images
import rectangleImage from './DavidSection_home/Group 2.png';
import lionKing from './DavidSection_home/lionKing.png';
import baseball from './DavidSection_home/baseball.png';
import cartoon from './DavidSection_home/cartoon.png';
import alan from './DavidSection_home/alan.png';

// 3rd section

import scissors from './scissors.png';
import puzzles from './puzzles.png';
import blocks from './blocks.png';
import library from './library.png';
// import StarLogoE from './StarLogoE.png';

function App() {
  return (
    /* navBar Section */
    <div className="container">

    <div className="topnav">

      <div className="logo">
        <img src={logo} alt-text="logo"/>
      </div>


      <div className="links">
        <a href="#">HOME</a>
        <a href="#">FEATURES</a>
        <a href="#">TEACHERS</a>
      </div>

      <div className="langLog">

        <button>lang+flags</button>
        <button>Register | Log in</button>

      </div>

    </div>
    <header className="appHeader">
      <img src={heroimage} />
      <div className="headerText">
        <p>Prepare young minds for a better <span>future.</span></p>
        <p>Let us help you advance students in Digital Technologies and other learning areas with our project-based learning programme.</p>
        <div className="headerButtons">
          <button className="LearnMore">Learn More</button>
          <button className="signUp">Sign Up</button>
        </div>
      </div>

</header>

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

  <div className="sectionThree">

<div className="images">
  <p>Teaching kids programming and digitil skills is MORE than just writing code.</p>
  <img src={scissors} alt="pic of scissors" className="create" />
  <img src={puzzles} alt="pic of puzzles" className="critical" />
  <img src={blocks} alt="pic of blocks" className="communication" />
  <img src={library} alt="pic of library" className="technology" />
</div>

<div className="buttons">
  <h2>How our programme helps teachers and schools</h2>
  <button id="click1" onClick="click1">LEARNING PATHWAYS</button>
  <button id="click2" onClick="click2">DIGITAL TECHNOLOGIES</button>
  <button id="click3" onClick="click3">KEY COMPONANTS</button>
  <button id="click4" onClick="click4">IR4.0</button>
</div>
</div>

<div className="footer">
<h1>Ehance key competencies</h1>
<h2>The programme enhances capabilities of students in the
      5 Key Competencies in the New Zeland Curriculim </h2>
<ul> 
  <li>THINKING</li>
  <p>In particular the programme featured on problem solving,
      design, thinking and computational thinking.</p>
  <li>DISCERNING CODE</li>
  <p>Analysing language symbols and texts, in order to
          understand and make sense of the code in whcih knowledge is expressed.</p>
  <li>SELF MANAGEMENT</li>
  <p>Projects and challenges are designed to motivate
         students to explore and experiment with self motivation. </p>
  <li>RELATIONSHIP WITH PEERS</li>
  <p>This programme is design with unplugged sessions where
  students interact in a range of different situations, including things like being able to listen well,
        recognise different points of view and share ideas.</p>
  <li>PARTICIPATION AND COLLABERATION</li>
  <p>This programme encourages students to be involoved in communities, such as family,
        whanau, school and contribute and make connections with other people.</p>
</ul>
</div>

</div>


  );
}

export default App;
