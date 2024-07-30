import styles from './Divider.module.css';

const Divider = () => {

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <img src='/icons/divider/antennaIconW.png' alt='Icon'/>
                <p>Up to 8 km 1080p</p>
                <p>Video Transmission</p>
            </div>
            <div className={styles.card}>
                <img src='/icons/divider/batteryIconW.png' alt='Icon'/>
                <p>Up to 31-min</p>
                <p>Flight Time</p>
            </div>
            <div className={styles.card}>
                <img src='/icons/divider/droneIconW.png' alt='Icon'/>
                <p>Omnidirectional</p>
                <p>Obstacke Sensing</p>
            </div>
            <div className={styles.card}>
                <img src='/icons/divider/hyperIconW.png' alt='Icon'/>
                <p>Hyperlapse</p>
                <p><br /></p>
            </div>
            <div className={styles.activeCard}>
                <img src='/icons/divider/radarIconB.png' alt='Icon'/>
                <p>ActiveTrack</p>
                <p>2.0</p>
            </div>
            <div className={styles.card}>
                <img src='/icons/divider/networkIconW.png' alt='Icon'/>
                <p>High</p>
                <p>Compatibility</p>
            </div>
        </div>
    );
};

export default Divider;