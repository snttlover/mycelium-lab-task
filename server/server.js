const dotenv = require("dotenv");
dotenv.config();
const {} = require('./db');

const port = process.env.PORT;

const app = require("./app");

const server = app.listen(port, function () {
  console.log(`Server running at http://localhost:${port}`);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
