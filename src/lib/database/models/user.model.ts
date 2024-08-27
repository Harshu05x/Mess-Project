import { Schema, model, Document, models } from 'mongoose';
import { ROLES } from "@/types/index";

interface IUser extends Document {
    clerkId: string;
    name: string;
    email: string;
    password: string;
    role: ROLES;
    phone?: string;
    subscriptions: Schema.Types.ObjectId[];
}

const UserSchema = new Schema<IUser>({
    clerkId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: Object.values(ROLES), default: ROLES.CUSTOMER },
    phone: { type: String },
    subscriptions: [{ type: Schema.Types.ObjectId, ref: 'Subscription' }]
}, { timestamps: true }); 

UserSchema.index({ email: 1 });
UserSchema.index({ clerkId: 1 });

const User = models?.User || model<IUser>('User', UserSchema);

export default User;
