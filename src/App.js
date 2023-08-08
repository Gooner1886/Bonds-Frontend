import "./App.css";
import LoginPage from "./components/Loginpage";
import { WithSubnavigation as PreLogin } from "./components/LandingPage/landingPage";


function App() {
  return (
    <div className="App">
      <PreLogin />
      {/* <LoginPage /> */}
    </div>
  );
}

export default App;
