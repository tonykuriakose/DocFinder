import express from 'express'
const app = express();
import "dotenv/config"

app.get('/',(req,res)=>{

    res.send("API is working")

})

const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log("Server running");
    
})