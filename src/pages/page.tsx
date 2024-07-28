import React from 'react';
import './styles.css';
import Header from '../components/header/Header';
import Slider from '../components/slider/Slider';
import SliderText from '../components/sliderText/SliderText';
import Divider from '../components/divider/Divider';
import FeaturedProduct from '../components/featured/Featured';

const Home: React.FC = () => {

  return (
    <div className='home'>
      <header className='homeHeader'>
        <Header />
      </header>
      <main>
        <div className='homeMain'>
          <div className='homeBackground'></div>
          <div className='homeSliderText'>
            <SliderText />
          </div>
          <div className='homeSlider'>
            <Slider />
          </div>
        </div>
        <div className='homeDivider'>
          <Divider />
        </div>
        <div className='homeFeaturedProduct'>
          <FeaturedProduct />
        </div>
      </main>
    </div>
  );
}

export default Home;