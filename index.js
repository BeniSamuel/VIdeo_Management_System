const express = require("express");
const videoRoutes = require("./Routes/video.js");

// server configuration
const app = express();
const port = process.env.PORT || 3000;

// handling routes
app.use("/api/upload", videoRoutes);

// port
app.listen(port, ()=>{
    console.log(`App is running at ${port}`)
});