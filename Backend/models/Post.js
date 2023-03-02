const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//skill
const PostSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
  },
  url: {
    type: String,
  },
  status: {
    type: String,
    enum: ["HEHE", "HEHEHE", "HEHEHEHEHE"],
  },
  user: {
    type: Schema.TypesObjectId,
    ref: "users",
  },
});

module.exports = mongoose.model("posts", PostSchema);
