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


/*problem4 */

function  validProposal( person1 , person2 ) {
    // You have to write your code here
    const object = { }
    
    const ageDef = Math.abs(person1.age - person2.age)
//console.log (ageDef )
if (typeof(person1) !== typeof(object) && typeof(person2) !== typeof(object)){
 return "invallid"
}
    else if (person1.gender !== person2.gender && ageDef <= 7 ){
    return true ;
   }
   
   return false;
   
//console.log (typeof(person1.gender))
}

console.log ( validProposal({ name: "toya", gender: "female", age: 24 },
    { name: "bjoy", gender: "male", age: 32 }
    
    ))



 