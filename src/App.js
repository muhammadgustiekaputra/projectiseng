import "./App.css";
import NavigationBar from "./Components/NavigationBar";
import "./Components/Style/LandingPage.css";
import Intro from "./Components/Intro";
import Trending from "./Components/Trending";
import Superhero from "./Components/Superhero";

function App() {
  return (
    <div>
      {/* Intro Section */}
      <div className="myBG">
        <NavigationBar />
        <Intro /> 
      </div>
      {/* End of intro */}

      {/* Trending section */}
      <div className="trending">
        <Trending />
      </div>
     {/* end of trending section */}
    <div  className="superhero">
      <Superhero/>
    </div>
    </div>
  );
}

export default App;
