import mongoose from "mongoose";

const riderSchema = new mongoose.Schema({
    name:{type:String, required:false},
    date:{type:String, required:true},
    is_garantee:{type:Boolean, required:false},
    smart_inbound_sop:{type:Number, required:false},
    is_report:{type:Boolean, default:false},
})

const riderModel = mongoose.models.rider || mongoose.model('rider', riderSchema)

export default riderModel