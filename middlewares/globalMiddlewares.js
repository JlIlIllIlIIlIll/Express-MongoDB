const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const globalMiddlewares = express();

// Middlewares
globalMiddlewares.use(helmet());
globalMiddlewares.use(cors());
globalMiddlewares.use(morgan("dev"));
globalMiddlewares.use(express.json());

module.exports = globalMiddlewares;
