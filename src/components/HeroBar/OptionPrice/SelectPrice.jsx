import React, { useState } from "react";
import { priceRange } from "./constants/price";
import Select from "react-select";

const SelectPrice = () => {
  // return (
  //   <select className="w-60 bg-dollar bg-right bg-no-repeat appearance-none border-none outline-none text-xl text-[#2C2C2C]">
  //     {priceRange.map((item, index) => (
  //       <option key={index}>{item.price}</option>
  //     ))}
  //   </select>
  // );

  const [selectedOption, setSelectedOption] = useState(null);

  const getValue = () => {
    return selectedOption
      ? priceRange.find(d => d.value === selectedOption)
      : "";
  };

  const onChange = newValue => {
    setSelectedOption(newValue.value);
  };

  return (
    <Select
      classNamePrefix="custom-selectHeroBar"
      default={selectedOption}
      onChange={onChange}
      value={getValue()}
      options={priceRange}
      // menuIsOpen={true}
      isSearchable={false}
      placeholder="Select Price $"
      className="w-50 text-[#2C2C2C] text-lg lowercase"
    />
  );
};

export default SelectPrice;
