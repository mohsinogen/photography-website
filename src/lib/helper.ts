export interface PhotoMetadata {
    id: string;
    url: string;
    title: string;
    description: string;
    isFavorite: boolean;
    aspectRatio: number;
    width: number;
    height: number;
    blurData: string;
    country: string;
    countryCode: string;
    region: string;
    city: string;
    district: string;
    fullAddress: string;
    placeFormatted: string;
    make: string;
    model: string;
    lensModel: string;
    focalLength: number;
    focalLength35mm: number;
    fNumber: number;
    iso: number;
    exposureTime: number;
    exposureCompensation: number;
    latitude: number;
    longitude: number;
    gpsAltitude: number | null;
    dateTimeOriginal: string;
    createAt: string;
    updateAt: string;
}


export interface PhotoCollection {
    id: string;
    description: string | null;
    category: string;
    photoCount: number;
    createAt: string;
    updateAt: string;
    coverPhoto: PhotoMetadata;
    photos: PhotoMetadata[];
}


const photoMetadata1: PhotoMetadata = {
    id: "a27ac8b2-8f9d-4ff0-af7a-b5c01a895673",
    url: "https://photograph.ecarry.uk/photos/IMG_0167.jpg",
    title: "Osaka street",
    description: "Osaka street at night with neon lights.",
    isFavorite: false,
    aspectRatio: 1.4,
    width: 5327,
    height: 3795,
    blurData: "VaLg;ExaIUx]WB~qM{WAtRkCMxoLoJRjWB%LoJWAofjF",
    country: "Japan",
    countryCode: "JP",
    region: "Osaka",
    city: "Osaka",
    district: "Nipponbashi",
    fullAddress: "4-7-14, Nipponbashi, Naniwa, Osaka, Osaka 556-0005, Japan",
    placeFormatted: "Naniwa, Osaka, Osaka 556-0005, Japan",
    make: "SONY",
    model: "ILCE-7RM2",
    lensModel: "Sony E 50-400mm F4.5-6.3",
    focalLength: 400,
    focalLength35mm: 400,
    fNumber: 6.3,
    iso: 200,
    exposureTime: 0.0025,
    exposureCompensation: 0,
    latitude: 34.658875,
    longitude: 135.50586,
    gpsAltitude: null,
    dateTimeOriginal: "2024-10-31T09:49:21.000Z",
    createAt: "2025-01-12T11:34:12.565Z",
    updateAt: "2025-01-12T11:34:12.446Z"
  };
  
  const photoMetadata2: PhotoMetadata = {
    id: "b39df9c3-2d74-45fb-b112-46732fbb09fc",
    url: "https://photograph.ecarry.uk/photos/DSC07785.jpg",
    title: "Shibuya Crossing",
    description: "The busiest pedestrian crossing in the world.",
    isFavorite: true,
    aspectRatio: 1.5,
    width: 6000,
    height: 4000,
    blurData: "G3Lg;ExaIUx]WB~qM{WAtRkCMxoLoJRjWB%LoJWAofjF",
    country: "Japan",
    countryCode: "JP",
    region: "Tokyo",
    city: "Tokyo",
    district: "Shibuya",
    fullAddress: "Shibuya City, Tokyo, Japan",
    placeFormatted: "Shibuya, Tokyo, Japan",
    make: "Canon",
    model: "EOS R5",
    lensModel: "Canon RF 24-70mm F2.8",
    focalLength: 50,
    focalLength35mm: 50,
    fNumber: 2.8,
    iso: 400,
    exposureTime: 0.005,
    exposureCompensation: 0,
    latitude: 35.6595,
    longitude: 139.7006,
    gpsAltitude: 40,
    dateTimeOriginal: "2024-11-05T15:20:33.000Z",
    createAt: "2025-01-12T11:40:18.765Z",
    updateAt: "2025-01-12T11:40:18.567Z"
  };
  
  const photoCollection1: PhotoCollection = {
    id: "c8ed9bec-d628-47da-8b63-30038d43a76e",
    description: "A collection of street photography shots taken in Japan.",
    category: "Street",
    photoCount: 2,
    createAt: "2025-01-12T08:25:07.660Z",
    updateAt: "2025-01-12T11:59:15.045Z",
    coverPhoto: photoMetadata1,
    photos: [photoMetadata1]
  };
  
  const photoCollection2: PhotoCollection = {
    id: "d9123bcd-34ab-4a82-9f98-1e0a7c25fbb3",
    description: "Vibrant cityscapes capturing the urban life.",
    category: "Cityscapes",
    photoCount: 2,
    createAt: "2025-01-12T09:15:07.800Z",
    updateAt: "2025-01-12T12:10:45.120Z",
    coverPhoto: photoMetadata2,
    photos: [ photoMetadata1]
  };

  const photoCategories = [photoCollection1, photoCollection2]
  
  export { photoMetadata1, photoMetadata2, photoCategories };
  
