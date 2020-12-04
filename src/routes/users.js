const express = require('express');
const router = express.Router();
const usersController = require ('../controllers/usersController');
const multer = require('multer');


//Multer para guardar los avatars
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../../public/uploads/avatars'));
    },
    filename: function (req, file, cb) {
        console.log()
        cb(null, req.body.email + '-' + Date.now() + path.extname(file.originalname))
    }
})
   
var upload = multer({ storage: storage })

//Login
router.get('/login', usersController.login)

//Register
router.get('/register', usersController.registrar)
router.post('/register', usersController.save)

//Profile
router.get('/profile', usersController.perfil)

module.exports = router;