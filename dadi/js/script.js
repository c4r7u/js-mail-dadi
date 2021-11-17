const numero1 = Math.floor(Math.random() * 6) + 1;

console.log('Primo numero uscito = '+numero1)           

const numero2 = Math.floor(Math.random() * 6) + 1;

console.log('Secondo numero uscito = '+numero2)    


if (numero1 < numero2) {                                                                                              
    alert('Hai perso :(');                           
} else if (numero1 == numero2) {                           
    alert('Pari.');                                        
} else {                                                        
    alert('Hai vinto!!');                                  
}