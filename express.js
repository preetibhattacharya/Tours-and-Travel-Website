const express= require('express')
const app= express()
const port=80
app.post('/', (req,res)=>{
    res.send('my frst post request')
})
app.listen(
    port, ()=>{
        console.log(
            `listening to ${port}`
        )
    }
)