const express = require("express");

const app = express();

console.dir(app);

let port = 8097;
app.listen(port, ()=>{
    console.log(`app listening on port${port}`);
})

// app.use((req, res)=>{
//     console.log("request resolved");

    /*
    // request send
    // res.send("this is a basic response")

    // html
    const code = "<h1>Fruites</h1> <ul><li>Apple</li> <li>banana</li></ul>"
    res.send(code)

    const obj= {
        Fruite: "apple, Banana",
        car: "Farari, thar, RangRover",
        Course: "Web Tech, PhP, App tech"
    }
    res.send(console.log(obj))

    */

 
// })


// Routing

app.get("/", (req, res)=>{
    res.send("Root Contacted path");
});
app.get("/Cars", (req, res)=>{
    res.send("Root Car path");
});
app.get("/fruits", (req, res)=>{
    res.send("Root Fruites path");
});
app.get("/course", (req, res)=>{
    res.send("Root Course path");
});
app.get("/Durvesh", (req, res)=>{
    res.send("Root Durvesh kumar path");
});

app.get("*", (req, res)=>{
    res.send("This path does not exist")
})



app.post("/", (req, res)=>{
    res.send("you send a post request to root")
})