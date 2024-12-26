import useMultiStepFormStore from "@/store";
import { Button } from "@/components/ui/button";
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
      preferencesSchema.parse(formData.preferences); 
      setError("");
      nextStep();
    } catch (error: any) {
      setError(error.errors[0]?.message || "Please select preferences correctly.");
    }
  };

  return (
    <div className="dark:text-gray-200">
      <h2 className="text-xl font-semibold">Preferences</h2>
      <div className="mt-5">
        {error && (
          <div
            className="font-bold text-red-600"
            role="alert"
            aria-live="polite"
          >
            *{error}
          </div>
        )}

        <div>
          <div className="flex items-center mt-2">
            <input
              type="checkbox"
              id="newsletter"
              name="newsletter"
              checked={formData.preferences.newsletter}
              onChange={handlePreferencesChange}
              className="h-4 w-4 text-blue-600 bg-gray-300 rounded focus:ring-blue-500 
              dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-400"
              aria-checked={formData.preferences.newsletter}
            />
            <label
              htmlFor="newsletter"
              className="ml-2 text-sm text-gray-700 dark:text-gray-300"
            >
              Subscribe to Newsletter
            </label>
          </div>
          <div className="flex items-center mt-2">
            <input
              type="checkbox"
              id="notifications"
              name="notifications"
              checked={formData.preferences.notifications}
              onChange={handlePreferencesChange}
              className="h-4 w-4 text-blue-600 bg-gray-300 rounded focus:ring-blue-500 
              dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-400"
              aria-checked={formData.preferences.notifications}
            />
            <label
              htmlFor="notifications"
              className="ml-2 text-sm text-gray-700 dark:text-gray-300"
            >
              Receive Notifications
            </label>
          </div>
        </div>
      </div>
      
      {/* Navigation Buttons */}
      <div className="flex justify-between mt-5">
        <Button
          className="text-white bg-blue-500 px-3 py-1 rounded-lg text-lg sm:text-xl 
          hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-500"
          onClick={prevStep}
          aria-label="Go back to the previous step"
        >
          {"\u2190"} Previous
        </Button>
        <Button
          className="text-white bg-blue-500 px-3 py-1 rounded-lg text-lg sm:text-xl 
          hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-500"
          onClick={validateAndNext}
          aria-label="Proceed to the next step"
        >
          Next {"\u2192"}
        </Button>
      </div>
    </div>
  );
}

export default Preferences;
