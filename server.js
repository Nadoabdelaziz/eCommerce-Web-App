const { request } = require('express');
const express=require('express');
const morgan =require('morgan');
const dotenv=require('dotenv');
// const bodyparser=require('body-parser');


dotenv.config({path:'config.env'})
const app=express();
const PORT =process.env.PORT|| 8080

//parse request to body-parser 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());app.use(morgan('tiny'));


// Load assets
app.use("/css", express.static(__dirname + 'assets/css'));
app.use("/img", express.static(__dirname + 'assets/img'));
app.use("/js", express.static(__dirname + 'assets/js'));

// app.use('assets/css',express.static(path.resolve(__dirname,"assets/css")))
// app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
// app.use('/js',express.static(path.resolve(__dirname,"assets/js")))



// set the view engine
app.set("view engine","ejs")


app.get('/',(req,res)=>{
    res.render('index');
})

app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});