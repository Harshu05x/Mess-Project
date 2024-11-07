import { SUBSCRIPTION_PLANS_STATUS, SUBSCRIPTIONS } from '@/types';
import { Schema, model, Document, models } from 'mongoose';

interface ISubscription extends Document {
    userId: Schema.Types.ObjectId;
    restaurantId: Schema.Types.ObjectId;
    planType: SUBSCRIPTIONS;
    startDate: Date;
    endDate: Date;
    status: SUBSCRIPTION_PLANS_STATUS;
}

const SubscriptionSchema = new Schema<ISubscription>({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    restaurantId: { type: Schema.Types.ObjectId, ref: 'Restaurant', required: true },
    planType: { type: String, enum: Object.values(SUBSCRIPTIONS), required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    status: { type: String, enum: Object.values(SUBSCRIPTION_PLANS_STATUS), default: SUBSCRIPTION_PLANS_STATUS.ACTIVE }
}, { timestamps: true }); 

SubscriptionSchema.index({ userId: 1 });
SubscriptionSchema.index({ restaurantId: 1 });

const Subscription = models?.Subscription || model<ISubscription>('Subscription', SubscriptionSchema);
export default Subscription;
