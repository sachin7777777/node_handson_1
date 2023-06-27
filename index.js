const http=require('http')
const server=http.createServer(function(req,res){
    res.write("<h1>HEY IA  STARTING AND CREATING THE SERVER</h1>")
    res.write("i am normal text")
    res.write(JSON.stringify({Name:"sachin"}))
    res.end("<h3>server is ending</h3>")
})
server.listen(3000);