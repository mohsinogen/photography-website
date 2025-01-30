import mongoose, { Schema, Document } from 'mongoose';

export const photoSchema = new Schema<Photo>({
    id: { type: String, required: true, unique: true },
    url: { type: String, required: true },
    title: { type: String, required: true },
    description: String,
    isFavorite: { type: Boolean, required: true },
    aspectRatio: { type: Number, required: true },
    width: { type: Number, required: true },
    height: { type: Number, required: true },
    blurData: String,
    location: {
        country: String,
        city: String,
        latitude: Number,
        longitude: Number,
        gpsAltitude: Number,
    },
    exif: {
        make: String,
        model: String,
        lensModel: String,
        focalLength: Number,
        focalLength35mm: Number,
        fNumber: Number,
        iso: Number,
        exposureTime: Number,
        exposureCompensation: Number,
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const PhotoModel = mongoose.model<Photo>('Photo', photoSchema);


export { PhotoModel };
