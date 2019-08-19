import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

app.get("/persons", (req, res, next) => {
    res.status(200).json({
        "persons": [
            {
                "id": 10,
                "name": "John Doe"
            },
            {
                "id": 11,
                "name": "Sarah Connors"
            }
        ]
    })
});


export default app;
