import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import Image from "next/image";
import { useStateContext } from "../context";

export default function Collaboration() {
  const { getCollaborations } = useStateContext();
  return <div>Collaboration</div>;
}
