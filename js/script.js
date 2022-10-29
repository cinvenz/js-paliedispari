const userWord =(prompt('inserisci una parola'));
var userWordInvert = invertWord(userWord);

if(userWord == userWordInvert){
    console.log('la parola è palindroma');
  } else {
    console.log('la parola non è palindroma');
  }
  
function invertWord(str){
  var strInvert = str.split('').reverse().join('');  
  return strInvert;
}