import dotenv from "dotenv";
import connectdb from "./db/index.js";
import { app } from "./app.js";


dotenv.config({
    path:"./env"
})


connectdb()
// app.listen
// console.log(app())
.then(()=>{

    app.listen( process.env.PORT || 8000 , ()=>{
                console.log(`server is running on port ${process.env.PORT}`);
            })
  
            
})   