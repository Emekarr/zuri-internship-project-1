const http = require("http")

const server = http.createServer((req, res) => {

    res.write("done")
    res.end()
})

server.listen(5000)
