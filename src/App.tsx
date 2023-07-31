import { useEffect, useState } from "react";
import { HangImage } from "./components/HangImage";
import { letters } from './helpers/letters';
import { getWord } from "./helpers/getWord";

import './App.css';


function App() { 

const [word] = useState (getWord ());
const [hiddenWord, setHiddenword] = useState ("- ".repeat(word.length));
const [ attempts, setAttempts ] = useState (0);
const [lose, setLose] = useState (false);
const [ won, setWon] = useState (false);

//Determinar si la persona perdió
useEffect ( () => {
  if ( attempts >=9 ) {
    setLose (true);
  }

} , [attempts]) ;

// Determinar si la persona gano
useEffect (() => {
const currentHiddenWord = hiddenWord.split(' ').join (' ');
if ( currentHiddenWord === word) {
  setWon (true);
}

}, [hiddenWord, word] )


const checkLetter = ( letter: string) => {
  if (lose) return;
  if (won) return;

  if (!word.includes (letter)) {
    setAttempts ( Math.min(attempts + 1,9) );
    return
  }

const hiddenWordArray = hiddenWord.split (" ");

  for (let i=0; i < word.length; i++)
    if (word [i] === letter ) {
      hiddenWordArray [i] = letter
    }

    setHiddenword (hiddenWordArray.join (" "));

}



const newGame = () => {
  console.log('newGame');
}


return (
  <div className="App">
  
      { /* imagenes*/}
      <HangImage imagenNumber={ attempts } />

      { /* Palabra oculta*/}
      <h3> { hiddenWord } </h3>

      { /* Contador de intentos*/}
      <h3> Intentos: { attempts } </h3>
      {/* Mensaje si perdio*/}
      {
        (lose) 
        ? <h2> Perdió {word} </h2>
        : ''
      }
      {/* Mensaje si gano*/}
      {
        (won) 
        ? <h2> ¡Felicidades Ganaste! {word} </h2>
        : ''
      }

      { /* Botones de letras*/}
      {
        letters.map ( (letter) => (
          <button 
          onClick={ ( ) => checkLetter (letter)}
          key= {letter}> 
          {letter} 
          </button> 
        ) )
      }



      <br /><br />
      <button onClick={newGame}> Nuevo juego </button>
      




  
  </div>
);

}

export default App
