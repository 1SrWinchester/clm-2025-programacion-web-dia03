

////////////////////////////////////////
/////////// Zona ejercicio 1 ///////////
////////////////////////////////////////


function ejercicio01(email){
    console.log(email);
    const validarEmails = [
        "yunior.developer@hotmail.com",
        "miguel@mrbug.es",
        "imanol@mercadona.com"];
    return validarEmails.includes(email);
}



////////////////////////////////////////
//////// Final zona ejercicio 1 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 2 ///////////
////////////////////////////////////////

function ejercicio02(email){
    console.log(email);
    let validar = email.includes('m') ? "si" : "no";
    let mensaje =" El correo " + email + " tiene " + email.length + " caracteres y en mayúsculas se quedaría así " + email.toUpperCase() + ". Además "+ validar + " contine " +  "letras M";
    return mensaje;  
}

////////////////////////////////////////
//////// Final zona ejercicio 2 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 3 ///////////
////////////////////////////////////////

//string.includes(string, indice)
function ejercicio03(email){
    function ejercicio03(email) {
        /* Capturamos la posición donde aparece el arroba para
        calcular la posición del @.
        con eso ya sabemos cuántas letras existen hasta llegar a la arroba.
        
        Como lo que queremos es capturar el string a partir del arroba,
        sumamos 1. */
        let indexArroba = email.indexOf("@");
        ///////////////////////////////////////////////////////
        // Para capturar el dominio sin la arroba
        let arrayEmail = email.split("");
        let dominio = [];
        
        for(let i = indexArroba + 1; i < arrayEmail.length ; i++){
            dominio.push(arrayEmail[i]);
        }
        dominio = dominio.join("");
        //////////////////////////////////////////////////////
        // Para contar los números que existen
        let numeros = 0;
        
        for (let i = 0; i < arrayEmail.length; i++) {
            // recuerda que el array se hizo en el paso anterior
            if(arrayEmail[i] >= "0" && arrayEmail[i] <= "9"){
                numeros++;
            }
        }
    
        let mostrarNo = "";
        let mostrarCantidad = "";
        let mostrarS = "";
       
        if (numeros < 1) {
            mostrarNo = "NO";
            mostrarCantidad = "ningún";
        } else {
            mostrarCantidad = numeros;
            if (numeros > 1) {
                mostrarS = "s";
            }
        }
    /////////////////////////////////////////////////////
        let mensaje = "El correo " + email 
                    + " pertenece al dominio " + dominio
                    + " y tiene " + indexArroba + " caracteres sin contar el dominio ni el @." 
                    + " Además, el correo " + mostrarNo 
                    + " contiene " + mostrarCantidad + " número" + mostrarS;
        return mensaje;
    }
}



////////////////////////////////////////
//////// Final zona ejercicio 3 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 4 ///////////
////////////////////////////////////////


function ejercicio04(user){
    console.log(user);
}



////////////////////////////////////////
//////// Final zona ejercicio 4 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 5 ///////////
////////////////////////////////////////


function ejercicio05(user){
    console.log(user);
}



////////////////////////////////////////
//////// Final zona ejercicio 5 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 6 ///////////
////////////////////////////////////////


function ejercicio06(user){
    console.log(user);
}



////////////////////////////////////////
//////// Final zona ejercicio 6 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 7 ///////////
////////////////////////////////////////


function ejercicio07(users){
    console.log(users);
}



////////////////////////////////////////
//////// Final zona ejercicio 7 ////////
////////////////////////////////////////
