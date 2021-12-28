const express = require("express");
const app = express();
const vehicleRoute =require("./app/routes/vehicleRoute")
const deviceRoute=require("./app/routes/deviceRoute")
const deviceTypeRoute=require("./app/routes/deviceTypeRoute")
const logTemperatureRoute=require("./app/routes/logTemperatureRoute")
const logLocationRoute=require("./app/routes/logTemperatureRoute")
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use("/vehicle",vehicleRoute)
app.use("/device",deviceRoute)
app.use('/deviceType',deviceTypeRoute);
app.use('/log_temperature',logTemperatureRoute);
app.use('/log_location',logLocationRoute);


app.listen("3000", function (req, res) {
  console.log(`server starterd on ${PORT}`);
});