import styles from './Display.module.css';

const Display = ({ displayCalVal }) => {
    return <input type="text" className={styles.display} value={displayCalVal} />
};

export default Display;