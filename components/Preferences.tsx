import useMultiStepFormStore from "@/store";
import { Button } from "@/components/ui/button"
import { preferencesSchema } from "@/validationSchema";  
import { useState } from "react";

function Preferences() {
  const { nextStep, prevStep, formData, setPreferences } = useMultiStepFormStore();
  const [error, setError] = useState<string>("");

  const handlePreferencesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    setPreferences({
      [name]: checked,
    });
  };

  const validateAndNext = () => {
    try {
      preferencesSchema.parse(formData.preferences); // Use schema validation
      setError("");
      nextStep();
    } catch (error: any) {
      setError(error.errors[0]?.message || "Please select preferences correctly.");
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold">Preferences</h2>
      <div className="mt-5">
        {error && <div className="font-bold text-red-600">*{error}</div>}

        <div>
          <div className="flex items-center mt-2">
            <input
              type="checkbox"
              name="newsletter"
              checked={formData.preferences.newsletter}
              onChange={handlePreferencesChange}
              className="h-4 w-4 text-blue-600 bg-gray-300 rounded focus:ring-blue-500"
            />
            <span className="ml-2 text-sm text-gray-700">Subscribe to Newsletter</span>
          </div>
          <div className="flex items-center mt-2">
            <input
              type="checkbox"
              name="notifications"
              checked={formData.preferences.notifications}
              onChange={handlePreferencesChange}
              className="h-4 w-4 text-blue-600 bg-gray-300 rounded focus:ring-blue-500"
            />
            <span className="ml-2 text-sm text-gray-700">Receive Notifications</span>
          </div>
        </div>
      </div>
      
      {/* Navigation Buttons */}
      <div className="flex justify-between mt-5">
        <Button
          className="text-white bg-blue-500 px-3 py-1 rounded-lg text-lg sm:text-xl"
          onClick={prevStep}
        >
          {"\u2190"} Previous
        </Button>
        <Button
          className="text-white bg-blue-500 px-3 py-1 rounded-lg text-lg sm:text-xl"
          onClick={validateAndNext}
        >
          Next {"\u2192"}
        </Button>
      </div>
    </div>
  );
}

export default Preferences;
