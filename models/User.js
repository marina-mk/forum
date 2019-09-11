const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const { Schema } = mongoose;
const saltRounds = 10;

const userSchema = new Schema({
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

userSchema.pre("save", function pre(next) {
    if (this.isNew || this.isModified("password")) {
        bcrypt.hash(this.password, saltRounds, (err, hashedPassword) => {
            if (err) {
                next(err);
            } else {
                this.password = hashedPassword;
                next();
            }
        });
    } else {
        next();
    }
});

mongoose.model("users", userSchema);
