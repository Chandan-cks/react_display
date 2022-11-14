import './App';
import Header from "./component/Header";
import Intro from './component/Intro';
import Footer from './component/Footer';
import Portfolio from './component/portfolio';

export default function App() {
  const Data = {
    Name: "Chandan Sahoo",
    Desc: "Hii I'm a Fresher Web developer working as Freelancer on React Template making.",
    LinkdIn:"https://www.linkedin.com/in/chandan-sahoo-bb422b16a/",
    // Projects: [{
    //   Image:"https://imgur.com/i.imgur.com/Mldxxay.jpg"
    // },{
    //   Image:"https://imgur.com/i.imgur.com/8nTxCQr.jpg"
    // },{
    //   Image:"https://imgur.com/i.imgur.com/Gr5QTeD.jpg"
    // }]
  }
    window.document.title = Data.Name + " ~ Portfolio"
  return (
      <div className="App">
          <Header dark={true}>{Data.Name}</Header>
            <Intro Name={Data.Name} Desc={Data.Desc} Buttons={<>
              <a href={Data.LinkdIn} class="btn btn-secondary my-2 me-2">Connect On Linkdin</a>
            <a href="#Portfolio" class="btn btn-secondary my-2">My Portfolio</a></>} />
            <Portfolio Projects={Data.Projects} />
          <Footer Name={Data.Name} />
      </div>
  );
}


