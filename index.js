import express from "express"
import cors from "cors"
import bp from "body-parser"


const port = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(bp.json());

app.get("/",(req,res)=>{
    res.send("Welcome to testing")
})


app.listen(port,()=>{
    console.log("Listening on "+port);
})