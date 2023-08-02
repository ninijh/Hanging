
import Image0 from '../assets/0.png';
import Image1 from '../assets/1.png';
import Image2 from '../assets/2.png';
import Image3 from '../assets/3.png';
import Image4 from '../assets/4.png';
import Image5 from '../assets/5.png';
import Image6 from '../assets/6.png';
import Image7 from '../assets/7.png';
import Image8 from '../assets/8.png';
import Image9 from '../assets/9.png';


const Images: string [] =  [
    Image0,
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,

];


interface props {
imagenNumber: number;
}




export function HangImage ( {imagenNumber} : props ) {

    if ( imagenNumber >= 9) {
        imagenNumber = 9;
    }


    return (
        <img 
        src= { Images[imagenNumber]} 
        alt="Hang Image"
        style={{width: 250}}
        />

    );
}