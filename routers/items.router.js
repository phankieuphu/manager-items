const routers = require("express").Router()
const itemControllers = require("../controllers/item.controller");
const authenticationMiddleware = require("../middleware/authentication.middleware")
routers.get('/getList',authenticationMiddleware ,itemControllers.getAllItems);
routers.post('/create',authenticationMiddleware, itemControllers.createItem);

routers.put('/update/:id',authenticationMiddleware, itemControllers.updateItem);

routers.delete('/delete/:id',authenticationMiddleware, itemControllers.deleteItem);


module.exports = routers;
