const express=require('express')
const deviceController=require("../controllers/deviceController")

const router =express.Router()


router.route("/device_list").get(deviceController.GetDevices)
router.route("/device_add").post(deviceController.AddDevices)
router.route("/device_update/:id").patch(deviceController.UpdateDevices)
router.route("/device_delete/:id").delete(deviceController.DeleteDevices)


module.exports=router