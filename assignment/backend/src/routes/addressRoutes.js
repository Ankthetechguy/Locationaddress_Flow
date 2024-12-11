const express = require("express");
const { addAddress, getAddresses } = require("../controllers/addressController");

const router = express.Router();

router.post("/address", addAddress);
router.get("/addresses", getAddresses);

module.exports = router;
