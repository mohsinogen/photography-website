import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const HomeButton = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full size-8"
            asChild
          >
            <Link href="/">
              <ArrowUpRight size={16} />
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent align="end">
          <p>Home</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default HomeButton;
