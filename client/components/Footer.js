import Link from "next/link";
import Image from "next/image";
import icon from "../public/icon.png";

export function Footer() {
  return (
    <div className="flex flex-col font-[sans-serif] items-center justify-center bg-[black] text-white py-6 font-[bold]">
      <div className="flex flex-col md:flex-row gap-4 md:gap-10">
        <Link className="mr-6 flex items-center" href="#">
          <Image src={icon} />
          <span className="ml-2 text-lg">MEDICUS</span>
        </Link>
        <p className="text-sm mt-4">© 2024 MEDICUS. All rights reserved.</p>
      </div>
    </div>
  );
}
