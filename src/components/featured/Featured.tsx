import styles from './Featured.module.css';

const FeaturedProduct = () => {

    return (
        <div className={styles.featuredMain}>
            <div className={styles.featuredText}>
                <h2>Mavic 2 Zoom</h2>
                <p>24-48mm Optical Zoom Camera with Ultimate Flexibility</p>
                <hr />
                <div className={styles.featuredSpecs}>
                    <ul className={styles.specsList}>
                        <li>20 MP 1" CMOS Sensor</li>
                        <li>Adjustable Aperture, f/2.8 - f/11</li>
                        <li>10-bit Dlog-M colour profile</li>
                        <li>10-bit HDR Video</li>
                    </ul>
                    <ul className={styles.specsList}>
                        <li>8 km 1080p Video Transmission</li>
                        <li>Omnidirectional Obstacle Sensing</li>
                        <li>31min flight time</li>
                        <li>Hyperlapse</li>
                    </ul>
                </div>
            </div>
            <div className={styles.featuredImage}>
                <img src='/images/slider/sliderImage1.png' alt='Drone'/>
            </div>
        </div>
    );
};

export default FeaturedProduct;