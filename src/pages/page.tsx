import React from 'react';
import './styles.css';
import Header from '../components/header/Header';
import Slider from '../components/slider/Slider';
import SliderText from '../components/sliderText/SliderText';

const Home: React.FC = () => {

  return (
    <div className='home'>
      <header className='homeHeader'>
        <Header />
      </header>
      <main>
        <div className='homeMain'>
          <div className='homeSliderText'>
            <SliderText />
          </div>
          <div className='homeSlider'>
            <Slider />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;