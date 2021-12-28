const express=require('express')
const deviceTypeController=require("../controllers/deviceTypeController")

const router =express.Router()

router.route("/deviceType_list").get(deviceTypeController.getDeviceType)
router.route("/deviceType_add").post(deviceTypeController.addDeviceType)
router.route("/deviceType_delete/:id").delete(deviceTypeController.deleteDeviceType)

module.exports=router