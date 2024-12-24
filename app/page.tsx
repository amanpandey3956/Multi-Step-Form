"use client";
import AddressDetails from "@/components/AddressDetails";
import PersonalInfo from "@/components/PersonalInfo";
import Preferences from "@/components/Preferences";
import ProgressBar from "@/components/ProgressBar";
import ReviewSubmit from "@/components/ReviewSubmit";
import useMultiStepFormStore from "@/store";

export default function Home() {
  const { step } = useMultiStepFormStore();

  const renderStep = () => {
    switch (step) {
      case 1:
        return <PersonalInfo />;
      case 2:
        return <AddressDetails />;
      case 3:
        return <Preferences />;
      case 4:
        return <ReviewSubmit />;
      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center py-10">
      <div className="bg-gray-100 rounded-lg w-full p-10 mx-5">
        <div className="pt-2 mb-5 text-center text-2xl sm:text-3xl font-semibold">
          ZenStreet.ai Form
        </div>
        {/* progress bar */}
        <ProgressBar />

        {/* steps */}
        <div>{renderStep()}</div>
      </div>
    </div>
  );
}
