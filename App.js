import './App.css';
import scissors from './scissors.png';
import puzzles from './puzzles.png';
import blocks from './blocks.png';
import library from './library.png';
import StarLogoE from './StarLogoE.png';

function App() {
  return (
    <div>
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

    </div >
  );
}

export default App
