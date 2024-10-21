const { dataEnvironmentModel } = require("../model/environmentStatic");

const addValueDataEnvironment = async (req, res) => {
  try {
    const { h, t, gas, gas2, gas3, ppm } = req.query;
    const dataDbResponse = await dataEnvironmentModel.create({
      h,
      t,
      gas,
      gas2,
      gas3,
      ppm,
    });
    return res.status(200).json(dataDbResponse);
  } catch (e) {
    console.log("Add Value Environment Error:" + e);
    return res.status(500).json(e.toString());
  }
};

const getValueRecent = async (req, res) => {
  const page = req?.query?.page || 1;
  const limit = req?.query?.limit || 10;
  try {
    const dataDbResponse = await dataEnvironmentModel.paginate(
      {},
      { page: page, limit: limit }
    );
    return res.status(200).json(dataDbResponse);
  } catch (e) {
    console.log("Add Value Environment Error:" + e);
    return res.status(500).json(e.toString());
  }
};

const getAllDataEnvironment = async(req, res) => {
  try{
    const dataDbResponse = await dataEnvironmentModel.find({});
    return res.status(200).json(dataDbResponse);
  } catch(e) {
    console.log("Get all Data Environment Error:" + e);
    return res.status(500).json(e.toString());
  }
}

module.exports = {
  addValueDataEnvironment,
  getValueRecent,
  getAllDataEnvironment
};
