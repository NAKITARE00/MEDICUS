import Link from "next/link";

export function Header() {
  return (
    <div className="flex flex-col items-center justify-center font-semibold font-[epilogue]">
      <div className="flex flex-col md:flex-row gap-4 md:gap-10">
        <Link className="text-sm hover:underline" href="#">
          BNB Chain
        </Link>
        <Link className="text-sm hover:underline" href="#">
          Platform Support
        </Link>
        <Link className="text-sm hover:underline" href="#">
          Contact Us
        </Link>
      </div>
    </div>
  );
}
