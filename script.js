var http = require('http');
const fs=require('fs');
const path=require('path');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  let url=req.url;
  if(url==='/'){
    fs.readFile(path.join(__dirname,'index.html'),function(err,data){
        if(err)
         throw err;
         res.render(data);
       });
  }
  else if(url==='/about'){
    fs.readFile(path.join(__dirname,'about.html'),function(err,data){
        if(err)
         throw err;
         res.render(data);
       });
  }
  else if(url==='/contact'){
    fs.readFile(path.join(__dirname,'contact.html'),function(err,data){
        if(err)
         throw err;
         res.render(data);
       });
  }
  else if(url==='/service'){
    fs.readFile(path.join(__dirname,'service.html'),function(err,data){
        if(err)
         throw err;
         res.render(data);
       });
  }

}).listen(8170);
