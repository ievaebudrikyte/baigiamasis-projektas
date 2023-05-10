import { Schema, model } from "mongoose";

const clientSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  DOB: {
    type: String,
    required: true,
  },
});

const Client = model("client", clientSchema);

export default Client;
