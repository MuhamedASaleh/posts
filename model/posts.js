const mongoose = require(`mongoose`);

const postSchema = mongoose.Schema(
  {
    title: { type: String, requires: true },
    description: { type: String, requires: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(`post`, postSchema);
