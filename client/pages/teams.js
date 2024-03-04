import Image from "next/image";
import { Navbar } from "../components/Navbar";
import { Button } from "../components/Button";
import { FormField } from "../components/FormField";
import { Footer } from "../components/Footer";
import doctors from "../public/doctors.jpeg";
import { useStateContext } from "../context";
import { useState } from "react";

export default function Teams() {
  const { createCollaboration } = useStateContext();
  const address = useStateContext();
  const [form, setForm] = useState({
    name: "",
    description: "",
    uri: "",
  });
  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPatent(form.name, form.description, form.uri);
  };
  return (
    <div className="flex flex-col justify-center items-center bg-[black] h-[] font-[sans-serif]">
      <Navbar />
      {/* <Image
        src={doctors}
        height={450}
        width={450}
        className="rounded-[10px]"
      /> */}
      <div
        className="flex justify-center items-center p-[16px] 
      sm:min-w-[480px] bg-[black] mt-[5x] 
      rounded-[10px]"
      >
        <h1 className="sm:text-[24px] text-[17px] text-white">Team Up</h1>
      </div>
      <div className="flex flex-wrap gap-5">
        <div className="bg-[#002D62] p-3 rounded-[10px] h-[450px] mt-[20px]">
          <p className="text-[17px] text-white w-[550px] font-epilogue">
            Medicus goes beyond simply connecting researchers; it fosters
            collaborative teams. Users can form or join groups, seamlessly share
            data and ideas, and co-author publications.
          </p>
          <Image
            src={doctors}
            height={350}
            width={350}
            className="rounded-[10px]"
          />
        </div>
        <div className="justify-center mt-5">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-[30px] sm:min-w-[200px] mb-[60px] w-[500px]"
          >
            <div className="flex flex-col gap-[40px]">
              <FormField
                labelName=" Research Name *"
                placeholder="title"
                inputType="text"
                value={form.name}
                handleChange={(e) => handleFormFieldChange("name", e)}
              />
              <FormField
                labelName="Research Description*"
                placeholder="description"
                inputType="text"
                styles="h-[100px]"
                value={form.description}
                handleChange={(e) => handleFormFieldChange("receiver", e)}
              />
            </div>
            <div className="flex flex-wrap gap-[40px]">
              <FormField
                labelName="Uri*"
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
                styles="bg-[#002D62] w-[200px]"
                handleClick={handleSubmit}
              />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
