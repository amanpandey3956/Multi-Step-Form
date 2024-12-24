import useMultiStepFormStore from "@/store";
import { Button } from "@/components/ui/button"
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
    <div>
      <h2 className="text-xl font-semibold">Address Details</h2>
      <div className="mt-5">
        {error && <div className="font-bold text-red-600">*{error}</div>}
        <div className="grid gap-6 mb-6 mt-2 md:grid-cols-2">
          <div>
            <label className="text-lg font-medium text-gray-900" htmlFor="street">
              Street Address
            </label>
            <input
              type="text"
              name="street"
              placeholder="Enter your street address"
              value={formData.addressDetails.street || ""}
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
              rounded-lg block w-full p-2.5"
              required
            />
          </div>
          <div>
            <label className="text-lg font-medium text-gray-900" htmlFor="city">
              City
            </label>
            <input
              type="text"
              name="city"
              placeholder="Enter your city"
              value={formData.addressDetails.city || ""}
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
              rounded-lg block w-full p-2.5"
              required
            />
          </div>
          <div>
            <label className="text-lg font-medium text-gray-900" htmlFor="state">
              State
            </label>
            <input
              type="text"
              name="state"
              placeholder="Enter your state"
              value={formData.addressDetails.state || ""}
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
              rounded-lg block w-full p-2.5"
              required
            />
          </div>
          <div>
            <label
              className="text-lg font-medium text-gray-900"
              htmlFor="zipCode"
            >
              Zip Code
            </label>
            <input
              type="text"
              name="zipCode"
              placeholder="Enter your postal code"
              value={formData.addressDetails.zipCode || ""}
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
              rounded-lg block w-full p-2.5"
              required
            />
          </div>
        </div>
      </div>
      {/* buttons */}
      <div className="flex justify-between mt-5">
        <Button className="text-white bg-blue-500 px-3 py-1 rounded-lg text-lg sm:text-xl" onClick={prevStep}>
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

export default AddressDetails;
