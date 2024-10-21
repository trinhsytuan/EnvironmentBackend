const { default: mongoose } = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const dataEnvironmentSchema = new mongoose.Schema(
  {
    h: { type: String},
    t: { type: String},
    ppm: { type: String},
    gas: { type: String},
    gas2: { type: String},
    gas3: { type: String},

  },
  { timestamps: true }
);
dataEnvironmentSchema.plugin(mongoosePaginate);
const dataEnvironmentModel = mongoose.model("environmentStatic", dataEnvironmentSchema);
module.exports = { dataEnvironmentModel };