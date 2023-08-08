import './App.css';
import LoginPage from './components/LoginPage/Loginpage';
import SecurityDetails from './components/SecurityPage/SecurityDetails';
import SecurityDetailsTable from './components/SecurityPage/SecurityDetailsTable';

function App() {
  return (
    <div className="App">
      <Router>
      
      <Header/>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/about" element={<About/>} exact/>
        
        <Route path="/wishlist" elements={<Wishlist/>} exact/>
        <Route path="/trading-bonds-table" elements={<TradingBondsTable/>} exact/>
        <Route path="/security-details-table" elements={<SecurityDetailsTable/>} exact/>
        <Route path="/log-out" element={<LogOut/>}></Route>
        </Routes>
        <Footer/>
        
      </Router>
    </div>
  );
}

export default App;
