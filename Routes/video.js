const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "../Uploads"});
const router = express.Router();
const { uploadVideo, getAvideo, deleteVideo, updateVideo } = require("../Controllers/video.js");

router.post("/", upload.single("file"), uploadVideo);
router.get("/:filename", getAvideo);
router.delete("/:filename", deleteVideo);
router.put("/:filename", upload.single("file"), updateVideo);


module.exports = router;