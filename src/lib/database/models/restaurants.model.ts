import { MEAL_TYPES, SUBSCRIPTIONS } from "@/types";
import { Schema, model, models, Document } from "mongoose";

interface IPlan {
    planType: SUBSCRIPTIONS;
    price: number;
    isActive: boolean;
}

interface IMeal {
    name: string;
    description?: string;
    price: number;
    category: MEAL_TYPES;
    isActive: boolean;
}

interface IRestaurant extends Document {
    name: string;
    ownerId: Schema.Types.ObjectId;
    address: string;
    phone?: string;
    email?: string;
    plans: IPlan[];
    meals: IMeal[];
}

const RestaurantSchema = new Schema<IRestaurant>({
    name: { type: String, required: true },
    ownerId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    address: { type: String, required: true },
    phone: { type: String },
    email: { type: String },
    plans: [{
        planType: { type: String, enum: Object.values(SUBSCRIPTIONS), required: true },
        price: { type: Number, required: true },
        isActive: { type: Boolean, default: true }
    }],
    meals: [{
        name: { type: String, required: true },
        description: { type: String },
        price: { type: Number, required: true },
        category: { type: String, enum: Object.values(MEAL_TYPES), required: true },
        isActive: { type: Boolean, default: true }
    }]
}, { timestamps: true }); 

const Restaurant = models?.Restaurant || model<IRestaurant>('Restaurant', RestaurantSchema);
export default Restaurant;
