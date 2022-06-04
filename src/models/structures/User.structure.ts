import moongose from "mongoose";

const UserSchema = new moongose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  dni:{
    type: Number,
  },
  birthDate: {
    type: Date,
  }
});

export default moongose.models.User || moongose.model("User", UserSchema);
