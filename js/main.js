// Módosítjuk a h1 elem tartalmát.
document.querySelector( "h1" ).innerHTML = "Hello ITFactory";

// Kép forrásának módosítása.
function changeUrl() {
    document.querySelector( "img" ).src = "http://www.blogcdn.com/www.autoblog.com/media/2013/03/000-2014-porsche-911-gt3.jpg";
}

// Stílus módosítása.
function changeStyle() {
    document.querySelector( "img" ).style.width = "40px";
}

// Adatok ellenőrzése.
function validate() {
    
    //Az input mező és a hibaüzenet kiválasztása.
    var input = document.querySelector( ".input-validate" );
    var errorP = document.querySelector( ".no-validate" );
    
    //Az input mező értékéne a kiolvasása.
    var inputValue = input.value;
    
    //Az input mező értéke nagyobb legyen mint 5 és kissebb mint 21.
    if ( inputValue <6 || inputValue > 20 ) {
       console.log( "az érték nem megfelelő" );
        errorP.innerHTML = "az érték nem megfelelő";
    } else {
        errorP.innerHTML = "";
    }
    
}