// console.log("node satrted welcome")
// setTimeout(()=>{
//     console.log("hello")
// }, 1000);

// var time = 0
// var timer = setInterval(()=>{
//     time+=1;
//     console.log(time+ " time have past")
//     if(timer>6){
//         clearInterval(timer)
//     }
// },2000)

// const styHi =()=>{
//        const pa = ()=>{
//         console.log("Hello ");
//     }
//     pa()
// }
// styHi()

// const sayHi= (props)=>{
//     console.log("welcome here "+props)
// }
// function CallFunction(De){
//     De('Nawabi')
// }
// CallFunction(sayHi)

    var Count = require('./count');

    console.log(Count.newAdd(Count.newP,23))
    console.log(Count.newP)
    console.log(Count.items(['a','b','c','d']))

    var http = require('http')
    // create server
    http.createServer((req,res)=>{
        res.writeHead(200,{'Content-type':'text/html'})
        res.write('<h1>hey welcome are you fine</h1>')
        res.end()
    }).listen(7070,()=>{
        console.log("Server is Runing...")
    })
 