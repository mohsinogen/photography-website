import { photoSchema } from "./photoModel";
import mongoose, { Schema, Document } from 'mongoose';

const categorySchema = new Schema<Category>({
    id: { type: String, required: true, unique: true },
    categoryName: { type: String, required: true },
    description: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    coverPhoto: {
        id: { type: String, required: true },
        url: { type: String, required: true },
        width: { type: Number, required: true },
        height: { type: Number, required: true },
        blurData: String,
    },
    photos: [photoSchema], //  Consider storing only photo IDs and referencing them separately for large datasets
});

const CategoryModel = mongoose.model<Category>('Category', categorySchema);


export { CategoryModel };
