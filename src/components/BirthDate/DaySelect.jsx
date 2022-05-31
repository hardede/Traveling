import React, { useState } from "react";
import Select from "react-select";
import { dayData } from "./constants/day";

const DaySelect = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const getValue = () => {
    return selectedOption ? dayData.find(d => d.value === selectedOption) : "";
  };

  const onChange = newValue => {
    setSelectedOption(newValue.value);
  };

  return (
    <Select
      classNamePrefix="custom-selectAccount"
      onChange={onChange}
      value={getValue()}
      options={dayData}
      // menuIsOpen={true}
      isSearchable={false}
      placeholder="Day"
      className="w-22 transition-all ease-in"
    />
  );
};

export default DaySelect;
