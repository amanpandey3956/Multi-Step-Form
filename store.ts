import { create } from "zustand";
import {
  PersonalInfo,
  AddressDetails,
  Preferences,
  FormData,
} from "./validationSchema";

interface MultiStepFormState {
  step: number;
  formData: FormData;
  nextStep: () => void;
  prevStep: () => void;
  getTotalSteps: () => number;
  setPersonalInfo: (data: Partial<PersonalInfo>) => void;
  setAddressDetails: (data: Partial<AddressDetails>) => void;
  setPreferences: (data: Partial<Preferences>) => void;
  submitForm: () => void;
}

const useMultiStepFormStore = create<MultiStepFormState>((set,get) => ({
  step: 1,
  formData: {
    personalInfo: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
    },
    addressDetails: {
      street: "",
      city: "",
      state: "",
      zipCode: "",
    },
    preferences: {
      newsletter: false,
      notifications: false,
    },
  },
  nextStep: () => set((state) => ({ step: state.step + 1 })),
  prevStep: () => set((state) => ({ step: state.step - 1 })),
  getTotalSteps: () => {
    return Object.keys(get().formData).length + 1;
  },
  setPersonalInfo: (data) =>
    set((state) => ({
      formData: {
        ...state.formData,
        personalInfo: {
          ...state.formData.personalInfo,
          ...data,
        },
      },
    })),
  setAddressDetails: (data) =>
    set((state) => ({
      formData: {
        ...state.formData,
        addressDetails: {
          ...state.formData.addressDetails,
          ...data,
        },
      },
    })),
  setPreferences: (data) =>
    set((state) => ({
      formData: {
        ...state.formData,
        preferences: {
          ...state.formData.preferences,
          ...data,
        },
      },
    })),
  submitForm: () => {
    set((state) => {
      console.log("Form submitted successfully!");
      console.log("Submitted Data:", state.formData);
      return {
        step: 1,
        formData: {
          personalInfo: {
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
          },
          addressDetails: {
            street: "",
            city: "",
            state: "",
            zipCode: "",
          },
          preferences: {
            newsletter: false,
            notifications: false,
          },
        },
      };
    });
  },
}));

export default useMultiStepFormStore;
