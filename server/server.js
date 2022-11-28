require('dotenv').config(); // ALLOWS ENVIRONMENT VARIABLES TO BE SET ON PROCESS.ENV SHOULD BE AT TOP
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(express.json()); // parse json bodies in the request object
app.use(
  cors({
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST'],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    key: 'id',
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * (24 * 7),
    },
  })
);
// Redirect requests to endpoint starting with /posts to postRoutes.js
app.use('/posts', require('./routes/postRoutes'));
app.use('/users', require('./routes/userRoutes'));

// Global Error Handler. IMPORTANT function params MUST start with err
app.use((err, req, res, next) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);

  res.status(500).json({
    error: 'Something went rely wrong',
  });
});

// Listen on pc port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
