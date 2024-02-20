import React, { useContext, createContext } from "react";
import { useAddress, useContract, useContractWrite } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import Medicus from "../contract/Medicus.json";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const { contract } = useContract("", Medicus.abi);
  const address = useAddress();

  const { mutateAsync: createPatent } = useContractWrite(
    contract,
    "createPatent"
  );
  const { mutateAsync: createCollaboration } = useContractWrite(
    contract,
    "createCollaboration"
  );
  return <StateContext.Provider value={{}}>{children}</StateContext.Provider>;
};

export const useStateContext = () => useContext(StateContext);
