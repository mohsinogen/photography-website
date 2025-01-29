import Photo from "./photo";

type Props = {
  params: Promise<{ id: string }>;
};

// Dummy photo data
const dummyPhoto = {
  id: "1",
  title: "Sunset Over the Mountains",
  description: "A beautiful sunset captured in the hills.",
  imageUrl: "https://heroui.com/images/card-example-4.jpeg", // Make sure you have a placeholder image
};

// Generate metadata from dummy data
export const generateMetadata = async ({ params }: Props) => {
  return {
    title: dummyPhoto.title,
    description: dummyPhoto.description,
  };
};

const page = async ({ params }: Props) => {
  return (
    <div className="w-full h-full">
      <Photo id={dummyPhoto.id} />
      <h1 className="text-2xl font-bold">{dummyPhoto.title}</h1>
      <p className="text-gray-600">{dummyPhoto.description}</p>
      <img src={dummyPhoto.imageUrl} alt={dummyPhoto.title} className="mt-4 rounded-lg" />
    </div>
  );
};

export default page;
