import { DestinationCard } from "@/components/Card";
import { ParaProvider } from "@/config/Parallax";
import { Parallax } from "react-scroll-parallax";

export default function Destination() {
  return (
    <ParaProvider>
      <div className="w-[100%]  bg-white py-6 px-4 h-[900px] text-center ">
        <div>
          <Parallax speed={-50}>
            <div className="w-[100% ] h-[520px] bg-black">
                <DestinationCard />
            </div>
          </Parallax>
          <Parallax speed={10}>
            <div className="w-[100%] h-[500px] bg-red-300">content</div>
          </Parallax>
        </div>
      </div>
    </ParaProvider>
  );
}
