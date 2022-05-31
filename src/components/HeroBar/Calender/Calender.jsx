import { addMonths } from "date-fns";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-day-picker/dist/style.css";

const Calender = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  return (
    <DatePicker
      classNamePrefix="custom-selectDatePicker"
      dateFormat="dd/MM/yy"
      placeholderText="Pick your date"
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      onChange={update => {
        setDateRange(update);
      }}
      minDate={new Date()}
      maxDate={addMonths(new Date(), 5)}
      showDisabledMonthNavigation
      isClearable={true}
      className="w-50 outline-none h-9.5 text-lg  placeholder:text-[#FF715B] text-[#FF715B] cursor-pointer placeholder:bg-calendar placeholder:bg-no-repeat placeholder:bg-right pr-2 placeholder:bg-opacity-70 placeholder:hover:bg-opacity-100"
    />
  );
};

export default Calender;
