
interface PhotoMetadata {
    id: string;
    url: string;
    width: number;
    height: number;
    blurData?: string; // Optional blur data
  }
  
  interface Location {
    country: string;
    city: string;
    latitude?: number; // Optional latitude
    longitude?: number; // Optional longitude
    gpsAltitude?: number; // Optional altitude
  }
  
  interface ExifData {
    make?: string; // Optional make
    model?: string; // Optional model
    lensModel?: string; // Optional lens model
    focalLength?: number; // Optional focal length
    focalLength35mm?: number; // Optional 35mm focal length
    fNumber?: number; // Optional f-number
    iso?: number; // Optional ISO
    exposureTime?: number; // Optional exposure time
    exposureCompensation?: number; // Optional exposure compensation
  }
  
  interface Photo {
    id: string;
    url: string;
    title: string;
    description?: string; // Optional description
    isFavorite: boolean;
    aspectRatio: number;
    width: number;
    height: number;
    blurData?: string; // Optional blur data
    location?: Location; // Group location data
    exif?: ExifData; // Group EXIF data
    createdAt: Date;
    updatedAt: Date;
  }
  
  interface Category {
    id: string;
    categoryName: string;
    description?: string; // Optional description
    createdAt: Date;
    updatedAt: Date;
    coverPhoto: PhotoMetadata;
    photos: Photo[]; //  Consider storing only photo IDs and referencing them separately for large datasets
  }