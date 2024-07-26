import React from 'react';
import styles from './Slider.module.css';

const Slider: React.FC = () => {

    const mainImage = '/images/slider/mainImage.png';
    const images = [
        '/images/slider/sliderImage1.png',
        '/images/slider/sliderImage2.png',
        '/images/slider/sliderImage1.png',
        '/images/slider/sliderImage2.png',
        '/images/slider/sliderImage1.png',
        '/images/slider/sliderImage2.png',
        '/images/slider/sliderImage1.png',
        '/images/slider/sliderImage2.png',
        '/images/slider/sliderImage1.png',        
    ];

    return (
        <div className={styles.slider}>
            <img src={mainImage} alt="Main" className={styles.mainImage} />
            <div className={styles.thumbnails}>
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt='Thumbnail'
                        className={styles.thumbnail}
                    />
                ))}
            </div>
        </div>
    );
};

export default Slider;