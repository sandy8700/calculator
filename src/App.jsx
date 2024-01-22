import styles from './App.module.css'
import ButtonContainer from './components/ButtonContainer'
import Display from './components/Display'
import './App.css';
import { useState } from 'react';

function App() {

  const [calVal, setCalVal] = useState("");

  const onButtonClick = (event) => { console.log(event)}
  return (
    <div className={styles.calculator}>
      <Display displayCalVal={calVal}></Display>
      <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
    </div>
  )
}

export default App
