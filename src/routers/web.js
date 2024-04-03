import express from 'express';
import homeController from '../controller/homeController';

const router = express.Router();


/**
 * 
 * @param {*} app express app 
 */
const initWebRouter = (app) => {

    //path, handle
    router.get("/", homeController.handleHelloWorld)
    router.get("/user", homeController.handleUserPage)
    router.post("/user/create-user", homeController.handleCreateNewUser)

    return app.use("/", router);
}

export default initWebRouter;

