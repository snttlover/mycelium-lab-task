const TokenModel = require("../models/Token");

module.exports.getTokens = async (req, res) => {
  try {
    const tokens = await TokenModel.find();
    res.send({
      data: tokens,
      responseStatus: {
        status: 200,
        error: false,
        message: "Successful request",
      },
    });
  } catch (error) {
    res.send({ data: {}, status: 500, error: true, message: error });
  }
};

module.exports.setToken = async (req, res) => {
  try {
    const { id, name, symbol } = req.body;

    const token = new TokenModel({ id, name, symbol });
    await token.save();
    res.send({
      data: token,
      responseStatus: {
        status: 200,
        error: false,
        message: "Successfully created",
      },
    });
  } catch (error) {
      console.log(error)
    res.send({ data: {}, status: 500, error: true, message: error });
  }
};

module.exports.deleteToken = async (req, res) => {
  try {
    const { id } = req.params;
    await TokenModel.deleteOne({ id });
    res.send({
      data: {},
      responseStatus: {
        status: 200,
        error: false,
        message: "Successfully deleted",
      },
    });
  } catch (error) {
    res.send({ data: {}, status: 500, error: true, message: error });
  }
};
