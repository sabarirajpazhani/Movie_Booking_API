const express = require("express");
const { getBooking, getBookingCancel } = require("../controllers/bookingControllers");
const router = express.Router();

router.route('/movies/:id/book').post(getBooking);
router.route('/movies/:id/cancel').post(getBookingCancel);

module.exports=router;