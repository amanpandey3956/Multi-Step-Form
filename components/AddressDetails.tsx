import useMultiStepFormStore from "@/store";
import { Button } from "@/components/ui/button";
import { addressDetailsSchema } from "@/validationSchema"; 
import { useState } from "react";

function AddressDetails() {
  const { nextStep, prevStep, formData, setAddressDetails } = useMultiStepFormStore(); 
  const [error, setError] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddressDetails({ [name]: value });
  };

  const validateAndNext = () => {
    try {
      addressDetailsSchema.parse(formData.addressDetails); 
      setError("");
      nextStep();
    } catch (error: any) {
      setError(
        error.errors[0]?.message || "Please fill in all address fields correctly."
      );
    }
  };

  return (
    <div className="dark:text-gray-200">
      <h2 className="text-xl font-semibold">Address Details</h2>
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
        <div className="grid gap-6 mb-6 mt-2 md:grid-cols-2">
          <div>
            <label
              className="text-lg font-medium text-gray-900 dark:text-gray-300"
              htmlFor="street"
            >
              Street Address
            </label>
            <input
              type="text"
              id="street"
              name="street"
              placeholder="Enter your street address"
              value={formData.addressDetails.street || ""}
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm 
              rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              required
              aria-required="true"
            />
          </div>
          <div>
            <label
              className="text-lg font-medium text-gray-900 dark:text-gray-300"
              htmlFor="city"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="Enter your city"
              value={formData.addressDetails.city || ""}
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm 
              rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              required
              aria-required="true"
            />
          </div>
          <div>
            <label
              className="text-lg font-medium text-gray-900 dark:text-gray-300"
              htmlFor="state"
            >
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              placeholder="Enter your state"
              value={formData.addressDetails.state || ""}
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm 
              rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              required
              aria-required="true"
            />
          </div>
          <div>
            <label
              className="text-lg font-medium text-gray-900 dark:text-gray-300"
              htmlFor="zipCode"
            >
              Zip Code
            </label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              placeholder="Enter your postal code"
              value={formData.addressDetails.zipCode || ""}
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm 
              rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              required
              aria-required="true"
            />
          </div>
        </div>
      </div>
      {/* Buttons */}
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

export default AddressDetails;
