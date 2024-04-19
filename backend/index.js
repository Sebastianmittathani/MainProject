const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const PORT = 5000
const cors = require("cors")
const multer = require("multer")
const mysql = require("mysql2");
app.use(bodyParser.json());
app.use(express.static("./public"));
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

//--DISTRICT BEGINS HERE----//
app.post("/District", (req, res) => {
  const { districtName } = req.body
  let qrySel =
    "select * from tbl_district where district_name = '" +
    districtName +
    "'";
    console.log(qrySel);
  connection.query(qrySel, (err, resultMain) => {
    if (err) {
      console.log("Error");
    } else if(resultMain.length === 0) {


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
    }
  else{
    res.send({
      message: "Data already Inserted",
    });
  }})
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


  //--DISTRICT ENDS HERE---


  // --PLACE BEGINS HERE---


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




  // SHOP REGISTRATION  BEGINS HERE

  app.post("/ShopRegister",
    upload.fields([
      { name: "shop_logo", maxCount: 1 },
    ]),
    (req, res) => {
      var fileValue = JSON.parse(JSON.stringify(req.files));
      var photo = `http://127.0.0.1:${PORT}/images/${fileValue.shop_logo[0].filename}`;

      const { place_id, shop_name, shop_contact, shop_address, shop_email, shop_licenseproof, shop_ownername, shop_password } = req.body
      console.log(req.body);

      console.log(photo);

      let qry = "insert into tbl_shop (place_id,shop_name,shop_contact,shop_address,shop_email,shop_logo,shop_licenseproof,shop_ownername,shop_password)values('" + place_id + "','" + shop_name + "','" + shop_contact + "','" + shop_address + "','" + shop_email + "','" + photo + "','" + shop_licenseproof + "','" + shop_ownername + "','" + shop_password + "')";

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
    const { shop_name, shop_contact, shop_address, shop_email, shop_ownername,  shop_password } = req.body
    console.log(req.body);
    let qry = "update tbl_shop set shop_name = '" + shop_name + "',shop_contact='" + shop_contact + "',shop_address = '" + shop_address + "', shop_email ='" + shop_email + "', shop_ownername ='" + shop_ownername + "', shop_password ='" + shop_password + "' where shop_id = " + id;
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
  // SHOP REGISTRATION ENDS HERE


  // --CATEGORY BEGINS HERE----
  app.post("/category", (req, res) => {
    const { categoryname , jail_id } = req.body
    console.log(categoryname);

    let qry =
      "insert into tbl_category (category_name , jail_id ) values('" +
      categoryname +"' , '" + jail_id + "' )";
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

  app.get("/category/:id", (req, res) => {
    const Id = req.params.id
    let qry = "SELECT * FROM tbl_category where jail_id =" + Id;
    console.log(qry);
    connection.query(qry, (err, result) => {
      if (err) {
        console.log("error");
      } else {
        res.send({
          jcategory: result,
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
  app.post("/Product",
    upload.fields([
      { name: "product_photo", maxCount: 1 },
    ]),
    (req, res) => {
      var fileValue = JSON.parse(JSON.stringify(req.files));
      var photo = `http://127.0.0.1:${PORT}/images/${fileValue.product_photo[0].filename}`;
      const { product_name, category_id, product_details, product_rate, jail_id } = req.body


      let qry =
        "insert into tbl_product (product_name ,category_id,product_details,product_photo,product_rate,jail_id) values('" +
        product_name + "' , '" + category_id + "', '" + product_details + "', '" + photo + "', '" + product_rate + "', '" + jail_id + "')";

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



  app.get("/Product", (req, res) => {
    const Id = req.params.id
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


  
  app.get("/ProductJail/:id", (req, res) => {
    const Id = req.params.id
    let qry = "SELECT * FROM tbl_product INNER JOIN tbl_category ON tbl_product.category_id = tbl_category.category_id where tbl_product.jail_id ="+Id;
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

  // PRODUCT ENDS HERE


  // JAIL REGISTRATION BEGINS HERE
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

  app.get("/CentralJail/:Id", (req, res) => {
    const Id = req.params.Id
    let qry = "SELECT * FROM tbl_jail INNER JOIN tbl_district ON tbl_jail.district_id = tbl_district.district_id";
    console.log(qry);
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

  app.get("/CentralJail", (req, res) => {
    let qry = "SELECT * FROM tbl_jail INNER JOIN tbl_district ON tbl_jail.district_id = tbl_district.district_id";
    console.log(qry);
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





  app.delete("/Jail/:Id", (req, res) => {
    const Id = req.params.Id
    let qry = " delete from tbl_jail where jail_id = " + Id;
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




  //  JAIL REGISTRATION ENDE HERE


  //   LOGIN STARTS HERE 
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
          id: result[0].shop_id,
          login: "shop"
        })
      }
    })

  })
    

  // app.post("/login", (req, res) => {
  //   let selAdmin = "select * from tbl_admin where admin_email='" + req.body.email + "' and admin_password='" + req.body.password + "'";
  //   let selUser = "select * from tbl_user where user_email='" + req.body.email + "' and user_password='" + req.body.password + "' and userreq_status = 1";
  //   let selVolunteer = "select * from tbl_volunteer where volunteer_email='" + req.body.email + "' and volunteer_password='" + req.body.password + "' and volreq_status = 1";
  
  //   db.query(selAdmin, (err, adminResult) => {
  //     if (err) {
  //       console.log("Error in admin query:", err);
  //       res.status(500).send({ error: "Internal server error" });
  //       return; // Exit the function to avoid sending multiple responses
  //     }
  
  //     if (adminResult.length > 0) {
  //       res.send({
  //         message: "Login Successful",
  //         id: adminResult[0].admin_id,
  //         login: "admin"
  //       });
  //       return; // Exit the function after sending the response
  //     }
  
  //     // If admin login failed, check for user login
  //     db.query(selUser, (err, userResult) => {
  //       if (err) {
  //         console.log("Error in user query:", err);
  //         res.status(500).send({ error: "Internal server error" });
  //         return; // Exit the function to avoid sending multiple responses
  //       }
  
  //       if (userResult.length > 0) {
  //         res.send({
  //           message: "Login Successful",
  //           id: userResult[0].user_id,
  //           login: "user"
  //         });
  //         return; // Exit the function after sending the response
  //       }
  
  //       // If user login failed, check for volunteer login
  //       db.query(selVolunteer, (err, volunteerResult) => {
  //         if (err) {
  //           console.log("Error in volunteer query:", err);
  //           res.status(500).send({ error: "Internal server error" });
  //           return; // Exit the function to avoid sending multiple responses
  //         }
  
  //         if (volunteerResult.length > 0) {
  //           res.send({
  //             message: "Login Successful",
  //             id: volunteerResult[0].volunteer_id,
  //             login: "volunteer"
  //           });
  //           return; // Exit the function after sending the response
  //         }
  
  //         // If none of the logins succeed, send an error response
  //         res.send({ login: "Error" });
  //       });
  //     });
  //   });
  // });
  
  





  //  LOGINS ENDS HERE 

  //  PRISIONER REGISTRATION BEGINS HERE
  app.post("/Prisioner", (req, res) => {
    const { prisioner_name, jail_id, prisioner_gender, prisioner_contact, prisioner_code,
      prisioner_crimedetails, prisioner_duration, prisioner_joindate, prisioner_releasedate } = req.body
    // console.log(prisioner_name, jail_id, prisioner_gender, prisioner_address, prisioner_contact, prisioner_email, prisioner_photo, prisioner_code,
    //   prisioner_crimedetails, prisioner_duration, prisioner_joindate, prisioner_releasedate, prisioner_status);

    let qry =
      "insert into tbl_prisioner (prisioner_name ,jail_id,prisioner_gender,prisioner_contact,prisioner_code,prisioner_crimedetails,prisioner_duration,prisioner_joindate,prisioner_releasedate) values('"
      + prisioner_name + "' ,'"
      + jail_id + "', '"
      + prisioner_gender + "', '"
      + prisioner_contact + "',  '"
      + prisioner_code + "', '"
      + prisioner_crimedetails + "', '"
      + prisioner_duration + "', '"
      + prisioner_joindate + "', '"
      + prisioner_releasedate + "')";
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
    let qry = "SELECT * FROM tbl_prisioner ";

    console.log(qry);
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
    let qry = "SELECT * FROM tbl_prisioner  where jail_id =" + id;
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
    const { prisioner_name, prisioner_gender, prisioner_address, prisioner_contact, prisioner_photo, prisioner_code,
      prisioner_crimedetails, prisioner_duration, prisioner_joindate, prisioner_releasedate, prisioner_status } = req.body
    console.log(req.body);
    let qry = "update tbl_prisioner set prisioner_name = '" + prisioner_name +
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
  // PRISIONER REGISTRATION ENDS HERE

  // Jail fetch //
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

  //jail  myprofile //

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

  // jail myprofile//

  //jail edit profile//

  app.get("/getjail/:jail_id", (req, res) => {
    const jail_id = req.params.jail_id;
    let qry = "select * from tbl_jail where jail_id = " + jail_id;
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

  app.patch("/editjail/:Id", (req, res) => {
    const id = req.params.Id;
    // console.log(res);
    const { jail_name, jail_contact, jail_username, jail_address } = req.body;
    let qry = "update tbl_jail set jail_name ='" + jail_name + "', jail_contact ='" + jail_contact + "',jail_username='" + jail_username + "',jail_address = '" + jail_address + "' where jail_id = " + id;
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


  //jail edit profile//



  // Jail Change Password//

  app.patch("/changepass/:id", (req, res) => {
    let id = req.params.id;
    let qry = "update tbl_jail set jail_password ='" + req.body.newuser_password + "' where jail_id=" + id;
    console.log(qry);
    connection.query(qry, (err, result) => {
      if (err) {
        console.log("Error");
      } else {
        res.send({
          message: "updated",
        });
      }
    });
  });

  // Jail Change Password//




  //product fetch//

  app.get("/fetchproduct/:id", (req, res) => {
    let qry = "select * from tbl_product where jail_id =" + req.params.id
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

  app.get("/productfetchdataById/:cid/:id", (req, res) => {
    const Id = req.params.id
    const CId = req.params.cid
    let qry = "select * from tbl_product  where category_id  = " + CId + " and jail_id = " + Id
    console.log(qry);
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
  // product fetch//

  //shop myProfile //

  app.get("/shopmyprofile/:shop_id", (req, res) => {
    const shop_id = req.params.shop_id;
    console.log(shop_id);
    let qry = "select * from tbl_shop where shop_id = " + shop_id;
    connection.query(qry, (err, result) => {
      if (err) {
        console.log("error");
      } else {
        res.send({
          shop: result,
        });
      }
    });
  });



  //shop myProfile//

  //shop editProfile//
  app.get("/getshop/:shop_id", (req, res) => {
    const shop_id = req.params.shop_id;
    let qry = "select * from tbl_shop where shop_id = " + shop_id;
    connection.query(qry, (err, result) => {
      if (err) {
        console.log("error");
      } else {
        res.send({
          shop: result,
        });
      }
    });
  });

  app.patch("/editshop/:Id", (req, res) => {
    const id = req.params.Id;
    // console.log(res);
    const { shop_name, shop_contact, shop_address, shop_email, shop_licenseproof, shop_ownername, } = req.body;
    let qry = "update tbl_shop set shop_name ='" + shop_name + "', shop_contact ='" + shop_contact + "',shop_address='"
      + shop_address +
      "',shop_licenseproof = '" + shop_licenseproof +
      "',shop_ownername = '" + shop_ownername +
      "',shop_email = '" + shop_email +
      "' where shop_id = " + id;
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

  //shop editProfile//

  //shop changePassword//

  app.patch("/shopchangepass/:id", (req, res) => {
    let id = req.params.id;
    let qry = "update tbl_shop set shop_password ='" + req.body.newshop_password + "' where shop_id=" + id;
    console.log(qry);
    connection.query(qry, (err, result) => {
      if (err) {
        console.log("Error");
      } else {
        res.send({
          message: "updated",
        });
      }
    });
  });

  //shop changePassword//

  //view  product in booking page//


  app.get("/bookproduct/:id", (req, res) => {
    const id = req.params.id;
    let qry = "select * from tbl_product where product_id = " + id
    console.log(qry);
    connection.query(qry, (err, result) => {
      if (err) {
        console.log("Error");
      } else {
        console.log(result);
        res.send({
          product: result,
        });
      }
    });
  });

  //view  product in booking page//

  // booking product in booking page //
  app.post("/bookdata", (req, res) => {
    const { shop_id, product_id, booking_qty, booking_curdate, booking_foredate, booking_amount } = req.body
    //  console.log(shop_id, product_id, booking_qty, booking_curdate, booking_foredate, booking_amount);

    let qry =
      "insert into tbl_booking (shop_id, product_id, booking_qty, booking_curdate, booking_foredate, booking_amount) values('"
      + shop_id + "' ,'"
      + product_id + "', '"
      + booking_qty + "', curdate(), '"
      + booking_foredate + "', '"
      + booking_amount + "')";
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
  // booking product in booking page //

  //booking view by jailer//


  app.get("/bookdetailsData/:id", (req, res) => {
    console.log('hi');
    const id = req.params.id;
    let qry = "select * from tbl_booking d INNER JOIN tbl_shop s on d.shop_id = s.shop_id INNER JOIN tbl_product  p  on d.product_id = p.product_id INNER JOIN tbl_jail j on p.jail_id = j.jail_id where j.jail_id = " + id
    console.log(qry);
    connection.query(qry, (err, result) => {
      if (err) {
        console.log("Error");
      } else {
        console.log(result);
        res.send({
          bookdata: result,
        });
      }
    });
  });

  app.patch("/bookaccept/:Id", (req, res) => {
    const id = req.params.Id
    let qry = "update tbl_booking set booking_status = 1 where booking_id  = " + id;
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


  app.patch("/bookreject/:Id", (req, res) => {
    const id = req.params.Id
    let qry = "update tbl_booking set booking_status = 2 where booking_id  = " + id;
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






  //booking view by jailer//

  //booking reply viewed by shop

  app.get("/bookingreply/:id", (req, res) => {
    const id = req.params.id;
    let qry = "select * from tbl_booking b INNER JOIN tbl_product p ON p.product_id = b.product_id INNER JOIN tbl_jail j ON j.jail_id = p.jail_id  where b.shop_id = " + id
    console.log(qry);
    connection.query(qry, (err, result) => {
      if (err) {
        console.log("Error");
      } else {
        console.log(result);
        res.send({
          booking: result,
        });
      }
    });
  });
  //booking reply viewed by shop

  //booking payment by shop

  app.patch("/bookpay/:Id", (req, res) => {
    const id = req.params.Id
    let qry = "update tbl_booking set booking_status = 3 where booking_id  = " + id;
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

  //booking payment by shop



  // complaint posting by shop

  app.post("/Postcomplaint", (req, res) => {
    const { shop_id, booking_id, complaint_title, complaint_details } = req.body
    console.log(shop_id, booking_id, complaint_title, complaint_details);

    let qry =
      "insert into tbl_complaint (shop_id, booking_id, complaint_title, complaint_details) values('"
      + shop_id + "' ,'"
      + booking_id + "', '"
      + complaint_title + "', '"
      + complaint_details + "')";
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

  // complaint posting by shop

  //complaint view by jail

  app.get("/complaintdetails/:id", (req, res) => {
    //  console.log('hi');
    const id = req.params.id;
    let qry = "select * from tbl_complaint c INNER JOIN tbl_booking d on c.booking_id = d.booking_id  INNER JOIN  tbl_shop s on d.shop_id = s.shop_id INNER JOIN tbl_product  p  on d.product_id = p.product_id INNER JOIN tbl_jail j on p.jail_id = j.jail_id where j.jail_id = " + id
    console.log(qry);
    connection.query(qry, (err, result) => {
      if (err) {
        console.log("Error");
      } else {
        console.log(result);
        res.send({
          complaintdata: result,
        });
      }
    });
  });


  //complaint view by jail

  //complaint reply by jail

  app.patch("/complaintReply/:Id", (req, res) => {
    console.log(req.body);
    const id = req.params.Id
    const { complaint_reply } = req.body
    console.log(complaint_reply);

    let qry = "update tbl_complaint set complaint_reply = '" + complaint_reply + "' where complaint_id = " + id;
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



  //complaint reply by jail

  // view complaint reply by shop

  app.get("/Viewcomplaintreply/:id", (req, res) => {
    console.log('hi');
    const id = req.params.id;
    let qry = "select * from tbl_complaint c INNER JOIN tbl_booking b ON b.booking_id = c.booking_id INNER JOIN tbl_product p ON p.product_id =b.product_id INNER JOIN tbl_jail j ON j.jail_id = p.jail_id where c.shop_id  =" + id
    console.log(qry);
    connection.query(qry, (err, result) => {
      if (err) {
        console.log("Error");
      } else {
        console.log(result);
        res.send({
          complaintdata: result,
        });
      }
    });
  });






  // feedback posting by shop

  app.post("/Postfeedback", (req, res) => {
    const { shop_id, booking_id, feedback_title, feedback_details } = req.body
    console.log(shop_id, booking_id, feedback_title, feedback_details);

    let qry =
      "insert into tbl_feedback (shop_id, booking_id, feedback_title, feedback_details) values('"
      + shop_id + "' ,'"
      + booking_id + "', '"
      + feedback_title + "', '"
      + feedback_details + "')";
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

  // feedback posting by shop

  // feedback view by jail

  app.get("/viewfeedback/:id", (req, res) => {
    //  console.log('hi');
    const id = req.params.id;
    let qry = "select * from tbl_feedback c INNER JOIN tbl_booking d on c.booking_id = d.booking_id  INNER JOIN  tbl_shop s on d.shop_id = s.shop_id INNER JOIN tbl_product  p  on d.product_id = p.product_id INNER JOIN tbl_jail j on p.jail_id = j.jail_id where j.jail_id = " + id
    console.log(qry);
    connection.query(qry, (err, result) => {
      if (err) {
        console.log("Error");
      } else {
        console.log(result);
        res.send({
          feedbackdata: result,
        });
      }
    });
  });


  // feedback view by jail

  // notification from jail //

  app.get("/notificationfromVol/:id", (req, res) => {
    const Id = req.params.id
    let qry = "select * FROM tbl_booking b INNER JOIN tbl_product p ON p.product_id = b.product_id INNER JOIN tbl_jail j on j.jail_id = p.jail_id where  b.shop_id = " + Id
    // console.log(qry);
    connection.query(qry, (err, result) => {
      if (err) {
        console.log("Error");
      } else {
        res.send({
          notitificationfromjail: result
        });
      }
    });
  });



  app.patch("/clearnotification/:Id", (req, res) => {
    const id = req.params.Id
    // const { districtName } = req.body
    let qry = "update tbl_booking set clear_status = 1 where booking_id = " + id;
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

  // notification from jail //


  // notification from shop //

  app.get("/notificationfromshop/:id", (req, res) => {
    const Id = req.params.id
    let qry = "select * FROM tbl_booking b INNER JOIN tbl_shop s ON s.shop_id = b.shop_id INNER JOIN tbl_product p ON p.product_id = b.product_id INNER JOIN tbl_jail j ON j.jail_id = p.jail_id where j.jail_id =" + Id
    console.log(qry);
    connection.query(qry, (err, result) => {
      if (err) {
        console.log("Error");
      } else {
        res.send({
          notitificationfromshop: result
        });
      }
    });
  });



  app.patch("/clearnotificationshop/:Id", (req, res) => {
    const id = req.params.Id
    // const { districtName } = req.body
    let qry = "update tbl_booking set clear_status = 1 where booking_id = " + id;
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

  // notification from shop//


  // view complaint and reply by admin

  app.get("/viewcomplaintreplyAdmin/", (req, res) => {
    console.log('hi');
    const id = req.params.id;
    let qry = "select * from tbl_complaint c INNER JOIN tbl_booking b ON b.booking_id = c.booking_id INNER JOIN tbl_product p ON p.product_id =b.product_id INNER JOIN tbl_jail j ON j.jail_id = p.jail_id INNER JOIN tbl_shop s ON s.shop_id = b.shop_id"
    console.log(qry);
    connection.query(qry, (err, result) => {
      if (err) {
        console.log("Error");
      } else {
        console.log(result);
        res.send({
          complaintdata: result,
        });
      }
    });
  });

// view complaint and reply by admin

















