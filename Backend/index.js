require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const authRouter = require("./routes/auth");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@th-true-mart-register-l.vps3yyz.mongodb.net/?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log("MongoDB connect");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

connectDB();

const app = express();
app.use(express.json());

//nếu nó nhìn thấy /api/auth thì nó sẽ đưa đường linh tời auth.js mỗi khi có req
app.use("/api/auth", authRouter);

const PORT = 5000;

app.listen(PORT, () => console.log(`Sever started on port ${PORT}`));
