import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useStateContext } from "../context";
import { useState, useEffect } from "react";
import { DisplayCollaborations } from "../components/DisplayCollaborations";

export default function Collaboration() {
  const [isLoading, setIsLoading] = useState(false);
  const { address, contract, getCollaborations } = useStateContext();
  const [collaborations, setCollaborations] = useState([]);
  const fetchCollaborations = async () => {
    setIsLoading(true);
    const data = await getCollaborations();
    setCollaborations(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) fetchCollaborations();
  }, [address, contract]);

  return (
    <div
      className="bg-[] flex justify-center pr-104px
    flex-col rounded-[10px] sm:p-10p-4"
    >
      <Navbar />
      <div className="justify-left flex flex-row">
        <DisplayCollaborations
          title="Patents"
          isLoading={isLoading}
          collaborations={collaborations}
        />
      </div>
      <Footer />
    </div>
  );
}
