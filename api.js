const router=require("express").Router();
const login = require("../controllers/login");
const profil = require("../controllers/profil");
// const todolist=require("../controllers/todolist")
// var task=require("../controllers/register")
const image=require("../controllers/imag")

// router.post('/register',login.register)
router.post('/login',login.login)
router.post('/upDataUser/:userId',profil.upDataUser)
router.get('/deleteUser/:id',profil.deleteUser)
// router.post('/createTask',todolist.createTask)
router.post('/register',login.register)
router.get('/getImage/:Id',image.getImage)
router.get('/getUrl/:Id',image.getUrl)
router.post('/addImage/:Id',image.addImage)
router.get('/getImages/:Id',image.getImages)
router.get('/getAllUsers',login.getAllUsers)
router.get('/viewImg/:Id',image.viewImg)
module.exports=router;