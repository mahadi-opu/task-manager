const { MongoClient, ServerApiVersion } = require("mongodb");
const express = require("express");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();

// middleware

app.use(cors());

app.use(express.json());

app.use(express.static("public"));

app.use("/", express.static(path.join(__dirname, "public")));

// router.use(cors());

// MongoDB
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.z2bkdeb.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const db = client.db("usersDB");
    const userCollection = db.collection("users");

    // API ROUTES
    app.post("/users", async (req, res) => {
      const user = req.body;
      console.log("new user", req);
      const result = await userCollection.insertOne(user);
      res.send(result);
    });

    app.get("/users", async (req, res) => {
      const cursor = userCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

const UPLOADS_FOLDER = "./public/assets/images";
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, UPLOADS_FOLDER);
  },
  filename: function (req, file, cb) {
    const fileExt = path.extname(file.originalname);
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + fileExt);
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1000000
  },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg" ||
      file.mimetype === "application/pdf"
    ) {
      cb(null, true);
    } else {
      cb(new Error("only .jpg, .png or .jpeg format allowed!"));
    }
  }
});

// app.post("/", upload.array("avatar", 3), (req, res) => {
//   res.send("Hello Word ");
// });

// Define route to handle file upload
/* app.post("/", upload.single("avatar"), (req, res) => {
  const fileData = req.file.buffer; // Uploaded file binary data

  userCollection.insertOne({ data: Binary(fileData) }, (err, result) => {
    if (err) {
      console.error("Error storing file in MongoDB:", err);
      res.status(500).send("Internal Server Error");
    } else {
      res.send("File uploaded successfully");
    }
  });
}); */

// smhasanopu
// El3nLRLK5BnSVjTK
// 45.114.85.173/32

// app.get('/', (req, res) => {
//   res.send('Hello World! Opu ')
// })

// Default Error Handler

app.use((err, req, res, next) => {
  if (err) {
    res.status(500).send(err.message);
  } else {
    res.send("Success");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
