const fs = require('fs');
const http = require('http');
const url = require('url');

/////////////////////////////////////////////FILES

/* const hello = "hoello"
console.log(hello); */

//blocking, asynchronous way
/* const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(textIn);

const textOut = `this is what we know about the apple:  ${textIn}./nCreate on ${Date.now()}`; 
fs.writeFileSync('./txt/output.txt', textOut);
console.log('Flie written!⚠️ ');

//Non-blocking, asynchronous way
fs.readFile('./txt/start.txt', 'utf-8', (err,data1)=>{
    if(err) return console.log('ERROR!💀');

    fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err,data2)=>{
        console.log(data2);
        fs.readFile(`./txt/append.txt`, 'utf-8', (err,data3)=>{
            console.log(data3);

            fs.writeFile('./txt/final.txt', `${data2}/n${data3}`, 'utf-8', err=>{
                console.log('your file has been written 🥸 🤙');
            })
        });
    });
});
console.log('will read file');
 */
/////////////////////////////////////////////Server
const server = http.createServer((req, res)=>{
    console.log(req.url);

    const pathName = req.url;
    
    if(pathName === '/' || pathName === '/overview'){
        res.end('this is a overview! Bv')
    }else if(pathName === '/product'){
        res.end('this is a product! :v')
    }else {
        res.writeHead(404)
        res.end('this port not found! ❌')
    }

});

server.listen(8000, '127.0.0.1', ()=>{
    console.log('Listen to requests on port 8000');
})

