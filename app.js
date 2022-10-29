const express = require(`express`);

const mongoose = require(`mongoose`);

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use(require(`./router/router`));

mongoose.connect(`mongodb+srv://ragab:ragab@cluster0.qxv40hl.mongodb.net/db`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(
    app.listen(port, () => {
        console.log(`app run on port ${port}`);
      })
).catch(error=>{
    throw new Error(`mongoose connection failed`)
})


