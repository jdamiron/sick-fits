require("dotenv").config({ path: "variables.env" });
const createServer = require("./createServer");
const db = require("./db");

const server = createServer();

//User express middleware to handle cookies (JWT)
//User express middleware to populate current user

server.start(
  {
    cors: {
      credentials: true,
      prigin: process.env.FRONTEND_URL,
    },
  },
  (deets) => {
    console.log(
      `Server is now running on port http://localhost: ${deets.port}`
    );
  }
);
