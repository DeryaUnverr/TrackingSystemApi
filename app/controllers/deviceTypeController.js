const pool = require("./../adapters/database/databasepg");

exports.getDeviceType = async (req, res) => {
    try {
      const results = await pool.query("SELECT * FROM devices_type");
    //   console.log(results)
      const devices = results.rows;
  
      res.status(200).json(devices);
    } catch (error) {
      res.status(401).send(error);
    }
  };
exports.addDeviceType=async (req, res) =>{
    try {
       
      await pool.query(`insert into devices_type(device_name,device_description,is_active) 
      values('${req.body.device_name}', '${req.body.device_description}',${req.body.is_active})`)
        res.send(` Add device type Successful! `)
    }
    catch (error){
        res.status(401).send(error.message)
    }

};

exports.deleteDeviceType=async  (req, res)=> {
  
    try {
        await pool.query(`delete from devices_type where id=${req.params.id}`)
        res.send(" Delete   Successful!")
    }
    catch (error){
        res.status(401).send(error.message)
    }
}


