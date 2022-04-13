const { Schema,model } = require('mongoose');

const OrderSchema = new Schema   (
    {

        user_id: {
            type: Schema.Types.ObjectId, ref:'users' ,
            
        },
        liv_id: {
            default:null,
            type: Schema.Types.ObjectId, ref:'users' ,

        },
        orderItems: [
           {
               name: { type: String , required: true},
               qty: { type: Number , required: true},
               price: { type: Number , required: true},
               product: { 
                   type: Schema.Types.ObjectId, ref:'products' ,
                   required: true
                },
      
            }
        ],

        address: {type: String, required: true},
        
        total: {
            type: Number,
            required: true
        },
        status:{
            type:String,
            default:"new",
            enum:["new","inprogress", "inliv","delivred","done"]
        },
     
    },
    {
        timestamps: true,
    }

);
module.exports = model("Order", OrderSchema);