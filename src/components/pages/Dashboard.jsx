import { useUser } from "@clerk/clerk-react";
import { Calendar } from "lucide-react";
import DashComp from "../dashboard/DashComp";
import SupplierSpotlight from "../dashboard/SupplierSpotlight";
import DailyLearningVideo from "../dashboard/DailyLearnings";

const Dashboard = () => {
  const { user } = useUser();
  const today = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = today.toLocaleDateString(undefined, options);
  return (
    <div className="mt-8 mb-8">
      {/* Banner  */}
      <div className="w-[90%] mx-auto p-2 flex justify-between items-center">
        <div>
          <h1 className="text-3xl">
            Hi, <span className="font-bold">{user.firstName}</span> 👋
          </h1>
          <p className="text-sm text-gray-400">
            Discover Trends, Tools, and Top Suppliers All in One Place!
          </p>
        </div>

        <div className="flex gap-3 items-center max-sm:hidden">
          <p className="text-gray-500">{formattedDate}</p>
          <div className="bg-gray-300 p-2 rounded-full">
            <Calendar />
          </div>
        </div>
      </div>

      <div className="w-[90%] mx-auto mt-[2rem]">
        <div className="grid grid-cols-8 grid-rows-8 gap-2 max-sm:block">
          <div className="col-span-5 row-span-4"><DashComp /></div>
          <div className="col-span-5 row-span-4 col-start-1 row-start-5"><DailyLearningVideo /></div>
          <div className="col-span-3 row-span-8 col-start-6 row-start-1"><SupplierSpotlight /></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
