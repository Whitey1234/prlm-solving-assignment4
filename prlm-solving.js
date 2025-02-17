/*Problem1 */
function calculateVAT( price ) {
    const number = 1 ;
    if (typeof(number) !== typeof(price) ){

       return "invalid"
    }
    else {

        const amount = (price * 7.5)/ 100;
        return amount;
    }
}
 
//console.log (calculateVAT(1500));

    /*Problem2 */


function validContact( contacts ) {
    const degit = "01234567899"
    const num = [ "0","1"]
     //contacts.split ("")  
   //console.log (typeof(contacts))
 if ( typeof(degit) !== typeof(contacts)){
 return "invalid"
 }
   for ( let contact of contacts){
    if ( " " == contact){
return false
    }

 
  if (num[0] == contacts[0] && num[1] == contacts[1] && degit.length == contacts.length){
    return true

  }
return false;
}
}
 console.log (validContact(true))
 