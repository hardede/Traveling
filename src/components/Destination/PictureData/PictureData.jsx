import React from 'react'
import { picturesInfo } from '../picturesInfo';

const PictureData = () => {
  return (
    <div className="grid grid-cols-3 mdd:grid-cols-1 mdd:mx-auto">
      {picturesInfo.map(item => (
        <div key={item.id} className="relative mr-5 last:mr-0 mdd:mb-4 mdd:mr-0">
          <img
            src={item.picUrl}
            alt={item.altPic}
            style={{ height: 400, width: 330 }}
            draggable="false"
          />
          <h3 className="absolute bottom-4 left-4 text-white text-xxl font-noto font-bold">
            {item.name}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default PictureData