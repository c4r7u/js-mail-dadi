const Email1 = ['angelo@gmail.com','francesca@gmail.com','cosimo@gmail.com','fabio@gmail.com'];


const EmailU = prompt('La tua email:');


let emailFound = false;


for ( let i = 0; i < Email1.length; i++ ) {     
    const thisEmail = Email1[i];                
    
    if( thisEmail === EmailU ) {             
        emailFound = true;                      
    }
}


if(emailFound) {
    alert('Email accettata!');                 
} else {
    alert('Email non esistente.');   
}