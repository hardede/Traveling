import React from "react";
import { worksList } from "./worksList";

const Works = () => {
  return (
    <div className="mt-32">
      <div className="max-w-8xl mx-auto px-5">
        <div className="grid grid-cols-4 xxll:grid-cols-2 sm:grid-cols-1">
          {worksList.map(work => (
            <div
              key={work.id}
              className="px-10 pt-11 pb-15 mr-7.5 last:mr-0 text-center sm:mr-0 xs:px-5 xss:px-3"
            >
              <img
                src={work.imgUrl}
                alt="items"
                style={{ height: 100 }}
                className="mx-auto"
                draggable="false"
              />
              <h3 className="mt-6 mb-5 text-[#2C2C2C] text-2xl font-noto font-bold">
                {work.title}
              </h3>
              <p className="text-[#A79997] text-lg">{work.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
