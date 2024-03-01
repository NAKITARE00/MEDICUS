export function Button({ btnType, title, handleClick, styles }) {
  return (
    <button
      type={btnType}
      className={`font-[sans-serif] text-[16px] 
      text-white p-3 rounded-[8px]
      ${styles}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
}
