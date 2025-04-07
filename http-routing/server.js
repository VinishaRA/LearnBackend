// Import required modules
const http = require('http');
const fs = require('fs');

// Define the port number
const port = 3000;

// Create an HTTP server
const server = http.createServer((req, res) => {

  // Set response header to serve HTML content
  res.setHeader("Content-Type", "text/html");
  // Routing logic
  switch (req.url) {
    case "/":
      path = "index.html";
      res.statusCode = 200;
      break;
    case "/abouts":
      // Used for Redirect "/abouts" to "/about" using 301 (Moved Permanently)
      res.writeHead(301, { "Location": "/about" });
      res.end();
      return;
    case "/about":
      path = "about.html";  // Serve the about page
      res.statusCode = 200; // Status 200 - OK
      break;
    default:
      path = "pageNotFound.html"; // Serve the 404 error page
      res.statusCode = 404;       // Status 404 - Not Found
      break;
  }

  // Read the requested file and send it as a response
  fs.readFile(path, (error, data) => {
    if (error) {
      res.statusCode = 404;  // If file is not found, set 404 status
      res.end("Page Not Found"); // Send plain text response
    } else {
      res.end(data); // Send the HTML file content as a response
    }
  });
});

// Start the server and listen on the defined port
server.listen(port, (err) => {
  if (err) {
    console.log("Something went wrong while starting the server.");
  } else {
    console.log(`Server is listening on port ${port}`);
  }
});