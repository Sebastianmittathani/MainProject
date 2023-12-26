const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const PORT = 5000
const cors = require("cors")
const mysql = require("mysql2");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

app.listen(PORT, () => {
  console.log("Server is Running  in 5000");
});


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password:'', // Empty string for passwordless access
  database: 'db_sample',
});
connection.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log("Database Connected");
});

app.get("/Test", (req, res) => {
  res.send({
    message: "Hai",
  });
});

app.post("/addSubcategory", (req, res) => {
  const { subcategoryName } = req.body
  console.log(subcategoryName);
  res.send({
    message: subcategoryName,
  });
});

app.post("/addDistrict", (req, res) => {
  const { districtName } = req.body
  console.log(districtName);
  res.send({
    message: districtName,
  });
});

app.get("/calc", (req, res) => {

  num1 = req.body.num1
  num2 = req.body.num2
  result = num1 + num2
  res.send({
    message: "Hai",
    data: result
  });
});
app.get("/largest", (req, res) => {

  num1 = req.body.num1
  num2 = req.body.num2
  num3 = req.body.num3
  if (num1 > num2 && num1 > num3) {
    result = num1
  }
  else if (num2 > num1 && num2 > num3) {
    result = num2
  }
  else {
    result = num3
  }

  res.send({
    message: "Hai",
    data: result
  });
});

app.get("/prime", (req, res) => {
  num = req.body.num
  for (i = 2; i <= num; i++) {
    if (num % i == 0) {
      var a = "prime"
    }
    else {
      var a = "not a prime"
    }
  }
  res.send({

    data: a
  });
});