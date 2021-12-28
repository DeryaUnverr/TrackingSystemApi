// exports.getVehicles=(req,res)=>{

//     res.send("all vehicle")
// }
const pool = require("./../adapters/database/databasepg");

exports.getVehicles = async (req, res) => {
    try {
      const results = await pool.query("SELECT * FROM vehicles");
    //   console.log(results)
      const vehicles = results.rows;
  
      res.status(200).json(vehicles);
    } catch (error) {
      res.status(401).send(error);
    }
  };
exports.Addvehicles=async (req, res) =>{
    try {
       
      await pool.query(`insert into vehicles(vehicle_plate,current_status,is_active)
                       values('${req.body.vehicle_plate}', ${req.body.current_status}, ${req.body.is_active})`)
        res.send(` Add Vehicle Successful! Added License Plate ->${req.body.vehicle_plate}`)
    }
    catch (error){
        res.status(401).send(error.message)
    }

};

 exports.UpdateVehicles=async  (req, res)=> {
    
    try {
         
        await pool.query(`UPDATE vehicles SET vehicle_plate='${req.body.vehicle_plate}', current_status=${req.body.current_status}, is_active=${req.body.is_active} where id=${req.params.id}`)
        res.send(" Update Successful!")
    }
    catch (error){
        res.status(401).send(error.message)
    }
}
exports.DeleteVehicles=async  (req, res)=> {
  
    try {
        await pool.query(`delete from vehicles where id=${req.params.id}`)
        res.send(" Delete Successful!")
    }
    catch (error){
        res.status(401).send(error.message)
    }
}


