import React from "react";

const MyInput = React.forwardRef((props, ref) => {
  return (
    <input
      className="px-3 w-330 h-11 border border-[#777] outline-none focus:border-[#FF715B] xs:w-[265px]"
      {...props}
      ref={ref}
    />
  );
});

export default MyInput;
