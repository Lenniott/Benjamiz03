import { AppBanner } from "../shared";
import {MediumGrid} from "../components";

export function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center max-w-6xl px-6">
      <AppBanner />
      <MediumGrid/> 
    </div>
  );
}
