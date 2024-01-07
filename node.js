  const http= require('http');


  const hostname='127.0.0.1';
  const port=80
  const fs=require('fs')  
  const filecontent=fs.readFileSync('HOME.html')  
  const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(filecontent)
  });
  server.listen(port,hostname,()=>{
   console.log(
    `server running at http://${hostname}:${port}/
    `);
  });