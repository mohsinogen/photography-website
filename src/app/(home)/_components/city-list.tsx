"use client";

import { useGetCitySets } from "@/features/city/api/use-get-city-sets";
import CityCard from "./city-card";
import CameraLoader from "@/components/camera-loader";

const CityList = () => {
  const { data: cityList, isLoading } = {data:[{
    "id": "09d7f823-d0cb-4ea9-a807-416baeaffa5a",
    "description": null,
    "country": "Japan",
    "countryCode": "JP",
    "city": "Kyoto",
    "coverPhotoId": "337a544a-22f4-4450-85a4-74f16b0ac535",
    "photoCount": 32,
    "createAt": "2025-01-12T08:36:14.984Z",
    "updateAt": "2025-01-12T11:58:26.878Z",
    "coverPhoto": {
        "id": "337a544a-22f4-4450-85a4-74f16b0ac535",
        "url": "https://photograph.ecarry.uk/photos/IMG_0195.jpg",
        "title": "Ninenzaka",
        "description": "Ninenzaka",
        "isFavorite": false,
        "aspectRatio": 0.67,
        "width": 5304,
        "height": 7952,
        "blurData": "V#Hy5gxut6oeV??^WCWCofjF%NoMRkWDbHsmoeoeofoz",
        "country": "Japan",
        "countryCode": "JP",
        "region": "Kyoto",
        "city": "Kyoto",
        "district": "Uedacho",
        "fullAddress": "84-1, Uedacho, Higashiyama, Kyoto, Kyoto 605-0852, Japan",
        "placeFormatted": "Higashiyama, Kyoto, Kyoto 605-0852, Japan",
        "make": "SONY",
        "model": "ILCE-7RM2",
        "lensModel": "Sony E 50-400mm F4.5-6.3",
        "focalLength": 148,
        "focalLength35mm": 148,
        "fNumber": 5.6,
        "iso": 160,
        "exposureTime": 0.00625,
        "exposureCompensation": 0,
        "latitude": 34.998646,
        "longitude": 135.7779,
        "gpsAltitude": null,
        "dateTimeOriginal": "2024-11-04T11:58:59.000Z",
        "createAt": "2025-01-12T08:36:14.915Z",
        "updateAt": "2025-01-12T08:36:14.858Z"
    },
    "photos": [
        {
            "id": "337a544a-22f4-4450-85a4-74f16b0ac535",
            "url": "https://photograph.ecarry.uk/photos/IMG_0195.jpg",
            "title": "Ninenzaka",
            "description": "Ninenzaka",
            "isFavorite": false,
            "aspectRatio": 0.67,
            "width": 5304,
            "height": 7952,
            "blurData": "V#Hy5gxut6oeV??^WCWCofjF%NoMRkWDbHsmoeoeofoz",
            "country": "Japan",
            "countryCode": "JP",
            "region": "Kyoto",
            "city": "Kyoto",
            "district": "Uedacho",
            "fullAddress": "84-1, Uedacho, Higashiyama, Kyoto, Kyoto 605-0852, Japan",
            "placeFormatted": "Higashiyama, Kyoto, Kyoto 605-0852, Japan",
            "make": "SONY",
            "model": "ILCE-7RM2",
            "lensModel": "Sony E 50-400mm F4.5-6.3",
            "focalLength": 148,
            "focalLength35mm": 148,
            "fNumber": 5.6,
            "iso": 160,
            "exposureTime": 0.00625,
            "exposureCompensation": 0,
            "latitude": 34.998646,
            "longitude": 135.7779,
            "gpsAltitude": null,
            "dateTimeOriginal": "2024-11-04T11:58:59.000Z",
            "createAt": "2025-01-12T08:36:14.915Z",
            "updateAt": "2025-01-12T08:36:14.858Z"
        },
        {
            "id": "0f5393f6-b2d1-46f1-bfaf-976302c84725",
            "url": "https://photograph.ecarry.uk/photos/DSC07785.jpg",
            "title": "Yasaka Jinja Nishiromon Gate",
            "description": "Yasaka Jinja Nishiromon Gate",
            "isFavorite": false,
            "aspectRatio": 1.5,
            "width": 7828,
            "height": 5230,
            "blurData": "VTHBe,~VIot7xG%EovWCjFt7ITROnibuS5%f%MxaofNG",
            "country": "Japan",
            "countryCode": "JP",
            "region": "Kyoto",
            "city": "Kyoto",
            "district": "Gionmachikitagawa",
            "fullAddress": "263-7, Gionmachikitagawa, Higashiyama, Kyoto, Kyoto 605-0073, Japan",
            "placeFormatted": "Higashiyama, Kyoto, Kyoto 605-0073, Japan",
            "make": "SONY",
            "model": "ILCE-7RM2",
            "lensModel": "Sony E 50-400mm F4.5-6.3",
            "focalLength": 245,
            "focalLength35mm": 245,
            "fNumber": 6.3,
            "iso": 2500,
            "exposureTime": 0.004,
            "exposureCompensation": 0,
            "latitude": 35.003933,
            "longitude": 135.77487,
            "gpsAltitude": null,
            "dateTimeOriginal": "2024-11-04T15:45:15.000Z",
            "createAt": "2025-01-12T11:57:47.156Z",
            "updateAt": "2025-01-12T11:57:46.989Z"
        },
        {
            "id": "33298e57-e25f-45f9-9994-d65e488a94ca",
            "url": "https://photograph.ecarry.uk/photos/DSC07795 (1).jpg",
            "title": "Ninenzaka",
            "description": "Ninenzaka",
            "isFavorite": false,
            "aspectRatio": 1.62,
            "width": 7952,
            "height": 4923,
            "blurData": "VVFh#F$fozWBxZ~qadofj[oKAwIpjYofNHXnNHRkayR*",
            "country": "Japan",
            "countryCode": "JP",
            "region": "Kyoto",
            "city": "Kyoto",
            "district": "Masuyacho",
            "fullAddress": "359-1, Masuyacho, Higashiyama, Kyoto, Kyoto 605-0826, Japan",
            "placeFormatted": "Higashiyama, Kyoto, Kyoto 605-0826, Japan",
            "make": "SONY",
            "model": "ILCE-7RM2",
            "lensModel": "E 50-400mm F4.5-6.3 A067",
            "focalLength": 97,
            "focalLength35mm": 97,
            "fNumber": 6.3,
            "iso": 800,
            "exposureTime": 0.01,
            "exposureCompensation": 0,
            "latitude": 34.99932,
            "longitude": 135.78116,
            "gpsAltitude": null,
            "dateTimeOriginal": "2024-11-04T16:11:27.000Z",
            "createAt": "2025-01-12T11:58:10.587Z",
            "updateAt": "2025-01-12T11:58:10.417Z"
        }
    ]
}], isLoading: false};

  console.log(cityList);

  if (isLoading) {
    return (
      <div className="w-full min-h-[70vh] flex items-start justify-center">
        <CameraLoader />
      </div>
    );
  }

  return (
    <div className="mt-3 w-full grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-3">
      {cityList?.map((city) => (
        <CityCard
          key={city.id}
          title={city.city}
          coverPhoto={city.coverPhoto}
        />
      ))}
    </div>
  );
};

export default CityList;
