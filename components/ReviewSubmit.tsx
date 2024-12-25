import useMultiStepFormStore from "@/store";
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button";

function ReviewSubmit() {
  const { submitForm, prevStep, formData } = useMultiStepFormStore();
  const { toast } = useToast();

  return (
    <div className="p-5">
      <h2 className="text-xl font-semibold mb-4">Review Your Information</h2>

      {/* Personal Information Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Personal Info</h3>
        <div className="grid gap-6 md:grid-cols-2 border p-4 border-gray-300 rounded-lg">
          <p>
            <span className="font-semibold">Full Name: </span>
            {formData.personalInfo.firstName} {formData.personalInfo.lastName}
          </p>
          <p>
            <span className="font-semibold">Phone: </span>
            {formData.personalInfo.phone || "N/A"}
          </p>
          <p>
            <span className="font-semibold">Email: </span>
            {formData.personalInfo.email || "N/A"}
          </p>
        </div>
      </div>

      {/* Address Details Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Address Details</h3>
        <div className="grid gap-6 md:grid-cols-2 border p-4 border-gray-300 rounded-lg">
          <p>
            <span className="font-semibold">Street: </span>
            {formData.addressDetails.street || "N/A"}
          </p>
          <p>
            <span className="font-semibold">City: </span>
            {formData.addressDetails.city || "N/A"}
          </p>
          <p>
            <span className="font-semibold">State: </span>
            {formData.addressDetails.state || "N/A"}
          </p>
          <p>
            <span className="font-semibold">Zip Code: </span>
            {formData.addressDetails.zipCode || "N/A"}
          </p>
        </div>
      </div>

      {/* Preferences Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Preferences</h3>
        <div className="grid gap-6 md:grid-cols-2 border p-4 border-gray-300 rounded-lg">
          <p>
            <span className="font-semibold">Subscribe to Newsletter: </span>
            {formData.preferences.newsletter ? "Yes" : "N/A"}
          </p>
          <p>
            <span className="font-semibold">Receive Notifications: </span>
            {formData.preferences.notifications ? "Yes" : "N/A"}
          </p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-5">
        <Button
          className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-lg"
          onClick={prevStep}
        >
          {"\u2190"} Previous
        </Button>
        <Button
          className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-lg"
          onClick={() => {
            submitForm(); 
            toast({
              title: "Your Form Submitted Successfully"
            })
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}

export default ReviewSubmit;
