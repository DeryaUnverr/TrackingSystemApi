const pool = require("./../adapters/database/databasepg");

exports.getTempList = async (req, res) => {
    try {
      const results = await pool.query("SELECT * FROM log_temperature");
    //   console.log(results)
      const tempList = results.rows;
  
      res.status(200).json(tempList);
    } catch (error) {
      res.status(401).send(error);
    }
  };
exports.addTemp=async (req, res) =>{
  const date=Date.now()
  console.log(date)
    try {
      await pool.query(`insert into log_temperature(vehicle_id,device_id,read_data,created_at) 
      values(${req.body.vehicle_id}, ${req.body.device_id}, '${req.body.read_data}',to_timestamp(${date}))`)
        res.send(`Successful! `)
    }
    catch (error){
        res.status(401).send(error.message)
    }

};