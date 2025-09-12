const http = require("http");

// Create the server
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, world!");
});

// Start listening on port 3000
server.listen(3000, "localhost", () => {
  console.log("Server is connected at http://localhost:3000");
});

// Handle errors
server.on("error", (err) => {
  console.error("Server error:", err);
});
