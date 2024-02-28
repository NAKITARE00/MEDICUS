import Link from "next/link";

export function Header() {
  return (
    <div className="flex flex-col items-center bg-[] justify-center font-[sans-serif] p-[5px] ">
      <div className="flex flex-row gap-[10px]">
        <Link className="text-sm hover:underline" href="#">
          BNB-Chain
        </Link>
        <Link className="text-sm hover:underline" href="#">
          Support
        </Link>
      </div>
    </div>
  );
}
