const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
    default:
      "https://res.cloudinary.com/dv4re7bf8/image/upload/v1733056965/avater_woga44.png",
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    default: "India",
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
  },
  card: [
    {
      cardNumber: {
        type: String,
        required: true,
        trim: true,
      },
      cardName: {
        type: String,
        required: true,
        trim: true,
      },
      expiryDate: {
        type: Date,
        required: true,
        trim: true,
      },
      cvv: {
        type: String,
        required: true,
        trim: true,
      },
    },
  ],

  address: [
    {
      state: {
        type: String,
        required: true,
        trim: true,
      },
      city: {
        type: String,
        required: true,
        trim: true,
      },
      pincode: {
        type: String,
        required: true,
        trim: true,
      },
      phoneNumber: {
        type: String,
        required: true,
        trim: true,
      },
      fullAddress: {
        type: String,
        required: true,
        trim: true,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

//hashing the password before saving it to the database
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const hashedPassword = await bcrypt.hash(this.password, 10);
  this.password = hashedPassword;

  next();
});

//comparing password
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

//generate access token (it is short lived token)
userSchema.methods.generateToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.TOKEN_SECRET_KEY, {
      expiresIn: "5d",
    });
    return token;
  } catch (error) {
    console.log(error);
  }
};

module.exports = mongoose.model("user", userSchema);
