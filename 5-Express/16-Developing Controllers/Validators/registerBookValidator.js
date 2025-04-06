const Validator = require("fastest-validator");

const v = new Validator();

const schema = {
    title: {
        type: "string",
        min: 3,
        max: 40,
    },

    author: {
        type: "string",
        min: 3,
        max: 15,
    },
    price: {
        type: "number",
        
    },
    
}


const chick=v.compile(schema);

module.exports=chick;