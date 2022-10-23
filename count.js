var Adder = (a,b)=>{ 
    return `The some of A and B is equal to : ${a+b}`
 }
var pi = 3.142
var items = (arr)=>{
    return ` the lenght of my array is : ${arr.length}`
}
// module.exports.Adder = Adder;
// module.exports.p = pi;

module.exports = {
    newAdd:Adder,
    newP:pi,
    items:items
}