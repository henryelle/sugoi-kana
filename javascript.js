/* https://www.w3schools.com/howto/howto_html_include.asp */
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}

function getChoice() {
  var choice = "";
  var vowels = document.getElementById("vowels").checked;
  var k = document.getElementById("k").checked;

  if(vowels){
    choice += " vowels ";
  }
  if(k){
    choice += " k ";
  }

  if(choice.includes(" vowels ")){
    alert("showing only vowels");
  }
  if(choice.includes(" k ")){
    alert("showing only k");
  }
}

function checkAnswer(choice) {
  //hard-coding like a boss 8)
  //setting user answer values

    if(choice == "vowel") {
        var answera = document.getElementById("a-answer").value;
        var answeri = document.getElementById("i-answer").value;
        var answeru = document.getElementById("u-answer").value;
        var answere = document.getElementById("e-answer").value;
        var answero = document.getElementById("o-answer").value;

        //setting the input blank itself
        var ablank = document.getElementById("a-answer");
        var iblank = document.getElementById("i-answer");
        var ublank = document.getElementById("u-answer");
        var eblank = document.getElementById("e-answer");
        var oblank = document.getElementById("o-answer");

        answera.toLowerCase() == "a" ? ablank.style.backgroundColor = "#cffcc5" : "";
        answeri.toLowerCase() == "i" ? iblank.style.backgroundColor = "#cffcc5" : "";
        answeru.toLowerCase() == "u" ? ublank.style.backgroundColor = "#cffcc5" : "";
        answere.toLowerCase() == "e" ? eblank.style.backgroundColor = "#cffcc5" : "";
        answero.toLowerCase() == "o" ? oblank.style.backgroundColor = "#cffcc5" : "";
      }

    if(choice == "k") {
        var answerka = document.getElementById("ka-answer").value;
        var answerki = document.getElementById("ki-answer").value;
        var answerku = document.getElementById("ku-answer").value;
        var answerke = document.getElementById("ke-answer").value;
        var answerko = document.getElementById("ko-answer").value;

        //setting the input blank itself
        var kablank = document.getElementById("ka-answer");
        var kiblank = document.getElementById("ki-answer");
        var kublank = document.getElementById("ku-answer");
        var keblank = document.getElementById("ke-answer");
        var koblank = document.getElementById("ko-answer");

        answerka.toLowerCase() == "ka" ? kablank.style.backgroundColor = "#cffcc5" : "";
        answerki.toLowerCase() == "ki" ? kiblank.style.backgroundColor = "#cffcc5" : "";
        answerku.toLowerCase() == "ku" ? kublank.style.backgroundColor = "#cffcc5" : "";
        answerke.toLowerCase() == "ke" ? keblank.style.backgroundColor = "#cffcc5" : "";
        answerko.toLowerCase() == "ko" ? koblank.style.backgroundColor = "#cffcc5" : "";
      }
    
    if(choice == "s") {
        var answersa = document.getElementById("sa-answer").value;
        var answershi = document.getElementById("shi-answer").value;
        var answersu = document.getElementById("su-answer").value;
        var answerse = document.getElementById("se-answer").value;
        var answerso = document.getElementById("so-answer").value;

        //setting the input blank itself
        var sablank = document.getElementById("sa-answer");
        var shiblank = document.getElementById("shi-answer");
        var sublank = document.getElementById("su-answer");
        var seblank = document.getElementById("se-answer");
        var soblank = document.getElementById("so-answer");

        answersa.toLowerCase() == "sa" ? sablank.style.backgroundColor = "#cffcc5" : "";
        answershi.toLowerCase() == "shi" ? shiblank.style.backgroundColor = "#cffcc5" : "";
        answersu.toLowerCase() == "su" ? sublank.style.backgroundColor = "#cffcc5" : "";
        answerse.toLowerCase() == "se" ? seblank.style.backgroundColor = "#cffcc5" : "";
        answerso.toLowerCase() == "so" ? soblank.style.backgroundColor = "#cffcc5" : "";
      }
    
    if(choice == "t") {
        var answerta = document.getElementById("ta-answer").value;
        var answerchi = document.getElementById("chi-answer").value;
        var answertsu = document.getElementById("tsu-answer").value;
        var answerte = document.getElementById("te-answer").value;
        var answerto = document.getElementById("to-answer").value;

        //setting the input blank itself
        var tablank = document.getElementById("ta-answer");
        var chiblank = document.getElementById("chi-answer");
        var tsublank = document.getElementById("tsu-answer");
        var teblank = document.getElementById("te-answer");
        var toblank = document.getElementById("to-answer");

        answerta.toLowerCase() == "ta" ? tablank.style.backgroundColor = "#cffcc5" : "";
        answerchi.toLowerCase() == "chi" ? chiblank.style.backgroundColor = "#cffcc5" : "";
        answertsu.toLowerCase() == "tsu" ? tsublank.style.backgroundColor = "#cffcc5" : "";
        answerte.toLowerCase() == "te" ? teblank.style.backgroundColor = "#cffcc5" : "";
        answerto.toLowerCase() == "to" ? toblank.style.backgroundColor = "#cffcc5" : "";
      }
    
    if(choice == "n") {
        var answerna = document.getElementById("na-answer").value;
        var answerni = document.getElementById("ni-answer").value;
        var answernu = document.getElementById("nu-answer").value;
        var answerne = document.getElementById("ne-answer").value;
        var answerno = document.getElementById("no-answer").value;

        //setting the input blank itself
        var nablank = document.getElementById("na-answer");
        var niblank = document.getElementById("ni-answer");
        var nublank = document.getElementById("nu-answer");
        var neblank = document.getElementById("ne-answer");
        var noblank = document.getElementById("no-answer");

        answerna.toLowerCase() == "na" ? nablank.style.backgroundColor = "#cffcc5" : "";
        answerni.toLowerCase() == "ni" ? niblank.style.backgroundColor = "#cffcc5" : "";
        answernu.toLowerCase() == "nu" ? nublank.style.backgroundColor = "#cffcc5" : "";
        answerne.toLowerCase() == "ne" ? neblank.style.backgroundColor = "#cffcc5" : "";
        answerno.toLowerCase() == "no" ? noblank.style.backgroundColor = "#cffcc5" : "";
      }

    if(choice == "h") {
        var answerha = document.getElementById("ha-answer").value;
        var answerhi = document.getElementById("hi-answer").value;
        var answerhu = document.getElementById("hu-answer").value;
        var answerhe = document.getElementById("he-answer").value;
        var answerho = document.getElementById("ho-answer").value;

        //setting the input blank itself
        var hablank = document.getElementById("ha-answer");
        var hiblank = document.getElementById("hi-answer");
        var hublank = document.getElementById("hu-answer");
        var heblank = document.getElementById("he-answer");
        var hoblank = document.getElementById("ho-answer");

        answerha.toLowerCase() == "ha" ? hablank.style.backgroundColor = "#cffcc5" : "";
        answerhi.toLowerCase() == "hi" ? hiblank.style.backgroundColor = "#cffcc5" : "";
        answerhu.toLowerCase() == "hu" || answerhu.toLowerCase() == "fu" ? hublank.style.backgroundColor = "#cffcc5" : "";
        answerhe.toLowerCase() == "he" ? heblank.style.backgroundColor = "#cffcc5" : "";
        answerho.toLowerCase() == "ho" ? hoblank.style.backgroundColor = "#cffcc5" : "";
      }
    
    if(choice == "m") {
        var answerma = document.getElementById("ma-answer").value;
        var answermi = document.getElementById("mi-answer").value;
        var answermu = document.getElementById("mu-answer").value;
        var answerme = document.getElementById("me-answer").value;
        var answermo = document.getElementById("mo-answer").value;

        //setting the input blank itself
        var mablank = document.getElementById("ma-answer");
        var miblank = document.getElementById("mi-answer");
        var mublank = document.getElementById("mu-answer");
        var meblank = document.getElementById("me-answer");
        var moblank = document.getElementById("mo-answer");

        answerma.toLowerCase() == "ma" ? mablank.style.backgroundColor = "#cffcc5" : "";
        answermi.toLowerCase() == "mi" ? miblank.style.backgroundColor = "#cffcc5" : "";
        answermu.toLowerCase() == "mu" ? mublank.style.backgroundColor = "#cffcc5" : "";
        answerme.toLowerCase() == "me" ? meblank.style.backgroundColor = "#cffcc5" : "";
        answermo.toLowerCase() == "mo" ? moblank.style.backgroundColor = "#cffcc5" : "";
    }
    
    if(choice == "y") {
        var answerya = document.getElementById("ya-answer").value;
        var answeryu = document.getElementById("yu-answer").value;
        var answeryo = document.getElementById("yo-answer").value;

        //setting the input blank itself
        var yablank = document.getElementById("ya-answer");
        var yublank = document.getElementById("yu-answer");
        var yoblank = document.getElementById("yo-answer");

        answerya.toLowerCase() == "ya" ? yablank.style.backgroundColor = "#cffcc5" : "";
        answeryu.toLowerCase() == "yu" ? yublank.style.backgroundColor = "#cffcc5" : "";
        answeryo.toLowerCase() == "yo" ? yoblank.style.backgroundColor = "#cffcc5" : "";
      }
    
    if(choice == "r") {
        var answerra = document.getElementById("ra-answer").value;
        var answerri = document.getElementById("ri-answer").value;
        var answerru = document.getElementById("ru-answer").value;
        var answerre = document.getElementById("re-answer").value;
        var answerro = document.getElementById("ro-answer").value;

        //setting the input blank itself
        var rablank = document.getElementById("ra-answer");
        var riblank = document.getElementById("ri-answer");
        var rublank = document.getElementById("ru-answer");
        var reblank = document.getElementById("re-answer");
        var roblank = document.getElementById("ro-answer");

        answerra.toLowerCase() == "ra" ? rablank.style.backgroundColor = "#cffcc5" : "";
        answerri.toLowerCase() == "ri" ? riblank.style.backgroundColor = "#cffcc5" : "";
        answerru.toLowerCase() == "ru" ? rublank.style.backgroundColor = "#cffcc5" : "";
        answerre.toLowerCase() == "re" ? reblank.style.backgroundColor = "#cffcc5" : "";
        answerro.toLowerCase() == "ro" ? roblank.style.backgroundColor = "#cffcc5" : "";
      }
    
    if(choice == "w") {
        var answerwa = document.getElementById("wa-answer").value;
        var answerwo = document.getElementById("wo-answer").value;

        //setting the input blank itself
        var wablank = document.getElementById("wa-answer");
        var woblank = document.getElementById("wo-answer");

        answerwa.toLowerCase() == "wa" ? wablank.style.backgroundColor = "#cffcc5" : "";
        answerwo.toLowerCase() == "wo" ? woblank.style.backgroundColor = "#cffcc5" : "";
      }
    
    if(choice == "nn") {
        var answernn = document.getElementById("nn-answer").value;

        //setting the input blank itself
        var nnblank = document.getElementById("nn-answer");

        answernn.toLowerCase() == "n" ? nnblank.style.backgroundColor = "#cffcc5" : "";
      }
}


