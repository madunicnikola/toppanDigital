import React, { useState } from 'react';
import ProductList from '../products/ProductList';
import styles from './SliderText.module.css';

const SliderText: React.FC = () => {
    const [showProductList, setShowProductList] = useState(false);

    const handleShopNowClick = () => {
        setShowProductList(true);
    };

    const handleCloseProductList = () => {
        setShowProductList(false);
    };

    return (
        <div className={styles.slider}>
            <div className={styles.verticalFooter}>
                <img src='/icons/footer/googleIconB.png' className={styles.footerIcons} alt="Google Icon"/>
                <img src='/icons/footer/twitterIconB.png' className={styles.footerIcons} alt="Twitter Icon"/>
                <img src='/icons/footer/facebookIconB.png' className={styles.footerIcons} alt="Facebook Icon"/>
                <p><span className={styles.followUs}>Follow Us</span></p>
                <div className={styles.verticalLine}></div>
                <p className={styles.footerNumber}>01</p>
            </div>
            <div className={styles.sliderContent}>
                <div className={styles.sliderTitleContainer}>
                    <h2><span className={styles.sliderTitleHeaderFirst}>Mavic 2</span><span className={styles.sliderTitleHeaderSecond}> Pro</span></h2>
                    <p className={styles.sliderTitleDesc}>The Mavic 2 offers iconic Hasselblad image quality on the Pro and a high-performance zoom lens on the Zoom.</p>
                </div>
                <div className={styles.container}>
                    <div className={styles.column}>
                        <div className={styles.row}>
                            <img src="/icons/slider/droneIconB2.png" alt='Drone' className={styles.icon} />
                            <div className={styles.text}>
                                <h2 className={styles.header}>Camera</h2>
                                <p className={styles.paragraph}>20 MP 1" CMOS Sensor</p>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <img src="/icons/slider/droneIconB.png" alt='Drone' className={styles.icon} />
                            <div className={styles.text}>
                                <h2 className={styles.header}>Flight Time</h2>
                                <p className={styles.paragraph}>31 minutes (72 kph)</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.column}>
                        <div className={styles.row}>
                            <img src="/icons/slider/cameraIconB.png" alt='Camera' className={styles.icon} />
                            <div className={styles.text}>
                                <h2 className={styles.header}>Gimbal</h2>
                                <p className={styles.paragraph}>3-Axis</p>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <img src="/icons/slider/videoIconB.png" alt='Video' className={styles.icon} />
                            <div className={styles.text}>
                                <h2 className={styles.header}>Video</h2>
                                <p className={styles.paragraph}>4K: 3840×2160/30p</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.shopNow}>
                    <div>
                        <h3 className={styles.priceText}>Price</h3>
                        <h1 className={styles.priceNum}>$1,499</h1>
                    </div>
                    <div>
                        <div className={styles.checkout}>
                            <button className={styles.shopButton} onClick={handleShopNowClick}>Shop Now</button>
                        </div>
                        <div className={styles.checkout}>
                            <h3 className={styles.checkoutHeader}>Qty</h3>
                            <input defaultValue={1} className={styles.checkoutInput} />
                        </div>
                    </div>
                </div>
                {showProductList && <ProductList onClose={handleCloseProductList} />}
            </div>
            {showProductList && <div className={styles.blurBackground}></div>}
        </div>
    );
};

export default SliderText;
