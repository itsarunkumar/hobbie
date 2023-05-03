const express = require("express");
const router = express.Router();
const tableController = require("../controllers/table.controller");

router.post("/add", tableController.addData);
router.put("/update/:id", tableController.updateData);
router.get("/get", tableController.getData);
router.delete("/delete/:id", tableController.deleteData);

module.exports = router;
