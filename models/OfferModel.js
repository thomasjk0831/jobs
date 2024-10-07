import mongoose from "mongoose";

const OfferSchema = new mongoose.Schema({
    company: String,
    position: String,
    OfferStatus: {
        type:String,
        enum:Object.values(Offer_STATUS),
        default: Offer_STATUS.PENDING
    },
    OfferType: {
        type:String,
        enum:Object.values(Offer_TYPE),
        default: Offer_TYPE.FULL_TIME
    },
    OfferLocation: {
        type:String,
        default: 'my city'
    }
  },
  { timestamps: true}
)

export default mongoose.model('Offer', OfferSchema)