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
  password: '', // Empty string for passwordless access
  database: 'db_new',
  port: 3306,
});
connection.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log("Database Connected");
});
// -------------------------------------------backend  starts---------------------------------------------------------
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





app.post("/Subcategory", (req, res) => {

  let qry4 =
    "insert into tbl_subcategory (subcategory_name) values('" +
    req.body.subcategoryName +
    "')";
  connection.query(qry4, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data Saved",
      });
    }
  });
});

//--------------------------------------------------------DISTRICT BEGINS HERE-----------------------------------------------------------//
app.post("/District", (req, res) => {
  const { districtName } = req.body

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

app.get("/District", (req, res) => {
  let qry = "select * from tbl_district";
  connection.query(qry, (err, result) => {
    if (err) {
      console.log("error");
    } else {
      res.send({
        district: result,
      });
    }
  });
});

app.delete("/District/:Id", (req, res) => {
  const Id = req.params.Id
  let qry = "delete from tbl_district where district_id = " + Id;
  connection.query(qry, (err, result) => {
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
  let qry = "select * from tbl_district  where district_id = " + Id;
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
  console.log(req.body);
  const id = req.params.Id
  const { districtName } = req.body
  let qry = "update tbl_district set district_name = '" + districtName + "' where district_id = " + id;
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


//-------------------------------------------------------DISTRICT ENDS HERE----------------------------------------------------------
// ------------------------------------------------------PLACE BEGINS HERE----------------------------------------------------------


app.post("/Place", (req, res) => {
  const { place_name, district_id } = req.body
  console.log(place_name, district_id);

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

app.get("/Place", (req, res) => {
  let qry = "SELECT * FROM tbl_place INNER JOIN tbl_district ON tbl_place.district_id = tbl_district.district_id";
  connection.query(qry, (err, result) => {
    if (err) {
      console.log("error");
    } else {
      res.send({
        place: result,
      });
    }
  });
});

app.get("/Place/:id", (req, res) => {
  const id = req.params.id
  let qry = "SELECT * FROM tbl_place where district_id =" + id;
  connection.query(qry, (err, result) => {
    if (err) {
      console.log("error");
    } else {
      res.send({
        place: result,
      });
    }
  });
});

app.delete("/Place/:Id", (req, res) => {
  const Id = req.params.Id
  let qry = "delete from tbl_place where place_id = " + Id;
  connection.query(qry, (err, result) => {
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
  const Id = req.params.id
  console.log(Id);
  let qry = "select * from tbl_place  where place_id = " + Id;
  console.log(qry);
  connection.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        place: result,
      });
    }
  });
});

app.patch("/Place/:Id", (req, res) => {
  console.log(req);
  const id = req.params.Id
  const { place_name, district_id } = req.body
  console.log(req.body);
  let qry = "update tbl_place set place_name = '" + place_name + "', district_id ='" + district_id + "' where place_id = " + id;
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




// ----------------------------------------------------------SHOP REGISTRATION  BEGINS HERE-----------------------------------------------------------

app.post("/ShopRegister",
   upload.fields([
   { name: "shop_logo", maxCount: 1 },
  ]),
  (req, res) => {
    var fileValue = JSON.parse(JSON.stringify(req.files));
    var photo = `http://127.0.0.1:${PORT}/images/${fileValue.shop_logo[0].filename}`;

    const {  place_id, shop_name, shop_contact, shop_address, shop_email,  shop_licenseproof, shop_ownername, shop_username, shop_password,shop_status } = req.body
    console.log(req.body);
    
      console.log(photo);

    let qry = "insert into tbl_shop (place_id,shop_name,shop_contact,shop_address,shop_email,shop_logo,shop_licenseproof,shop_ownername,shop_username,shop_password,shop_status)values('" + place_id + "','" + shop_name + "','" + shop_contact + "','" + shop_address + "','" + shop_email + "','" + photo + "','" + shop_licenseproof + "','" + shop_ownername + "','" + shop_username + "','" + shop_password + "','" + shop_status + "')";

    console.log(qry);
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

app.get("/ShopRegister", (req, res) => {
  let qry = "select * from tbl_shop";
  connection.query(qry, (err, result) => {
    if (err) {
      console.log("error");
    } else {
      res.send({
        category: result,
      });
    }
  });
});

app.delete("/ShopRegister/:Id", (req, res) => {
  const Id = req.params.Id
  let qry = "delete from tbl_shop where shop_id = " + Id;
  connection.query(qry, (err, result) => {
    if (err) {
      console.log("error");
    } else {
      res.send({
        message: 'data deleted',
      });
    }
  });
});

app.patch("/ShopRegister/:Id", (req, res) => {
  console.log(req);
  const id = req.params.Id
  const { shop_name, shop_contact, shop_address, shop_email, shop_ownername, shop_username, shop_password } = req.body
  console.log(req.body);
  let qry = "update tbl_shop set shop_name = '" + shop_name + "',shop_contact='" + shop_contact + "',shop_address = '" + shop_address + "', shop_email ='" + shop_email + "', shop_ownername ='" + shop_ownername + "', shop_username ='" + shop_username + "', shop_password ='" + shop_password + "' where shop_id = " + id;
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
// ----------------------------------------------------------SHOP REGISTRATION ENDS HERE-----------------------------------------------------------


// ------------------------------------------------------------ CATEGORY BEGINS HERE---------------------------------------------------------
app.post("/category", (req, res) => {
  const { categoryname } = req.body
  console.log(categoryname);

  let qry =
    "insert into tbl_category (category_name) values('" +
    categoryname +
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

app.get("/category", (req, res) => {
  let qry = "SELECT * FROM tbl_category";
  console.log(qry);
  connection.query(qry, (err, result) => {
    if (err) {
      console.log("error");
    } else {
      res.send({
        category: result,
      });
    }
  });
});

app.delete("/category/:Id", (req, res) => {
  const Id = req.params.Id
  let qry = "delete from tbl_category where category_id = " + Id;
  connection.query(qry, (err, result) => {
    if (err) {
      console.log("error");
    } else {
      res.send({
        message: 'data deleted',
      });
    }
  });
});


app.get("/updatecatgory/:id", (req, res) => {
  const Id = req.params.id
  console.log(Id);
  let qry = "select * from tbl_category  where category_id = " + Id;
  console.log(qry);
  connection.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        category: result,
      });
    }
  });
});

app.patch("/category/:Id", (req, res) => {
  console.log(req);
  const id = req.params.Id
  const { categoryname } = req.body
  console.log(req.body);
  let qry = "update tbl_category set category_name = '" + categoryname + "' where category_id = " + id;
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
// --------------------------------------------------CATEGORY ENDS HERE---------------------------------------------------




// --------------------------------------------------PRODUCT BEGINS HERE------------------------------------------------------
app.post("/Product", (req, res) => {
  const { product_name, category_id, product_details, product_photo, product_rate,jail_id } = req.body
  console.log(product_name, category_id, product_details, product_photo, product_rate,jail_id);

  let qry =
    "insert into tbl_product (product_name ,category_id,product_details,product_photo,product_rate,jail_id) values('" +
    product_name + "' , '" + category_id + "', '" + product_details + "', '" + product_photo + "', '" + product_rate + "', '" + jail_id + "')";


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

app.get("/Product", (req, res) => {
  let qry = "SELECT * FROM tbl_product INNER JOIN tbl_category ON tbl_product.category_id = tbl_category.category_id";
  connection.query(qry, (err, result) => {
    if (err) {
      console.log("error");
    } else {
      res.send({
        product: result,
      });
    }
  });
});

app.get("/Product/:id", (req, res) => {
  const id = req.params.id
  let qry = "SELECT * FROM tbl_product where category_id =" + id;
  connection.query(qry, (err, result) => {
    if (err) {
      console.log("error");
    } else {
      res.send({
        product: result,
      });
    }
  });
});

app.delete("/Product/:Id", (req, res) => {
  const Id = req.params.Id
  let qry = "delete from tbl_product where product_id = " + Id;
  connection.query(qry, (err, result) => {
    if (err) {
      console.log("error");
    } else {
      res.send({
        message: 'data deleted',
      });
    }
  });
});


app.get("/updateproduct/:id", (req, res) => {
  console.log(req);
  const Id = req.params.id
  console.log(Id);
  let qry = "select * from tbl_product  where product_id = " + Id;
  console.log(qry);
  connection.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        product: result,
      });
    }
  });
});

app.patch("/Product/:Id", (req, res) => {
  console.log(req);
  const id = req.params.Id
  const { product_name, category_id, product_details, product_rate } = req.body
  console.log(req.body);
  let qry = "update tbl_product set product_name = '" + product_name + "',product_details='" + product_details + "',product_rate = '" + product_rate + "', category_id ='" + category_id + "' where product_id = " + id;
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

// --------------------------------------------------PRODUCT ENDS HERE------------------------------------------------------


// ----------------------------------------------JAIL REGISTRATION BEGINS HERE------------------------------------------------------
app.post("/CentralJail", (req, res) => {
  const { jail_name, district_id, jail_contact, jail_address, jail_email, jail_username, jail_password } = req.body
  console.log(jail_name, district_id, jail_contact, jail_address, jail_email, jail_username, jail_password);

  let qry =
    "insert into tbl_jail (jail_name ,district_id,jail_contact,jail_address,jail_email,jail_username,jail_password) values('" +
    jail_name + "' , '" + district_id + "', '" + jail_contact + "', '" + jail_address + "', '" + jail_email + "', '" + jail_username + "', '"
    + jail_password + "')";


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

app.get("/CentralJail", (req, res) => {
  let qry = "SELECT * FROM tbl_jail INNER JOIN tbl_district ON tbl_jail.district_id = tbl_district.district_id";
  connection.query(qry, (err, result) => {
    if (err) {
      console.log("error");
    } else {
      res.send({
        jail: result,
      });
    }
  });
});

app.get("/Product/:id", (req, res) => {
  const id = req.params.id
  let qry = "SELECT * FROM tbl_product where category_id =" + id;
  connection.query(qry, (err, result) => {
    if (err) {
      console.log("error");
    } else {
      res.send({
        product: result,
      });
    }
  });
});

app.delete("/Jail/:Id", (req, res) => {
  const Id = req.params.Id
  let qry = "delete from tbl_jail where jail_id = " + Id;
  connection.query(qry, (err, result) => {
    if (err) {
      console.log("error");
    } else {
      res.send({
        message: 'data deleted',
      });
    }
  });
});


app.get("/UpdateJail/:id", (req, res) => {
  console.log(req);
  const Id = req.params.id
  console.log(Id);
  let qry = "select * from tbl_product  where product_id = " + Id;
  console.log(qry);
  connection.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        product: result,
      });
    }
  });
});

app.patch("/Jail/:Id", (req, res) => {
  console.log(req);
  const id = req.params.Id
  const { jail_name, jail_contact, jail_address, jail_username, jail_password } = req.body
  console.log(req.body);
  let qry = "update tbl_jail set jail_name = '" + jail_name + "',jail_contact='" + jail_contact + "',jail_address = '" + jail_address + "', jail_username ='" + jail_username + "', jail_password ='" + jail_password + "' where jail_id = " + id;

  // let qry = "update tbl_jail set jail_name = '"+jail_name+"',jail_contact='"+ jail_contact+"', jail_address = '"+ jail_address+",jail_username = '"+ jail_username+"', jail_password = '"+ jail_password+"' where jail_id = "+id ;
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
// ---------------------------------------------------------JAIL REGISTRATION ENDE HERE------------------------------------------------------


// ----------------------------------------------------------LOGIN STARTS HERE---------------------------------------------------------------------
app.post("/Login", (req, res) => {
  let selAdmin = "select * from tbl_admin where admin_email='" + req.body.email + "' and admin_password='" + req.body.password + "'";
  let seljail = "select * from tbl_jail where jail_email='" + req.body.email + "' and jail_password='" + req.body.password + "'";
  let selshop = "select * from tbl_shop where shop_email='" + req.body.email + "' and shop_password='" + req.body.password + "'";


  connection.query(selAdmin, (err, result) => {
    if (err) {
      console.log("Error");
    }
    else if (result.length > 0) {
      res.send({
        message: "Login Successful",
        id: result[0].admin_id,
        login: "admin"
      })
    }
  })
  connection.query(seljail, (err, result) => {
    if (err) {
      console.log("Error");
    }
    else if (result.length > 0) {
      res.send({
        message: "Login Successful",
        id: result[0].jail_id,
        login: "jail"
      })
    }
  })
  connection.query(selshop, (err, result) => {
    if (err) {
      console.log("Error");
    }
    else if (result.length > 0) {
      res.send({
        message: "Login Successful",
        id: result[0].jail_id,
        login: "shop"
      })
    }
  })

})




// -------------------------------------------------------LOGINS ENDS HERE--------------------------------------------------------------

// -------------------------------------------------PRISIONER REGISTRATION BEGINS HERE-------------------------------------------------
app.post("/Prisioner", (req, res) => {
  const { prisioner_name, jail_id, prisioner_gender, prisioner_address, prisioner_contact, prisioner_email, prisioner_photo, prisioner_code,
    prisioner_crimedetails, prisioner_duration, prisioner_joindate, prisioner_releasedate, prisioner_status } = req.body
  // console.log(prisioner_name, jail_id, prisioner_gender, prisioner_address, prisioner_contact, prisioner_email, prisioner_photo, prisioner_code,
  //   prisioner_crimedetails, prisioner_duration, prisioner_joindate, prisioner_releasedate, prisioner_status);

  let qry =
    "insert into tbl_prisioner (prisioner_name ,jail_id,prisioner_gender,prisioner_address,prisioner_contact,prisioner_email,prisioner_photo,prisioner_code,prisioner_crimedetails,prisioner_duration,prisioner_joindate,prisioner_releasedate,prisioner_status) values('"
    + prisioner_name + "' ,'"
    + jail_id + "', '"
    + prisioner_gender + "', '"
    + prisioner_address + "', '"
    + prisioner_contact + "', '"
    + prisioner_email + "', '"
    + prisioner_photo + "', '"
    + prisioner_code + "', '"
    + prisioner_crimedetails + "', '"
    + prisioner_duration + "', '"
    + prisioner_joindate + "', '"
    + prisioner_releasedate + "', '"
    + prisioner_status + "')";
    // console.log(qry);


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
app.get("/Prisioner", (req, res) => {
  let qry = "SELECT * FROM tbl_prisioner";
  console.log(res);
  connection.query(qry, (err, result) => {
    if (err) {
      console.log("error");
    } else {
      res.send({
        prisioner: result,
      });
    }
  });
});
app.get("/updateprisioner/:id", (req, res) => {
  const id = req.params.id
  let qry = "SELECT * FROM tbl_prisioner where jail_id =" + id;
  connection.query(qry, (err, result) => {
    if (err) {
      console.log("error");
    } else {
      res.send({
        prisioner: result,
      });
    }
  });
});

app.delete("/Prisioner/:Id", (req, res) => {
  const Id = req.params.Id
  let qry = "delete from tbl_prisioner where prisioner_id = " + Id;
  connection.query(qry, (err, result) => {
    if (err) {
      console.log("error");
    } else {
      res.send({
        message: 'data deleted',
      });
    }
  });
});

app.patch("/Prisioner/:Id", (req, res) => {
  console.log(req);
  const id = req.params.Id
  const {  prisioner_name, prisioner_gender, prisioner_address, prisioner_contact,  prisioner_photo, prisioner_code,
    prisioner_crimedetails, prisioner_duration, prisioner_joindate, prisioner_releasedate, prisioner_status  } = req.body
  console.log(req.body);
  let qry = "update tbl_prisioner set prisioner_name = '"+ prisioner_name +
   "',prisioner_gender='" + prisioner_gender +
    "',prisioner_address = '" + prisioner_address +
     "', prisioner_contact ='" + prisioner_contact +
     "', prisioner_photo ='" + prisioner_photo +
     "', prisioner_code ='" + prisioner_code +
     "', prisioner_crimedetails ='" + prisioner_crimedetails +
     "', prisioner_duration ='" + prisioner_duration +
     "', prisioner_joindate ='" + prisioner_joindate +
     "', prisioner_releasedate ='" + prisioner_releasedate +

      "', prisioner_status ='" + prisioner_status + "' where prisioner_id = " + id;

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
// -------------------------------------------------PRISIONER REGISTRATION ENDS HERE-------------------------------------------------

//  Jail fetch //
app.get("/jailfetch/", (req, res) => {
  let qry = "select * from tbl_jail"
  connection.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        jail: result,
      });
    }
  });
});


app.get("/jailfetchbyId/:id", (req, res) => {
  const Id = req.params.id
  let qry = "select * from tbl_jail  where district_id = " + Id 
  connection.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        jaildatabyId: result,
      });
    }
  });
});

//jail fetch//

//myprofile//

app.get("/myprofile/:jail_id", (req, res) => {
  const jail_id = req.params.jail_id;
  let qry = "select * from tbl_jail where jail_id = " + jail_id;
  connection.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        jail: result,
      });
    }
  });
});

//myprofile//

//product fetch//

app.get("/fetchproduct/:id", (req, res) => {
  let qry = "select * from tbl_product where jail_id =" +req.params.id
  connection.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        product: result,
      });
    }
  });
});

app.get("/productfetchdataById/:id/:cid", (req, res) => {
  const Id = req.params.id
  const CId = req.params.cid
  let qry = "select * from tbl_product  where category_id  = " + Id +" and jail_id = "+ CId
  connection.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        productdatabyId: result,
      });
    }
  });
});










