// take information from google serch engin
// var http = require("http")
// var url = require('url')
// http.createServer((req,res)=>{
//     res.writeHead(200,{'content-type':'text/html'})
//     // res.write(req.url)
//     // res.end()
//     var q = url.parse(req.url , true).query;
//     var text = q.year + " " + q.month + " " + q.day;
//     res.end("<center><h1>"+text+"</h1></center>")
// }).listen(7071,()=>{
//     console.log("server is runing ...")
// })


              // use file system in nodeJs 
// var fs = require('fs')
//===========sync=========================
// var Read = fs.readFileSync('readme.txt','utf-8')
// console.log(Read)

//===========async=========================
// fs.readFile('readme.txt','utf-8',(err,data)=>{
//     if(err) throw err;
//     console.log(data)
// })
// console.log("welocme ")

//===========sync=========================
// to create a new file in nodeJs
// fs.writeFileSync('Write.txt','this is simple way')
// fs.writeFileSync('Write.txt',Read)

//==================async==================
// fs.writeFile('Write.txt','welcome here to add this file',(err,data)=>{
//     if(err) throw err;
//     console.log("file added")
// })
// console.log("you want to make a file ....")

// ======delete file=======
// fs.unlinkSync('Write.txt')

// =====make folder sync========
// fs.mkdirSync('./Pic')

// =====make folder Async========
// fs.mkdir('Items',()=>{
//     console.log("file added")
// })

// fs.mkdir('Items',()=>{
//         var data = fs.readFileSync('readme.txt','utf-8')
//         fs.writeFileSync('./Items/Write.txt',data)
//         console.log("file added in folder with data")
//     }) 
// ===========delete a empty folder=================
// fs.rmdir('new') 

//============remove folder which have file===============
// fs.unlink('./Items/Write.txt',()=>{
//     fs.rmdirSync('./Items')
// })

// ==========add new data and show all data in console============
// var data = fs.appendFile('readme.txt',' im append it data ',(err)=>{
//     if(err) throw err;
//     console.log("data appended successfuly")
// })
// var data = fs.readFileSync("readme.txt",'utf-8')
// console.log(data)

//==========rename a file=============================
// fs.renameSync('readme.txt','my.txt')
// fs.rename('my.txt','readme.txt',(err)=>{
//     if(err) throw err
//     console.log('File rename it')
// })

// var http = require('http')
// http.createServer((req,res)=>{
//     // res.writeHead(200,{'content-type':'text/plain'})
//     res.writeHead(200,{'content-type':'text/html'})
//     res.write("<h1>hello</h1>")
//     res.end()
// }).listen(2020,()=>{
//     console.log("server is running...")
// })

var fs = require('fs')
var http = require('http')
var myReadStream = fs.createReadStream(__dirname+'/massage.txt','utf-8');
myReadStream.on('data',function(chunk){
        console.log("new chunck recieved")
        console.log(chunk)
})
