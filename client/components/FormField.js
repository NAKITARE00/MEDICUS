export function FormField({
  labelName,
  placeholder,
  inputType,
  value,
  handleChange,
  styles,
}) {
  return (
    <label className="flex-1 w-full flex flex-col">
      {labelName && (
        <span
          className="font-[sans-serif] text-[15px] leading-[23px]
        text-[white] mb-[10px]"
        >
          {labelName}
        </span>
      )}
      <input
        requiredvalue={value}
        onChange={handleChange}
        type={inputType}
        step="0.1"
        placeholder={placeholder}
        className={`py-[15px] sm:px-[25px] px-[15px] 
                outline-none border-[1px] border-[#fff] 
                bg-transparent font-[sans-serif] text-white text-[14px] 
                placeholder:text-[black] 
                rounded-[10px] sm:min-w-[300px]
                focus:ring-2 focus:ring-#002D62-500 ${styles}`}
      />
    </label>
  );
}
