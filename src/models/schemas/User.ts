import moongose from "mongoose";

const UserSchema = new moongose.Schema({
  name: {
    type: String,
  },
});

export default moongose.models.User || moongose.model("User", UserSchema);
