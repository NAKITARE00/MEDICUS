import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useStateContext } from "../context";
import { useState, useEffect } from "react";
import { DisplayPatents } from "../components/DisplayPatents";

export default function Market() {
  const [isLoading, setIsLoading] = useState(false);
  const { address, contract, getPatentOnSale } = useStateContext();
  const [patents, setPatents] = useState([]);
  const fetchPatents = async () => {
    setIsLoading(true);
    const data = await getPatentOnSale();
    setPatents(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) fetchPatents();
  }, [address, contract]);

  return (
    <div
      className="bg-[] flex justify-center pr-104px
    items-center flex-col rounded-[10px] sm:p-10p-4"
    >
      <Navbar />
      <div className="justify-left flex flex-row">
        <DisplayPatents
          title="Patents"
          isLoading={isLoading}
          patents={patents}
        />
      </div>
      <Footer />
    </div>
  );
}
