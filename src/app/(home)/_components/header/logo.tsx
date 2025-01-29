import Link from "next/link";
import AnimatedText from "@/components/animated-text";
import { RiCameraLensFill } from "react-icons/ri";

const Logo = () => {
  return (
    <Link href="/" className="flex gap-2 items-center">
      <RiCameraLensFill size={18} />
      <AnimatedText
        label="Mohsin"
        label2="Ansari"
        style="font-medium uppercase"
      />
    </Link>
  );
};

export default Logo;
