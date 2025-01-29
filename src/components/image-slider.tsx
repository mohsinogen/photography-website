"use client";

// External dependencies
import { memo } from "react";

// UI Components
import { Skeleton } from "./ui/skeleton";
import Carousel from "./Carousel";
import BlurImage from "./blur-image";

// HOOKS
import { useGetPhotos } from "@/features/photos/api/use-get-photos";

const ImageSlider = memo(function ImageSlider() {
  const { data: photos, isLoading } = {
    data: [
      {
        "id": "5fdlll27611-7785-48bb-804e-a209e56bb354",
        "url": "https://photograph.ecarry.uk/photos/IMG_02031.jpg",
        "title": "Chaotiangong Wenchuang Exhib. Guan",
        "description": "Chaotiangong Wenchuang Exhib. Guan",
        "isFavorite": true,
        "aspectRatio": 0.67,
        "width": 5110,
        "height": 7662,
        "blurData": "VsB=I]ozbvofWByZoza}ofayIAWVjFf8bHeSWBbbaya}",
        "country": "People's Republic of China",
        "countryCode": "CN",
        "region": "Fujian",
        "city": "Xiamen",
        "district": "Huli District",
        "fullAddress": "361011, Huli District, Xiamen, Fujian, People's Republic of China",
        "placeFormatted": "Huli District, Xiamen, Fujian, People's Republic of China",
        "make": "SONY",
        "model": "ILCE-7RM2",
        "lensModel": "Sony E 50-400mm F4.5-6.3",
        "focalLength": 50,
        "focalLength35mm": 50,
        "fNumber": 4.5,
        "iso": 200,
        "exposureTime": 0.0005,
        "exposureCompensation": 0,
        "latitude": 24.525478,
        "longitude": 118.10438,
        "gpsAltitude": null,
        "dateTimeOriginal": "2024-11-11T15:38:23.000Z",
        "createAt": "2025-01-12T07:22:20.038Z",
        "updateAt": "2025-01-12T07:23:51.174Z"
    },
      {
        "id": "5fd27611-7785-48bb-804e-a209e56bb354",
        "url": "https://photograph.ecarry.uk/photos/IMG_02031.jpg",
        "title": "Chaotiangong Wenchuang Exhib. Guan",
        "description": "Chaotiangong Wenchuang Exhib. Guan",
        "isFavorite": true,
        "aspectRatio": 0.67,
        "width": 5110,
        "height": 7662,
        "blurData": "VsB=I]ozbvofWByZoza}ofayIAWVjFf8bHeSWBbbaya}",
        "country": "People's Republic of China",
        "countryCode": "CN",
        "region": "Fujian",
        "city": "Xiamen",
        "district": "Huli District",
        "fullAddress": "361011, Huli District, Xiamen, Fujian, People's Republic of China",
        "placeFormatted": "Huli District, Xiamen, Fujian, People's Republic of China",
        "make": "SONY",
        "model": "ILCE-7RM2",
        "lensModel": "Sony E 50-400mm F4.5-6.3",
        "focalLength": 50,
        "focalLength35mm": 50,
        "fNumber": 4.5,
        "iso": 200,
        "exposureTime": 0.0005,
        "exposureCompensation": 0,
        "latitude": 24.525478,
        "longitude": 118.10438,
        "gpsAltitude": null,
        "dateTimeOriginal": "2024-11-11T15:38:23.000Z",
        "createAt": "2025-01-12T07:22:20.038Z",
        "updateAt": "2025-01-12T07:23:51.174Z"
    },
    {
      "id": "52ce6c66-8469-4ccf-bc57-11b7f683886f",
      "url": "https://photograph.ecarry.uk/photos/DSC07962.jpg",
      "title": "Kuromon Ichiba Market",
      "description": "Kuromon Ichiba Market",
      "isFavorite": true,
      "aspectRatio": 1.5,
      "width": 7914,
      "height": 5279,
      "blurData": "VSE{U=-UR,RkM{~Wn$NGs:WBNwS4Rkt7fkbws.nNazR*",
      "country": "Japan",
      "countryCode": "JP",
      "region": "Osaka",
      "city": "Osaka",
      "district": "Nipponbashi",
      "fullAddress": "2-5-1, Nipponbashi, Chuo, Osaka, Osaka 542-0073, Japan",
      "placeFormatted": "Chuo, Osaka, Osaka 542-0073, Japan",
      "make": "SONY",
      "model": "ILCE-7RM2",
      "lensModel": "Viltrox 40mm F2.5 FE",
      "focalLength": 40,
      "focalLength35mm": 40,
      "fNumber": 6.3,
      "iso": 100,
      "exposureTime": 0.008,
      "exposureCompensation": 0,
      "latitude": 34.665314,
      "longitude": 135.50592,
      "gpsAltitude": null,
      "dateTimeOriginal": "2024-11-05T13:46:21.000Z",
      "createAt": "2025-01-12T11:59:15.102Z",
      "updateAt": "2025-01-12T11:59:14.951Z"
  }
    ],
    isLoading: false,
  };

  if (!photos) {
    return (
      <div className="size-full overflow-hidden rounded-xl">
        <img
          src="/placeholder.svg"
          alt="Image"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    );
  }

  if (isLoading) {
    return <Skeleton className="size-full" />;
  }

  const favoritePhoto =
    photos.filter((photo) => photo.isFavorite === true) || photos.slice(0, 5);

  return (
    <Carousel
      className="absolute top-0 left-0 w-full h-full rounded-xl"
      containerClassName="h-full"
    >
      {favoritePhoto.map((photo, index) => {
        const shouldPreload = index < 1;

        return (
          <div key={photo.id} className="flex-[0_0_100%] h-full relative">
            <BlurImage
              src={photo.url}
              alt={photo.title}
              fill
              priority={shouldPreload}
              loading={shouldPreload ? "eager" : "lazy"}
              blurhash={photo.blurData}
              className="w-full h-full object-cover"
            />
          </div>
        );
      })}
    </Carousel>
  );
});

export { ImageSlider };
