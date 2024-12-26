"use client";
import { useState, useEffect } from "react";
import AddressDetails from "@/components/AddressDetails";
import PersonalInfo from "@/components/PersonalInfo";
import Preferences from "@/components/Preferences";
import ProgressBar from "@/components/ProgressBar";
import ReviewSubmit from "@/components/ReviewSubmit";
import useMultiStepFormStore from "@/store";

export default function Home() {
  const { step } = useMultiStepFormStore();
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

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
    <div className="flex flex-col items-center py-10">
      {/* Theme Toggle Button */}
      <button
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        onClick={toggleTheme}
        className="mb-5 px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-blue-600 transition-all"
      >
        {theme === "light" ? "Dark" : "Light"} Mode
      </button>

      <div className="bg-white dark:bg-gray-800 dark:text-gray-200 rounded-lg w-full p-10 mx-5">
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
