// libreria que nos permitira conectarse a mongodb
//https://backendtiendavirtual.onrender.com/api/listCompanies
const mongoose = require("mongoose");
const { Schema } = mongoose;

const companySchema = new Schema({
  nameCompany: { type: String, require: true },
  identifier: { type: Number, require: true },
  phone: { type: String, require: true },
  email: { type: String, require: true },
  address: { type: String, require: true },
  notesComp: { type: String, require: true },
  avatar: { type: String, required: false },
  hourAtention: { type: String, required: false },
  Category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  typeCategory: { type: String, required: false },
  // president: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Client',
  //   nameClient: String
  // },
  country: { type: String, require: true },
  cityName: { type: String, require: true },
  level: { type: Number, require: false },
  status: { type: Boolean, default: true },
  siteWeb: { type: String, require: false },
  typeComp: { type: Number, require: false }, //1 sera empresa 2 sera Profesional,..etc
  codeInter: { type: String, required: false,unique:true }, //identificacion de cada empresa (será unico)
});

module.exports = mongoose.model("Company", companySchema);
