const express=require('express')
const vehicleController=require("../controllers/vehicleController")

const router =express.Router()

router.route("/vehicle_list").get(vehicleController.getVehicles)
router.route("/vehicle_add").post(vehicleController.Addvehicles)
router.route("/vehicle_update/:id").patch(vehicleController.UpdateVehicles)
router.route("/vehicle_delete/:id").delete(vehicleController.DeleteVehicles)

module.exports=router