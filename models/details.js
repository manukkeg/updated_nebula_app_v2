const mongoose = require("mongoose");

const DetailsSchema = mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true,
    },
    youare: {
      type: String,
      required: true,
      trim: true,
    },
    contactnumber: {
        type: String,
        required: true,
        trim: true,
      },
    whatsappnumber: {
        type: String,
        required: true,
        trim: true,
      },
    location: {
         type: String,
         required: true,
         trim: true,
      },
    alstream: {
        type: String,
        required: true,
        trim: true,
      },
    course: {
         type: String,
         required: true,
      },
    remark: {
      type: String,
      required: true,
      trim: true,
    },
    scounselorname: {
        type: String,
        required: true,
        trim: true,
        },
});

const Details = mongoose.model("Details", DetailsSchema);
module.exports = { Details, DetailsSchema };
