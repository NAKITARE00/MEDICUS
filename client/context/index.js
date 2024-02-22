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

  const { mutateAsync: contributeToResearch } = useContractWrite(
    contract,
    "contributeToResearch"
  );

  const { mutateAsync: joinCollaboration } = useContractWrite(
    contract,
    "joinCollaboration"
  );

  const publishPatent = async (_title, _description, _organization, _uri) => {
    try {
      const data = await createPatent({
        args: [_title, _description, _organization, _uri],
      });
      console.log("contract call success", data);
    } catch (error) {
      console.log("contract call failed", error);
    }
  };

  const publishCollaboration = async (_name, _description, _uri) => {
    try {
      const data = await createCollaboration({
        args: [_name, _description, _uri],
      });
      console.log("contract call success", data);
    } catch (error) {
      console.log("contract call failed", error);
    }
  };

  const publishContributionToResearch = async (_id, _description) => {
    try {
      const data = await contributeToResearch({
        args: [_id, _description],
      });
    } catch (error) {
      console.log("contract call failed", error);
    }
  };

  const publishTeamup = async (_id) => {
    try {
      const data = await joinCollaboration({
        args: [_id],
      });
      console.log("contract call success", data);
    } catch (error) {
      console.log("contract call failed", error);
    }
  };

  const publishFund = async (_id, _amount) => {
    const data = await contract.call("crowdFund", [_id], {
      value: ethers.utils.parseEther(_amount),
    });
    return data;
  };

  const publishSale = async (_id, _amount) => {
    const data = await contract.call("sellPatent", [_id, _amount]);
    return data;
  };

  const publishPurchase = async (_id, _organization, _amount) => {
    const data = await contract.call("buyPatent", [_id, _organization], {
      value: ethers.utils.parseEther(_amount),
    });
  };

  const publishMarket = async () => {
    const patents = await contract.call("getPatentsOnSale");

    const parsedPatents = patents.map((patent, i) => ({
      id: patent.id,
      name: patent.name,
      amount: patent.amount,
      owner: patent.owner,
      pId: i,
    }));

    return parsedPatents;
  };

  const publishResearches = async () => {
    const researches = await contract.call("getResearches");

    const parsedResearches = researches.map((research, i) => ({
      id: research.id,
      name: research.title,
      description: research.description,
      uri: research.uri,
      admin: research.admin,
      funding: research.funding,
      organization: research.organization,
      pId: i,
    }));

    return parsedResearches;
  };

  const collaborations = async () => {
    const collaborations = await contract.call("getCollaborations");

    const parsedCollaborations = collaborations.map((collaboration, i) => ({
      id: collaboration.id,
      name: collaboration.title,
      description: collaboration.description,
      uri: collaboration.uri,
      admin: collaboration.admin,
      pId: i,
    }));
  };

  return (
    <StateContext.Provider
      value={{
        address,
        contract,
        createPatent: publishPatent,
        createCollaboration: publishCollaboration,
        contributeToResearch: publishContributionToResearch,
        joinCollaboration: publishTeamup,
        crowdFund: publishFund,
        sellPatent: publishSale,
        buyPatent: publishPurchase,
        getPatentOnSale: publishMarket,
        getResearches: publishResearches,
        getCollaborations: collaborations,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
