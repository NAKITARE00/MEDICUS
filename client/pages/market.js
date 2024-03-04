import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import Image from "next/image";
import { useStateContext } from "../context";

export default function Market() {
  const { getPatentOnSale } = useStateContext();
  return <div>Market</div>;
}
