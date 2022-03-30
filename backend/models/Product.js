const { Schema,model } = require('mongoose');
const ProductSchema = new Schema   (
    {

        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        },
        image_cover: {
            type: String,
            required: true
        },
        
        // user_id: 
        // { 
        //     type: Schema.Types.ObjectId, ref:'users' 
        // }
    }

);
module.exports = model("Product", ProductSchema);