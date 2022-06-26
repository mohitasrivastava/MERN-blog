import express from 'express';
import mongoose from 'mongoose';
import blogRouter from './routes/blog-routes';
import router from './routes/user-routes';
import cors from 'cors';
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/user', router);
app.use('/api/blog', blogRouter);
mongoose
  .connect(
    // 'mongodb+srv://admin:DWabEsNUlHNCDBhB@cluster0.utepzjn.mongodb.net/?blogmernretryWrites=true&w=majority'
    'mongodb+srv://mohita:dSzLtO0wKz5J0gu7@cluster0.xxncmfc.mongodb.net/blog?retryWrites=true&w=majority'
  )
  .then(() => app.listen(5000))
  .then(() =>
    console.log('Connected TO Database and Listening TO Localhost 5000')
  )
  .catch((err) => console.log(err));

//   // Config
// if (process.env.NODE_ENV === "PRODUCTION") {

//   app.use(express.static(path.join(__dirname, "frontend/build")));

//   app.get("*", (req, res) => {
//       res.sendFile(path.resolve(__dirname, "frontend/build/index.html"));
// });
// }

// // const app = express();
// const port = 5000;

// app.get('/', (req, res) => {
//   //middleware
//   res.send('Hello World!hey');
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
// DWabEsNUlHNCDBhB
// dSzLtO0wKz5J0gu7
