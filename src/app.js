import express from "express"
import conectDatabase from "./config/db_connect.js";
import routes from "./routes/index.js";

const conection = await conectDatabase();

conection.on("error", (erro)=>{
    console.error("Erro de conexão: ", erro);
});
conection.once("open", ()=>{
    console.log("Conexão com Mongo realizada!");
});

const app = express();
routes(app);

export default app;
