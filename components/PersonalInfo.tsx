import useMultiStepFormStore from "@/store";
import { Button } from "@/components/ui/button";
import { personalInfoSchema } from "@/validationSchema";
import { useState } from "react";

function PersonalInfo() {
  const { nextStep, formData, setPersonalInfo } = useMultiStepFormStore();
  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
    setPersonalInfo({ [e.target.name]: e.target.value });
  };

  const validateAndNext = () => {
    try {
      personalInfoSchema.parse(formData.personalInfo);
      setError("");
      nextStep();
    } catch (error: any) {
      setError(
        error.errors[0]?.message || "Please fill all the fields correctly."
      );
    }
  };

  return (
    <div className="dark:text-gray-200">
      <h2 className="text-xl font-semibold">Personal Information</h2>
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
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              className="text-lg font-medium text-gray-900 dark:text-gray-300"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              value={formData.personalInfo.firstName}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm 
              rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              required
              aria-required="true"
            />
          </div>
          <div>
            <label
              className="text-lg font-medium text-gray-900 dark:text-gray-300"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              value={formData.personalInfo.lastName}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm 
              rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              required
              aria-required="true"
            />
          </div>
          <div>
            <label
              className="text-lg font-medium text-gray-900 dark:text-gray-300"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="1234567890"
              value={formData.personalInfo.phone}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm 
              rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              required
              aria-required="true"
            />
          </div>
          <div>
            <label
              className="text-lg font-medium text-gray-900 dark:text-gray-300"
              htmlFor="email"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="mike@example.com"
              value={formData.personalInfo.email}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm 
              rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              required
              aria-required="true"
            />
          </div>
        </div>
      </div>
      {/* Buttons */}
      <div className="flex justify-end mt-5">
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

export default PersonalInfo;
