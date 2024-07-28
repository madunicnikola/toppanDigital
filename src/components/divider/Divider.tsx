import styles from './Divider.module.css';

const Divider = () => {

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <img src='/icons/divider/antennaIconW.png'/>
                <p>Up to 8 km 1080p</p>
                <p>Video Transmission</p>
            </div>
            <div className={styles.card}>
            <img src='/icons/divider/batteryIconW.png'/>
                <p>Up to 31-min</p>
                <p>Flight Time</p>
            </div>
            <div className={styles.card}>
            <img src='/icons/divider/droneIconW.png'/>
                <p>Omnidirectional</p>
                <p>Obstacke Sensing</p>
            </div>
            <div className={styles.card}>
            <img src='/icons/divider/hyperIconW.png'/>
                <p>Hyperlapse</p>
                <p><br /></p>
            </div>
            <div className={styles.activeCard}>
            <img src='/icons/divider/radarIconB.png'/>
                <p>ActiveTrack</p>
                <p>2.0</p>
            </div>
            <div className={styles.card}>
            <img src='/icons/divider/networkIconW.png'/>
                <p>High</p>
                <p>Compatibility</p>
            </div>
        </div>
    );
};

export default Divider;