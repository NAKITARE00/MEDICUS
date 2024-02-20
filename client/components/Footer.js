import Link from "next/link";

export function Footer() {
  return (
    <div className="flex flex-col items-center justify-center bg-black text-white py-6 mt-[20px]">
      <div className="flex flex-col md:flex-row gap-4 md:gap-10">
        <Link className="text-lg font-bold hover:underline" href="#">
          Medicus
        </Link>
        <Link className="text-sm hover:underline" href="#">
          BNB Chain
        </Link>
        <Link className="text-sm hover:underline" href="#">
          Platform Support
        </Link>
        <Link className="text-sm hover:underline" href="#">
          Contact
        </Link>
      </div>
      <p className="text-sm mt-4">© 2024 MEDICUS. All rights reserved.</p>
    </div>
  );
}
