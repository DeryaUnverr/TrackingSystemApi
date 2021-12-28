const pool = require("./../adapters/database/databasepg");

exports.getLocationList = async (req, res) => {
    try {
      const results = await pool.query("SELECT * FROM log_location");
    //   console.log(results)
      const locationList = results.rows;
  
      res.status(200).json(locationList);
    } catch (error) {
      res.status(401).send(error);
    }
  };
exports.addLocation=async (req, res) =>{
  const date=Date.now()
    try {
       
      await pool.query(`insert into log_location(vehicle_id,device_id,latitude,longitude,created_at) 
      values(${req.body.vehicle_id}, ${req.body.device_id}, '${req.body.latitude}', '${req.body.longitude},to_timestamp(${date}))`)
        res.send(`Successful! `)
    }
    catch (error){
        res.status(401).send(error.message)
    }

};