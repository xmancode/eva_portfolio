import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";
const Experiences = () => {
  return (
    <div className="w-full mt-220">
      
      <Timeline data={experiences} />
    </div>
  );
};

export default Experiences;