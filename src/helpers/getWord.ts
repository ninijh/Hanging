const words: string [] = [
'ELEFANTE',
'AVENTURA',
'BIBLIOTECA',
'PARAGUAS',
'CHOCOLATE',
'MARIPOSA',
'ESMERALDA',
'CAMALEÓN',
'EQUILIBRIO',
'FANTÁSTICO',
'RENACIMIENTO',
'PANTALLA',
'EXPLORADOR',
'DELICIOSO',
'ARQUITECTO',
'GALAXIA',
'CRISTAL',
'VELOCIDAD',
'ALQUIMISTA',
'RESPLANDECER',
];


export function getWord() {

const randomIndex =  Math.floor (Math.random () * words.length);
    return words [randomIndex] ;
}