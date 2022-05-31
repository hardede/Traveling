import React, { useState } from "react";
import Select from "react-select";
import { monthData } from "./constants/month";

const MonthSelect = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const getValue = () => {
    return selectedOption ? monthData.find(d => d.value === selectedOption) : "";
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
      options={monthData}
      isSearchable={false}
      placeholder="Month"
      className="w-32 mx-3 xs:mx-0 xs:my-3"
    />
  );
};

export default MonthSelect;
