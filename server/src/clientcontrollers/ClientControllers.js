const fs = require('fs')
const path = require('path')
const config = require('../configure/config')

module.exports=(req, res)=>{
    var filePath
    var basePath = config.RootPath
    basePath = path.normalize(basePath)
    if(req.url==='/'){
        filePath =  basePath+ 'index.html'
    } else{
        filePath = basePath + req.url//url.parse(req.url).pathname;
    }

    fs.exists(filePath,function(err){
        if(!err){
            send404(res)
        }else{
            var normalizePath = path.normalize(filePath)
            res.sendFile(normalizePath)
            /*
            var ext = path.extname(filePath);
            ext = ext?ext.slice(1) : 'unknown';
            var contentType = MIME_TYPE[ext] || "text/plain";
            fs.readFile(filePath,function(err,data){
                if(err){
                    res.end("<h1>500</h1>服务器内部错误！");
                }else{
                    res.writeHead(200,{'content-type':contentType});
                    res.end(data.toString());
                }
            });//fs.readfile
            */
        }
    })//path.exists
    function send404(res){
        res.end('<h1>404</h1><p>file not found</p>')
    }
}