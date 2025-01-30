import CityPhotos from "./city-photos";

type Params = Promise<{ categoryName: string }>;

export const generateMetadata = async ({ params }: { params: Params }) => {
  const { categoryName } = await params;
  return {
    title: `${decodeURIComponent(categoryName)} - Travel`,
  };
};

const CityPage = async ({ params }: { params: Params }) => {
  const { categoryName } = await params;

  return (
    <div className="size-full">
      <CityPhotos categoryName={categoryName} />
    </div>
  );
};

export default CityPage;
