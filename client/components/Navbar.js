import Link from "next/link";
import { ConnectWallet } from "@thirdweb-dev/react";
import { useConnect, metamaskWallet } from "@thirdweb-dev/react";
import { Center } from "@chakra-ui/layout";
import Image from "next/image";
import icon from "../public/icon.png";
import { useStateContext } from "../context";
import { Button } from "./Button";

const metamaskConfig = metamaskWallet();

export function Navbar() {
  const { address } = useStateContext();
  const connect = useConnect();

  return (
    <Center
      className="flex h-17 w-full items-center px-4 md:px-6 bg-[black]
      text-white font-[sans-serif]"
    >
      <Link className="mr-6 flex items-center" href="#">
        <Image src={icon} />
        <span className="ml-2 text-lg">MEDICUS</span>
      </Link>

      <div className="ml-[350px] mr-[350px]">
        <nav className="flex gap-4 sm:gap-6 text-55px">
          <Link className="hover:underline underline-offset-4" href="/">
            Home
          </Link>
          <Link className="hover:underline underline-offset-4" href="/patents">
            Patents
          </Link>
          <Link
            className="hover:underline underline-offset-4"
            href="/collaboration"
          >
            Teams
          </Link>
          <Link className="hover:underline underline-offset-4" href="/market">
            Buy
          </Link>
        </nav>
      </div>
      <div className="p-[2px]">
        <ConnectWallet
          theme={"dark"}
          btnTitle={"Connect"}
          modalSize={"compact"}
        />
      </div>
    </Center>
  );
}
