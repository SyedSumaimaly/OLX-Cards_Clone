import './App.css';
import Header from './Components/Header/Header'
import Cards from './Components/Cards/Cards'
import car from './Components/images/mehran.jpg'
import mobile from './Components/images/mobile.jpg'
import sofa from './Components/images/sofa.jpg'
import bike from './Components/images/bike.jpg'
import bages from './Components/images/bages.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <div className='allcards'>
          <Cards img={car} title='Suzuki Mehran vx ' price='Rs 360,000' />
          <Cards img={mobile} title='Realme C11 ' price='Rs 18,000' />
          <Cards img={sofa} title='Umair Cushion Maker ' price='Rs 20,000' />
          <Cards img={bike} title='CB 150F for sale' price='Rs 360,000' />
          <Cards img={sofa} title='Umair Cushion Maker.' price='Rs 20,000' />
          <Cards img={bages} title='Gucci 3 Pcs Bag Set' price='Rs 25,00' />
        </div>
      </div>

    </>
  );
}

export default App;
