const express=require('express')
const logTemperatureController=require("../controllers/logTemperatureController")

const router =express.Router()


router.route("/temp_list").get(logTemperatureController.getTempList)
router.route("/temp_add").post(logTemperatureController.addTemp)



module.exports=router