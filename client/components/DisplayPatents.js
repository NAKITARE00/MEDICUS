import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { PatentCard } from "./PatentCard";
import Image from "next/image";

export function DisplayPatent({ title, isLoading, patents }) {
  const navigate = useNavigate();
  const handleNavigate = (patent) => {
    navigate(`/patents/${patent.name}`, { state: patent });
  };

  return (
    <div>
      <h1
        className="font-epilogue font-bold text-[18px]
        text-black text-left"
      >
        {title} ({patents.length})
      </h1>

      <div className="flex flex-wrap mt-[20px] gap-[26px]">
        {/* {isLoading && (
          <Image
            src={loader}
            className="w-{100px] h-[100px]
                object-contain"
          />
        )} */}

        {!isLoading && patents.length === 0 && (
          <p
            className="font-epilogue font-semibold text-[14px
            leading-[30px] text-[#818183]"
          >
            No Patents To Display
          </p>
        )}

        {!isLoading &&
          patents.length > 0 &&
          patents.map((patent) => (
            <PatentCard
              key={uuidv4()}
              {...patent}
              handleClick={() => handleNavigate(patent)}
            />
          ))}
      </div>
    </div>
  );
}
