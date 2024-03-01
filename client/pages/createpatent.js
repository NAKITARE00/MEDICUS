import { FormField } from "../components/FormField";
import { Button } from "../components/Button";
import { Footer } from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../context";
import { useState } from "react";
import Image from "next/image";
import background from "../public/background.jpeg";

export default function CreatePatent() {
  const createPatent = useStateContext();
  const address = useStateContext();
  const [form, setForm] = useState({
    title: "",
    description: "",
    organization: "",
    uri: "",
  });

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPatent(
      form.title,
      form.description,
      form.organization,
      form.uri,
      address
    );
  };
  return (
    <div className="flex flex-col justify-center items-center bg-[black] h-[] font-[san-serif]">
      <div
        className="flex justify-center items-center p-[16px] 
      sm:min-w-[480px] bg-[black] mt-[30px] 
      rounded-[10px]"
      >
        <h1 className="sm:text-[24px] text-[17px] leading-[37px] text-white">
          Create Patent
        </h1>
      </div>

      <div className="flex flex-row gap-2">
        <Image src={background} height={50} width={50} />
        <form
          onSubmit={handleSubmit}
          className="w-[] mt-[65px] flex flex-col gap-[30px] sm:min-w-[200px] mb-[200px]"
        >
          <div className="flex flex-wrap gap-[40px]">
            <FormField
              labelName=" Patent Name *"
              placeholder="title"
              inputType="text"
              value={form.title}
              handleChange={(e) => handleFormFieldChange("name", e)}
            />
            <FormField
              labelName="Patent Description*"
              placeholder="description"
              inputType="text"
              value={form.description}
              handleChange={(e) => handleFormFieldChange("receiver", e)}
            />
          </div>
          <div className="flex flex-wrap gap-[40px]">
            <FormField
              labelName="Organization *"
              placeholder="organization"
              inputType="text"
              value={form.organization}
              handleChange={(e) => handleFormFieldChange("city", e)}
            />
            <FormField
              labelName="URI*"
              placeholder="uri"
              inputType="text"
              value={form.uri}
              handleChange={(e) => handleFormFieldChange("state", e)}
            />
          </div>
          <div className="flex justify-center items-center mb-[30px]">
            <Button
              btnType="submit"
              title="Create"
              styles="bg-[#002D62]"
              handleClick={handleSubmit}
            />
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
