import "./App.css";
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation";
import LoginPage from "./components/LoginPage/Loginpage";
import TradingBondsTable from "./components/TradePage/TradingBondsTable";
import SecurityDetailsTable from "./components/SecurityPage/SecurityDetailsTable";

function App() {
  return (
    <div className="body">
      <div className="bodyh">
        <Header />
      </div>
      <div className="bodyc">
        <LoginPage />
      </div>
      {/* <Navigation /> */}
      {/* <Router>
        <Routes>
          <Route
            path="/trading-bonds-table"
            elements={<TradingBondsTable />}
            exact
          />
          <Route
            path="/security-details-table"
            elements={<SecurityDetailsTable />}
            exact
          />
        </Routes>
      </Router> */}
      <div className="bodyf">
        <Footer />
      </div>
=======
// import LoginPage from "./components/Loginpage";
import LandingPage from "./components/LandingPage/landingPage";

function App() {
  return (
    <div className="App">
      <LandingPage />
>>>>>>> main
    </div>
  );
}

export default App;
