import './App.css';
import Navbar from './component/Home/Navbar';
import Home from './component/Home';
import Dashboard from './component/Home/Dashboard';
import Footer from './component/Home/Footer';
import Drawer from './component/Home/Drawer';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Drawer />
      <h1>Welcome to payment gateway..!</h1>
      <Home />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
