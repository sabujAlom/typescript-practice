function checkValue(value: string | number) {
   if(typeof value === "string"){
    return value.toUpperCase()
   }
   return value;
}
// console.log(checkValue("banglaDesh"))
// console.log(checkValue(230))




function processValue(value: string | number) {
   if (typeof value === "string"){
    return value.length
   }else if( typeof value === "number"){
    return value*2
   }

}
console.log(processValue("bangladesh"))
console.log(processValue(19))