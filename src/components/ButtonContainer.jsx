import styles from './Button.module.css';

const ButtonContainer = ({ onButtonClick }) => {

    const buttonName = ["C", "+", "%", "/", "7", "8", "9", "X", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "="];

    return <div className={styles.buttonContainer}>
        {buttonName.map((btn) => <button key={btn} className={`${styles.button} ${btn === "=" ? "equals" : ""} `} onClick={onButtonClick}>{btn}</button>)}
    </div>
}

export default ButtonContainer;