const { Schema,model } = require('mongoose');

const OrderSchema = new Schema   (
    {

        user_id: {
            type: Schema.Types.ObjectId, ref:'users' ,
            required: true
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
                //    image: { type: String , required: true},
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
        // paymentMethod : {
        //     type : String,
        //     required: true,
        //     default: "Paypal"
        // },
        // paymentResult: {
        //     id: {type : String },
        //     status : { type : String},
        //     update_time: { type : String},
        //     email_address: { type: String }
        // },
        // taxPrice: {
        //     type : Number,
        //     required: true,
        //     default: 0.0,
        // },
        // shippingPrice: {
        //     type: Number,
        //     required: true,
        //     default: 0.0
        // },
        // isPaid: {
        //     type : Boolean,
        //     required: true,
        //     default: false
        // },
        // paidAt: {
        //     type: Date,
        // },
        // isDelivered: {
        //     type: Boolean,
        //     required: true,
        //     default: false
        // },
        // deliveredAt: {
        //     type: Date
        // }
    },
    {
        timestamps: true,
    }

);
module.exports = model("Order", OrderSchema);

// export default Order;