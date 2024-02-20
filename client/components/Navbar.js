import Link from "next/link";
import { ConnectWallet } from "@thirdweb-dev/react";
import { Center } from "@chakra-ui/layout";
import Image from "next/image";

export function Navbar() {
  return (
    <Center
      className="flex h-17 w-full items-center px-4 md:px-6 bg-black
      text-white font-[epilogue]"
    >
      <Link className="mr-6 flex items-center" href="#">
        {/* <Image src={"../public/medicus.svg"} width={40} height={40} /> */}
        <span className="ml-2 text-lg font-semibold">MEDICUS</span>
      </Link>

      <div className="ml-[350px] mr-[350px]">
        <nav className="flex gap-4 sm:gap-6 text-55px">
          <Link className="hover:underline underline-offset-4" href="#">
            Patents & Research
          </Link>
          <Link className="hover:underline underline-offset-4" href="#">
            Collaborate
          </Link>
          <Link className="hover:underline underline-offset-4" href="#">
            Buy Patents
          </Link>
        </nav>
      </div>
      <div className="">
        <ConnectWallet
          theme={"dark"}
          btnTitle={"Connect"}
          modalSize={"compact"}
        />
      </div>
    </Center>
  );
}
