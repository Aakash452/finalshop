import ResponsiveAppBar from './Components/Header/ResponsiveAppBar';
import Footer from './Components/Footer';
import './App.css';
import Announcement from './Components/Announcement';
import Slider from './Components/Slider';
import Categories from './Components/Categories';
import Products from './Components/Products';
import Newsletter from './Components/Newsletter';


function Home() {
  return (
    <div className="App">
      <Announcement/>
      <ResponsiveAppBar/>
      <Slider/>
      <Categories/>
      <Products/>
      <Newsletter/>
      <Footer/>
    
    </div>
  );
}

export default Home;
