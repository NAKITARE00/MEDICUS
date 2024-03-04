import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { PatentCard } from "./PatentCard";
import Image from "next/image";
import Link from "next/link";

export function DisplayCollaborations({ title, isLoading, collaborations }) {
  const router = useRouter();
  const handleNavigate = (collaboration) => {
    router.push(`/collaboration/${collaboration.name}`, {
      state: collaboration,
    });
  };

  return (
    <div>
      <h1
        className="font-epilogue font-bold text-[18px]
        text-black text-left"
      >
        {title} ({collaborations.length})
      </h1>

      <div className="flex flex-wrap mt-[20px] gap-[26px]">
        {/* {isLoading && (
          <Image
            src={loader}
            className="w-{100px] h-[100px]
                object-contain"
          />
        )} */}

        {!isLoading && collaborations.length === 0 && (
          <p
            className="font-epilogue font-semibold text-[14px
            leading-[30px] text-[#818183]"
          >
            No Collaborations To Display
          </p>
        )}

        {!isLoading &&
          collaborations.length > 0 &&
          collaborations.map((collaboration) => (
            <Link href="">
              <PatentCard
                key={uuidv4()}
                {...collaboration}
                handleClick={() => handleNavigate(collaboration)}
              />
            </Link>
          ))}
      </div>
    </div>
  );
}
