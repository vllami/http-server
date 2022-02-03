const HTTP = require('http')
const FS = require('fs')

const onRequest = (request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"})
    FS.readFile("index.html", null, (error, data) => {
        if (error) {
            response.writeHead(404)
            response.write("File not found!")
        } else {
            response.write(data)
        }
        response.end()
    })
}

const dataJSON = {
    statusCode: 200,
    name: "Villa Mukti Indriyanto",
    address: "Bekasi",
    phoneNumber: 628123456789
}

const onRequest2 = (request, response) => {
    response.writeHead(200, {"Content-Type": "application.json"})
    response.end(JSON.stringify(dataJSON))
}

HTTP.createServer(onRequest).listen(8080)
HTTP.createServer(onRequest2).listen(1023)