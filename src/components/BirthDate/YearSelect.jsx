import React, { useState } from "react";
import Select from "react-select";
import { yearData } from "./constants/year";

const YearSelect = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const getValue = () => {
    return selectedOption ? yearData.find(d => d.value === selectedOption) : "";
  };

  const onChange = newValue => {
    setSelectedOption(newValue.value);
  };

  return (
    <Select
      classNamePrefix="custom-selectAccount"
      default={selectedOption}
      onChange={onChange}
      value={getValue()}
      options={yearData}
      isSearchable={false}
      placeholder="Year"
      className="w-24"
    />
  );
};

export default YearSelect;
