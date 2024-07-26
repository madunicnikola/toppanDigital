import styles from './SliderText.module.css';

const SliderText = () => {
    return (
        <div className={styles.slider}>
            <div className={styles.container}>
                <div className={styles.column}>
                    <div className={styles.row}>
                        <img src="/icons/droneIconB2.png" alt='Drone' className={styles.icon} />
                        <div className={styles.text}>
                            <h2 className={styles.header}>Camera</h2>
                            <p className={styles.paragraph}>20 MP 1" CMOS Sensor</p>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <img src="/icons/droneIconB.png" alt='Drone' className={styles.icon} />
                        <div className={styles.text}>
                            <h2 className={styles.header}>Flight Time</h2>
                            <p className={styles.paragraph}>31 minutes (72 kph)</p>
                        </div>
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.row}>
                        <img src="/icons/cameraIconB.png" alt='Camera' className={styles.icon} />
                        <div className={styles.text}>
                            <h2 className={styles.header}>Gimbal</h2>
                            <p className={styles.paragraph}>3-Axis</p>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <img src="/icons/videoIconB.png" alt='Video' className={styles.icon} />
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
                        <button className={styles.shopButton}>Shop Now</button>
                    </div>
                    <div className={styles.checkout}>
                        <h3 className={styles.checkoutHeader}>Qty</h3>
                        <input defaultValue={1} className={styles.checkoutInput}></input>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SliderText;
