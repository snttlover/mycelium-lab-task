const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

const tokensRouter = require('./routes/tokens');

const allowedOrigins = [
  'http://localhost:3000',
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
          "The CORS policy for this site does not " +
          "allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);
app.use(express.json());

app.use('/tokens', tokensRouter);

module.exports = app;