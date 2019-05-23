const server = require("./api/server");
const PORT = process.env.PORT;

server.get("/", (req, res) => {
    console.log("Here are the process env vars: ", process.env);
    res.send("Server is running");
});

server.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
