const fs = require('fs');
const http = require('http');

fs.mkdir('shubham', (err) => {
    console.log('Directory Created');
});

fs.writeFile('./shubham/biodata.txt',"my name is Shubham",(err) =>{
    console.log('File Created');
});

fs.appendFile('./shubham/biodata.txt',". Call me Chotu.", (err)=> {
    console.log("data appended");
});


const file = fs.readFileSync("./shubham/biodata.txt","utf-8");
console.log(file);

const server = http.createServer((req,res) => {
    res.end(file);
})

server.listen(3000, ()=> {
    console.log("Server started");
})