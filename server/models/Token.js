const { Schema, model } = require('mongoose');

const TokenSchema = new Schema(
  {
    id: { type: String, required: true },
    symbol: { type: String, required: true },
    name: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const TokenModel = model('Token', TokenSchema);

module.exports = TokenModel;
