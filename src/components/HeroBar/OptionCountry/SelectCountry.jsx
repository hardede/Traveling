import React, { useState } from "react";
import Select from "react-select";
import { countryData } from "./constants/country";


const SelectCountry = () => {

const [selectedOption, setSelectedOption] = useState(null);

  const getValue = () => {
    return selectedOption
      ? countryData.find(d => d.value === selectedOption)
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
      options={countryData}
      // menuIsOpen={true}
      isOptionDisabled={(option) => option.disabled}
      isSearchable={false}
      placeholder="Select Country"
      className="w-50 text-[#2C2C2C] text-lg lowercase"
    />
  );
};

export default SelectCountry;
