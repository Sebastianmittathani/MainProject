const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const PORT = 5000
const cors = require("cors")
const multer = require("multer")
const mysql = require("mysql2");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

app.listen(PORT, () => {
  console.log("Server is Running  in 5000");
});

const PATH = "./public/images";
const upload = multer({
  storage: multer.diskStorage({
    destination: PATH,
    filename: function (req, file, cb) {
      let origialname = file.originalname;
      let ext = origialname.split(".").pop();
      let filename = origialname.split(".").slice(0, -1).join(".");
      cb(null, filename + "." + ext);
    },
  }),
});

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password:'', // Empty string for passwordless access
  database: 'db_new',
  port:3306,
});
connection.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log("Database Connected");
});
// -------------------------------------------backend  starts---------------------------------------------------------
// app.get("/Test", (req, res) => {
//   res.send({
//     message: "Hai",
//   });
// });

// app.post("/addSubcategory", (req, res) => {
//   const { subcategoryName } = req.body
//   console.log(subcategoryName);
//   res.send({
//     message: subcategoryName,
//   });
// });

// app.post("/addDistrict", (req, res) => {
//   const { districtName } = req.body
//   console.log(districtName);
//   res.send({
//     message: districtName,
//   });
// });

// app.get("/calc", (req, res) => {

//   num1 = req.body.num1
//   num2 = req.body.num2
//   result = num1 + num2
//   res.send({
//     message: "Hai",
//     data: result
//   });
// });
// app.get("/largest", (req, res) => {

//   num1 = req.body.num1
//   num2 = req.body.num2
//   num3 = req.body.num3
//   if (num1 > num2 && num1 > num3) {
//     result = num1
//   }
//   else if (num2 > num1 && num2 > num3) {
//     result = num2
//   }
//   else {
//     result = num3
//   }

//   res.send({
//     message: "Hai",
//     data: result
//   });
// });

// app.get("/prime", (req, res) => {
//   num = req.body.num
//   for (i = 2; i <= num; i++) {
//     if (num % i == 0) {
//       var a = "prime"
//     }
//     else {
//       var a = "not a prime"
//     }
//   }
//   res.send({

//     data: a
//   });
// });





// app.post("/Subcategory", (req, res) => {

//   let qry4 =
//     "insert into tbl_subcategory (subcategory_name) values('" +
//     req.body.subcategoryName +
//     "')";
//     connection.query(qry4, (err, result) => {
//     if (err) {
//       console.log("Error");
//     } else {
//       res.send({
//         message: "Data Saved",
//       });
//     }
//   });
// });

//--------------------------------------------------------DISTRICT-----------------------------------------------------------//
app.post("/District", (req, res) => {
  const  { districtName } = req.body

  let qry =
    "insert into tbl_district (district_name) values('" +
    districtName +
    "')";
    connection.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data Saved",
      });
    }
  });
});

app.get("/District",(req, res) => {
  let qry ="select * from tbl_district";
  connection.query(qry,(err,result) => {
    if (err) {
      console.log("error");
    } else {
      res.send({
        district: result,
      });
    }
  });
});

app.delete("/District/:Id",(req, res) => {
  const Id = req.params.Id
  let qry ="delete from tbl_district where district_id = "+Id;
  connection.query(qry,(err,result) => {
    if (err) {
      console.log("error");
    } else {
      res.send({
        message: 'data deleted',
      });
    }
  });
});


app.get("/oneDistrict/:id", (req, res) => {
  // console.log('hi');
  const Id = req.params.id
  console.log(Id);
  let qry = "select * from tbl_district  where district_id = " +Id;
  console.log(qry);
  connection.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        district: result,
      });
    }
  });
});

app.patch("/District/:Id", (req, res) => {
  console.log(req);
  const id = req.params.Id
  const { districtName } = req.body
  console.log(req.body);
  let qry = "update tbl_district set district_name = '"+districtName+"' where district_id = "+id ;
  connection.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data updated",
      });
    }
  });
});



// ------------------------------------------------------place----------------------------------------------------------


app.post("/Place", (req, res) => {
  const  { place_name ,district_id} = req.body
  console.log(place_name,district_id);

  let qry =
    "insert into tbl_place (place_name,district_id) values('" +
    place_name + "' , '" + district_id + "')";


    connection.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data Saved",
      });
    }
  });
});

app.get("/Place",(req, res) => {
  let qry ="SELECT * FROM tbl_place INNER JOIN tbl_district ON tbl_place.district_id = tbl_district.district_id";
  connection.query(qry,(err,result) => {
    if (err) {
      console.log("error");
    } else {
      res.send({
        place: result,
      });
    }
  });
});

app.get("/Place/:id",(req, res) => {
  const id = req.params.id
  let qry ="SELECT * FROM tbl_place where district_id ="+id;
  connection.query(qry,(err,result) => {
    if (err) {
      console.log("error");
    } else {
      res.send({
        place: result,
      });
    }
  });
});

app.delete("/Place/:Id",(req, res) => {
  const Id = req.params.Id
  let qry ="delete from tbl_place where place_id = "+Id;
  connection.query(qry,(err,result) => {
    if (err) {
      console.log("error");
    } else {
      res.send({
        message: 'data deleted',
      });
    }
  });
});


app.get("/OnePlace/:id", (req, res) => {
  console.log(req);
  const Id = req.params.id
   console.log(Id);
  let qry = "select * from tbl_place  where place_id = " +Id;
  console.log(qry);
  connection.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        district: result,
      });
    }
  });
});

app.patch("/Place/:Id", (req, res) => {
  console.log(req);
  const id = req.params.Id
  const { placeName,district_id } = req.body
  console.log(req.body);
  let qry = "update tbl_place set place_name = '"+placeName+"', district_id ='"+district_id+"' where place_id = "+id ;
   console.log(qry);
  connection.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data updated",
      });
    }
  });
});

// app.get("/updateLoc/:id", (req, res) => {
//   const Id = req.params.id
//   console.log(Id);
//   let qry = "select * from tbl_location  where loc_id = " + Id;
//   db.query(qry, (err, result) => {
//     if (err) {
//       console.log("Error");
//     } else {
//       res.send({
//         locationupdate: result,
//       });
//     }
//   });
// });

// app.patch("/Location/:Id", (req, res) => {
//   const id = req.params.Id
//   const { loc_name,district_id } = req.body
//   let qry = "update tbl_Location set loc_name = '"+loc_name+"', district_id ='"+district_id+"' where loc_id = "+id ;
//   console.log(qry);
//   db.query(qry, (err, result) => {
//     if (err) {
//       console.log("Error");
//     } else {
//       res.send({
//         message: "Data updated",
//       });
//     }
//   });
// });


// -----------SHOP-------

app.post("/ShopRegister",
upload.fields([
  { name: "shop_logo", maxCount: 1 },
]), (req, res) => {
  const  { place_id,shop_name,shop_address,shop_email,contact_number} = req.body
  console.log(req.body);
   var fileValue = JSON.parse(JSON.stringify(req.files));
   var photo = `http://127.0.0.1:${PORT}/images/${fileValue.shop_logo[0].filename}`;

   console.log(photo);

  let qry = "insert into tbl_shop (place_id,shop_name,contact_number,shop_address,shop_email,shop_logo)values('" +
     place_id + "','" + shop_name + "','" + contact_number + "','" + shop_address + "','" + shop_email + "','" + photo + "')";


    connection.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data Saved",
      });
    }
  });
});

