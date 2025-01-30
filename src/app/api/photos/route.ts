import dbConnect from '@/db/db';
import { PhotoModel } from '@/models/photoModel';
import { NextResponse } from 'next/server';

// GET: Fetch photos
export async function GET() {
  try {
    await dbConnect();
    const photos = await PhotoModel.find({});
    return NextResponse.json(photos);
  } catch (error) {
    console.log('error', error);
    
    return NextResponse.json({ message: 'Error fetching photos' }, { status: 500 },);
  }
}

// POST: Create a new photo
export async function POST(req: Request) {
  try {
    await dbConnect();
    const photoData = await req.json();
    const newPhoto = new PhotoModel(photoData);
    const savedPhoto = await newPhoto.save();
    return NextResponse.json(savedPhoto, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Error creating photo' }, { status: 500 });
  }
}
