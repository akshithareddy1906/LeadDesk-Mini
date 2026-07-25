const protect = require("../middleware/authMiddleware");

const express =
require("express");


const router =
express.Router();



const {

createLead,
getLeads,
updateStatus

}
=
require("../controllers/leadController");



const {

validateLead,
checkValidation

}
=
require("../middleware/validation");





// Public Form

router.post(

"/",

validateLead,

checkValidation,

createLead

);




// Admin

router.get(
  "/",
  protect,
  getLeads
);

router.patch(
  "/:id",
  protect,
  updateStatus
);



module.exports =
router;