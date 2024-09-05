const express = require("express");
const { getBooking, getBookingCancel } = require("../controllers/bookingControllers");
const route = express.Router();

router.route('/movies/:id/book').post(getBooking);
router.rpute('/movies/:id/cancel').post(getBookingCancel)