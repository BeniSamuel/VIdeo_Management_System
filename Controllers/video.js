const multer = require("multer");
const upload = multer({dest: "../Uploads"});
const fs = require("fs");

exports.uploadVideo = async (req, res) => {
    res.status(200).send(req.file);
}

exports.getAvideo = async (req,res) => {
    
    const file = req.params.filename;
    const filePath = `../Uploads/${file}`;

    try{
        await fs.promises.access(filePath);
        res.status(200).download(filePath);
    }
    catch(error) {
        console.error(error);
        res.status(404).send("File Not Found!")
    }
}

exports.deleteVideo = async (req, res) => {
    const file = req.params.filename;
    const filePath = `../Uploads/${file}`;

    try {
        await fs.promises.unlink(filePath);
        res.status(200).send("Deleted Successfully!!");
    }
    catch (error){
        console.error(error);
        res.status(404).send("File Not Found!");
    }
}

exports.updateVideo = async (req, res) => {

    const file = req.params.filename;
    const filePath = `../Uploads/${file}`;

    try {
        await fs.promises.unlink(filePath);
        res.status(200).send("Updated Successfully!");
    }
    catch (error) {
        console.error(error);
        res.status(404).send("File Not Found!!");
    }
}