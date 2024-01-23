import styles from './Display.module.css';

const Display = ({ displayCalValue }) => {
    return <input type="text" className={styles.display} value={displayCalValue} readOnly/>
};

export default Display;