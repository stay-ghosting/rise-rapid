import React, { useEffect, useState } from "react";
import InputField from "../components/InputField";
import Dropdown from "../components/InputDropdown";
import RadioButtons from "../components/RadioButtons";
import CustomCheckbox from "../components/Checkbox";
import ResponsiveSection from "./ResponsiveSection";

import { services } from "../assets/data/services";

const fields = [
  { id: "full-name", name: "fullName", placeholder: "Full Name*", type: "text", autoComplete: "name" },
  { id: "email", name: "email", placeholder: "Email*", type: "email", autoComplete: "email" },
  { id: "number", name: "number", placeholder: "Number*", type: "tel", autoComplete: "tel" },

  { id: "business-name", name: "businessName", placeholder: "Business Name*", type: "text", autoComplete: "organization" },
  { id: "service", name: "service", placeholder: "Service*", type: "text", autoComplete: "off" },
  { id: "brief-description", name: "briefDescription", placeholder: "Brief Description*", type: "text", autoComplete: "off" },
];

const budgetField = [
  { label: "£1000+", value: "1000" },
  { label: "Up to £3000", value: "3000" },
  { label: "Up to £10,000", value: "10000" },
];
interface FileNameProps {
  inView?: boolean;
  serviceId?: string;
}

interface FormData {
  fullName: string;
  businessName: string;
  email: string;
  service: string;
  number: string;
  budget: string;
  isSubscribed: boolean;
}
const GetInTouchSection: React.FC<FileNameProps> = ({ inView = true, serviceId }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    businessName: "",
    email: "",
    service: "",
    number: "",
    budget: "",
    isSubscribed: false,
  });

  const getServiceLable = (value: string) => {
    const service = services.find(service => service.id === value)
    return service ? service.title : ''
  }

  const serviceOptions = services.map(service => ({label: service.title, value: service.id}))

  useEffect(() => {
    console.log(serviceId);
    
    if (serviceId) {
      handleInputChange("service", serviceId)
    }
  }, [serviceId]);

  const handleInputChange = (name: keyof FormData, value: string) => {
    setFormData((prevState) => {
      const updatedState = { ...prevState, [name]: value };
      console.log("Updated formData:", updatedState);
      return updatedState;
    });
  };

  const handleCheckboxChange = (name: keyof FormData) => {
    setFormData((prevState) => {
      const updatedState = { ...prevState, [name]: !prevState[name] };
      console.log("Updated formData:", updatedState);
      return updatedState;
    });
  };

  return (
    <ResponsiveSection>
      <h2 className={`${inView ? "fade-in" : "fade-in-hidden"}`}>Get A Quote</h2>
      <p className={`text-white ${inView ? "fade-in" : "fade-in-hidden"}`}>
        Or call us now <span className='text-cta'>+44761 9290XX</span>
      </p>
      <form action=''>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-10'>
          <div>
            <h3 className={`${inView ? "fade-in" : "fade-in-hidden"} mt-[4rem] sm:mt-0`} style={{ animationDelay: `400ms` }}>
              About you...
            </h3>
            {fields.slice(0, 3).map(({ id, name, placeholder, type, autoComplete }, index) => (
              <div key={id} className={`${inView ? "fade-right" : "fade-in-hidden"}`} style={{ animationDelay: `${800 + Math.floor(index) * 200}ms` }}>
                {id === "service" ? (
                  <div className=''>
                    <Dropdown id={id} name={name} placeholder={getServiceLable(formData.service) || placeholder} options={serviceOptions} setFieldValue={(value) => handleInputChange("service", value)} inView={inView} />
                  </div>
                ) : (
                  <InputField
                    id={id}
                    name={name}
                    type={type}
                    fieldValue={formData[name as keyof FormData] as string}
                    setFieldValue={(name, value) => {
                      console.log(name, value);
                      handleInputChange(name as keyof FormData, value);
                    }}
                    placeholder={placeholder}
                    autoComplete={autoComplete}
                  />
                )}
              </div>
            ))}
          </div>
          <div>
            <div>
              <h3 className={`${inView ? "fade-in" : "fade-in-hidden"} mt-[4rem] sm:mt-0`} style={{ animationDelay: `400ms` }}>
                About The Project...
              </h3>

              {fields.slice(3).map(({ id, name, placeholder, type, autoComplete }, index) => (
                <div
                  key={id}
                  className={`${id === "service" && "relative z-10"} ${inView ? "fade-left" : "fade-in-hidden"}`}
                  style={{ animationDelay: `${800 + Math.floor(index) * 200}ms` }}
                >
                  {id === "service" ? (
                    <div className=''>
                      <Dropdown id={id} name={name} placeholder={getServiceLable(formData.service) || placeholder} options={serviceOptions} setFieldValue={(value) => handleInputChange("service", value)} inView={inView} />
                    </div>
                  ) : (
                    <div className=''>
                      <InputField
                        id={id}
                        name={name}
                        type={type}
                        fieldValue={formData[name as keyof FormData] as string}
                        setFieldValue={(name, value) => {
                          console.log(name, value);
                          handleInputChange(name as keyof FormData, value);
                        }}
                        placeholder={placeholder}
                        autoComplete={autoComplete}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={`${inView ? "fade-in" : "fade-in-hidden"}`} style={{ animationDelay: `400ms` }}>
          {/* budgetField */}
          <div className='flex justify-center pt-[4rem] sm:mt-[2rem]'>
            <div className='inline'>
              <p className='inline text-white font-semibold mt-[4rem] mb-2'>Budget*</p>
              <div className='flex justify-between space-x-4 '>
                {<RadioButtons budgetFields={budgetField} selectedBudget={formData.budget} setSelectedBudget={(value) => handleInputChange("budget", value)} />}
              </div>
            </div>
          </div>

          {/* subscribe and submit */}
          <div className='flex flex-col items-center space-y-[1rem] mt-[4rem]'>
            <div className='flex align-baseline'>
              {/* <input
                className='border-none outline-none'
                onChange={(e) => handleCheckboxChange("isSubscribed", e.currentTarget.checked)}
                type='checkbox'
                name='subscribe'
                id='subscribe'
              /> */}
              <CustomCheckbox id={"is-Subscribed"} name={"isSubscribed"} onChange={(name) => handleCheckboxChange(name as keyof FormData)} checked={formData.isSubscribed} />
              <p className='inline ml-[1rem] text-[2rem] sm:text-[1.25rem]'>Subscribe to our newsletter</p>
            </div>
            <button
              className=' m-auto bg-cta hover:bg-cta-hover h-[6rem] sm:h-14 w-60 flex items-center justify-center px-9 rounded-md shadow-xl shadow-shaddow text-white font-semibold'
              type='submit'
            >
              Send
              <div className='inline-block  overflow-hidden arrow'>
                <span className='text-[2em] '>⭢</span>
              </div>
            </button>
          </div>
        </div>
      </form>
    </ResponsiveSection>
  );
};

export default GetInTouchSection;
