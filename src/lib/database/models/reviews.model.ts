import { Schema, model, Document, models } from 'mongoose';

interface IReview extends Document {
    userId: Schema.Types.ObjectId;
    restaurantId: Schema.Types.ObjectId;
    rating: number;
    comment?: string; 
}

const ReviewSchema = new Schema<IReview>({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    restaurantId: { type: Schema.Types.ObjectId, ref: 'Restaurant', required: true },
    rating: { type: Number, min: 0, max: 5, required: true }, 
    comment: { type: String }, 
}, { timestamps: true }); 

ReviewSchema.index({ userId: 1 });
ReviewSchema.index({ restaurantId: 1 });

export const Review = models?.Review || model<IReview>('Review', ReviewSchema);
export default Review;
