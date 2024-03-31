const express = require("express");

const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);

const route = require("./routes/route");
app.use("/api/v1", route);
app.use(express.json());
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            *{
                font-family: Arial, Helvetica, sans-serif;
            }
            .container{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            .logo{
                margin-top: 4rem;
                display: flex;
                gap: 1rem;
            }
        </style>
        <script src="https://kit.fontawesome.com/6355b02d04.js" crossorigin="anonymous"></script>
    </head>
    <body>
        <div class="container">
            <div>
                <h1>Leetcode Analyzer</h1>
            </div>
            <div>
                API/{Leetcode_username}
            </div>
            <div class="logo">
                <a href="https://github.com/Anubhav-Ghosh1"><i class="fa-brands fa-github" style="color: #000000; font-size: 4rem;"></i></a>
                <a href="https://www.youtube.com/@AnubhavGhosh03"><i class="fa-brands fa-youtube" style="color: #fe1616; font-size: 4rem;"></i></a>
                <a href="https://www.linkedin.com/in/anubhav-ghosh11/"><i class="fa-brands fa-linkedin" style="color: #0091ff; font-size: 4rem;"></i></a>
            </div>
        </div>
    </body>
    </html>
    `);
});

require("dotenv").config();

app.listen(process.env.PORT, () => {
  console.log(`Listening at port ${process.env.PORT}`);
});
