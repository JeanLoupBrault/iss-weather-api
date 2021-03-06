"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
// const { MongoClient } = require('mongodb');

const PORT = 4000;

const getIssPosition = async (req, res) => {

  await req.get('http://api.open-notify.org/iss-now.json')
  res.status(200).render(getIssPosition)
}


express()
  .use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.static("./server/assets"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))


  .get('/issposition', getIssPosition)


  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
