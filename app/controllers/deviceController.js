const pool = require("./../adapters/database/databasepg");

exports.GetDevices = async (req, res) => {
    try {
      const results = await pool.query("SELECT * FROM devices");
    //   console.log(results)
      const devices = results.rows;
  
      res.status(200).json(devices);
    } catch (error) {
      res.status(401).send(error);
    }
  };
exports.AddDevices=async (req, res) =>{
    try {
       
      await pool.query(`insert into devices(vehicle_id,device_type_id,device_name,is_online,is_active) 
      values(${req.body.vehicle_id}, ${req.body.device_type_id}, '${req.body.device_name}',${req.body.is_online},${req.body.is_active})`)
        res.send(` Add device Successful! `)
    }
    catch (error){
        res.status(401).send(error.message)
    }

};

 exports.UpdateDevices=async  (req, res)=> {
    
    try {
         
        await pool.query(`update devices set vehicle_id=${req.body.vehicle_id},device_type_id=${req.body.device_type_id},device_name='${req.body.device_name}',is_online=${req.body.is_online},is_active=${req.body.is_active} where id=${req.body.id}`)
        res.send(" Update Successful!")
    }
    catch (error){
        res.status(401).send(error.message)
    }
}
exports.DeleteDevices=async  (req, res)=> {
  
    try {
        await pool.query(`delete from devices where id=${req.params.id}`)
        res.send(" Delete Successful!")
    }
    catch (error){
        res.status(401).send(error.message)
    }
}


