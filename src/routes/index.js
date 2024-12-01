import express from "express";
import rotasLivros from "./livroRoutes.js";

const routes = (app) => { 
    app.route("/").get( (req, res) => { res.status(200).send("Hello World!") } ); 
    app.use( express.json(), rotasLivros );
};

export default routes;
