import { Schema, model, Document, models } from 'mongoose';
import { PAYMENT_STATUS } from '@/types';

interface IPaymentHistory extends Document {
    userId: Schema.Types.ObjectId;
    subscriptionId: Schema.Types.ObjectId;
    amount: number;
    paymentDate: Date;
    status: PAYMENT_STATUS;
    razorpayPaymentId: string; 
    razorpayOrderId: string; 
}

const PaymentHistorySchema = new Schema<IPaymentHistory>({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    subscriptionId: { type: Schema.Types.ObjectId, ref: 'Subscription', required: true },
    amount: { type: Number, required: true },
    paymentDate: { type: Date, required: true },
    status: { type: String, enum: Object.values(PAYMENT_STATUS), default: PAYMENT_STATUS.PENDING },
    razorpayPaymentId: { type: String, required: true },
    razorpayOrderId: { type: String, required: true } 
}, { timestamps: true }); 

PaymentHistorySchema.index({ userId: 1 });
PaymentHistorySchema.index({ subscriptionId: 1 });
PaymentHistorySchema.index({ status: 1 });
PaymentHistorySchema.index({ paymentId: 1 }); 

const PaymentHistory = models?.PaymentHistory || model<IPaymentHistory>('PaymentHistory', PaymentHistorySchema);
export default PaymentHistory;
