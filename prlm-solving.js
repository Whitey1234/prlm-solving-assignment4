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
   }
 
  if (num[0] == contacts[0] && num[1] == contacts[1] && degit.length == contacts.length){
    return true

 
}
else {
    return false;
}
}
 //console.log (validContact("01234 567899"))



 /*problem 3 */
function  willSuccess( marks ) {
 let passResult = [];
 let failResult = [];

if (Array.isArray(passResult) !== Array.isArray(marks) ){
    return "invalid"
}

     for ( let mark of marks ){
        //console.log (mark)
        if ( mark >= 50){
            passResult.push(mark)
        }
        else{
        
        
        failResult.push(mark)



     }


}
//console.log (Array.isArray(passResult),failResult)
if (passResult.length > failResult.length ){
    return true;
}
else{
    return false;
}

}

//console.log (willSuccess([48, 48, 50, 50, 100]));


 