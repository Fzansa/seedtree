import './App.css';
import Banner from './components/Banner';
import Home from './components/Home';
import Package from './components/Package';
import Services from './components/Services';

function App() {
  return (
    <div class="container my-3">
      <Home />
      <Services />
      <Banner />
      <Package />
    </div>
  );
}

export default App;
