const figlet = require("figlet");

figlet(
    "Durvesh kumar", function (error, data) {
        
        if(error){
            console.log("Somthing Wrong");
            console.dir(error);
            return;
        }
        console.log(data);   
/*
        ____                            _       _                               
        |  _ \ _   _ _ ____   _____  ___| |__   | | ___   _ _ __ ___   __ _ _ __ 
        | | | | | | | '__\ \ / / _ \/ __| '_ \  | |/ / | | | '_ ` _ \ / _` | '__|
        | |_| | |_| | |   \ V /  __/\__ \ | | | |   <| |_| | | | | | | (_| | |   
        |____/ \__,_|_|    \_/ \___||___/_| |_| |_|\_\\__,_|_| |_| |_|\__,_|_|
*/
    }
)