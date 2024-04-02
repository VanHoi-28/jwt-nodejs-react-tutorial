import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRouter from './routers/web';

require("dotenv").config();
const app = express();

//config view engine
configViewEngine(app);

//init web router
initWebRouter(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log('>>. JWT Backend is running on the port ' + PORT);
});