//   if(answeru.toLowerCase() == "u"){
//     ublank.style.backgroundColor = "#cffcc5";
//   }
//   // if(answeru.toLowerCase() != "u"){
//   //   ublank.style.backgroundColor = "red";
//   // }
//
//   if(answere.toLowerCase() == "e"){
//     eblank.style.backgroundColor = "#cffcc5";
//   }
//   // if(answere.toLowerCase() != "e"){
//   //   eblank.style.backgroundColor = "red";
//   // }
//
//   if(answero.toLowerCase() == "o"){
//     oblank.style.backgroundColor = "#cffcc5";
//   }
//   // if(answero.toLowerCase() != "o"){
//   //   oblank.style.backgroundColor = "red";
//   // }
//
// }

//https://stackoverflow.com/questions/57907979/javascript-shuffle-table-rows

function sortTable() {
  //get the parent table for convenience
  let table = document.getElementById("hiragana-table");

  //1. get all rows
  let rowsCollection = table.querySelectorAll("tr");

  //2. convert to array
  let rows = Array.from(rowsCollection)
    //.slice(n + 1); //skip the header row

  //3. shuffle
//  clearFields();

  shuffleArray(rows);

  //4. add back to the DOM
  for (const row of rows) {
    table.appendChild(row);
  }

}


/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 * from: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array/12646864#12646864
 */
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

//function clearFields() {
//    document.getElementById("kana-form").reset();
//    var inputs = document.getElementsByTagName("input");
//    console.dir(inputs);
//    console.dir(inputs.item(0));
//    var i;
//    for(i = 0; i <= inputs.length; i++){
//        inputs.item(i).style.backgroundColor = "white";
//    }
//}
