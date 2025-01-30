"use client";

// External dependencies
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// Internal dependencies - UI Components
import Footer from "../_components/footer";
import { PiArrowRight } from "react-icons/pi";
import BlurImage from "@/components/blur-image";
import TextScroll from "@/components/text-scroll";
import CameraLoader from "@/components/camera-loader";
import CardContainer from "@/components/card-container";
import VectorCombined from "@/components/vector-combined";
import {
  PageTransitionContainer,
  PageTransitionItem,
} from "@/components/page-transition";

// Hooks & Types
import { useGetCitySets } from "@/features/city/api/use-get-city-sets";
import { type CitySetWithRelations } from "@/app/api/[[...route]]/city";
import { photoCategories, PhotoCollection } from "@/lib/helper";

// Components
const CoverPhoto = ({ category }: { category: PhotoCollection | null }) => {




  if(!category){
    return;
  }

  return (
    <div className="w-full h-[70vh] lg:w-1/2 lg:fixed lg:top-0 lg:left-0 lg:h-screen p-0 lg:p-3">
      <div className="w-full h-full relative rounded-xl overflow-hidden">
        
          <BlurImage
            src={category?.coverPhoto.url}
            alt={category?.category}
            fill
            priority
            blurhash={category?.coverPhoto.blurData}
            className="object-cover"
          />
     

        <div className="absolute right-0 bottom-0">
          <VectorCombined title={category?.category || ""} position="bottom-right" />
        </div>
      </div>
    </div>
  );
};

const Introduction = () => (
  <CardContainer>
    <div className="flex flex-col p-12 gap-[128px]">
      <h1 className="text-4xl">Portfolio</h1>
      <div className="flex flex-col gap-4 font-light">
        <p>
        I am a beginner photographer exploring the art of capturing moments through my lens.
        I love photographing nature, landscapes, portraits, and street scenes,
        finding beauty in everyday life. Each shot is a learning experience,
        helping me refine my skills and develop my unique style. Photography is my creative escape,
        and I’m excited to grow and share my journey through my images.
        </p>
      </div>
    </div>
  </CardContainer>
);

interface CategoryItemProps {
  category: PhotoCollection;
  onMouseEnter: (val: any) => void;
}

const CategoryItem = ({ category, onMouseEnter }: CategoryItemProps) => {
  const router = useRouter();

  return (
    <div
      key={category.id}
      className="w-full py-5 px-3 bg-muted hover:bg-muted-hover rounded-xl grid grid-cols-2 items-center cursor-pointer group transition-all duration-150 ease-[cubic-bezier(0.22, 1, 0.36, 1)] flex-1 overflow-hidden"
      onMouseEnter={() => onMouseEnter(category)}
      onClick={() => router.push(`/portfolio/${category.category}`)}
    >
      <p className="text-xs lg:text-sm line-clamp-1">{category.category}</p>

      <div className="relative overflow-hidden flex justify-end">
        <div className="flex items-center gap-2 transform transition-transform duration-200 ease-in-out group-hover:-translate-x-7">
          <span className="font-light text-xs lg:text-sm whitespace-nowrap text-right">
            <TextScroll className="w-28 lg:w-full">{category.category}</TextScroll>
          </span>
        </div>
        <div className="absolute right-0 transform translate-x-full transition-transform duration-200 ease-in-out group-hover:translate-x-0 flex items-center">
          <PiArrowRight size={18} />
        </div>
      </div>
    </div>
  );
};

// Main Component
export default function TravelClientPage() {
  const [activeCategory, setActiveCategory] = useState<PhotoCollection | null>(
    photoCategories[0]
  );
  
  //const { data: citySetsData, isLoading: isCitySetsLoading } = useGetCitySets();

/*   useEffect(() => {
    if (!activeCity && citySetsData && citySetsData.length > 0) {
      setActiveCity(citySetsData[0]);
    }
  }, [activeCity, citySetsData]); */

  /* if (isCitySetsLoading) {
    return (
      <div className="h-full w-full rounded-xl flex items-center justify-center bg-muted">
        <CameraLoader />
      </div>
    );
  } */

  return (
    <PageTransitionContainer className="flex flex-col lg:flex-row min-h-screen w-full">
      <CoverPhoto category={activeCategory} />

      {/* Spacer for fixed left content */}
      <div className="hidden lg:block lg:w-1/2" />

      {/* RIGHT CONTENT - Scrollable */}
      <PageTransitionContainer className="w-full mt-3 lg:mt-0 lg:w-1/2 space-y-3 pb-3">
        <PageTransitionItem>
          <Introduction />
        </PageTransitionItem>

         <div className="space-y-3">
          {photoCategories?.map((category) => (
            <PageTransitionItem key={category.id}>
              <CategoryItem category={category} onMouseEnter={()=>setActiveCategory(category)} />
            </PageTransitionItem>
          ))}
        </div> 

        <PageTransitionItem>
          <Footer />
        </PageTransitionItem>
      </PageTransitionContainer>
    </PageTransitionContainer>
  );
}
