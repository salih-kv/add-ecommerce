import { useState } from "react";

export const PriceRangeSlider = () => {
  const [minPrice, setMinPrice] = useState(2500);
  const [maxPrice, setMaxPrice] = useState(7500);

  const handleMinPriceChange = (e) => {
    const newMinPrice = parseInt(e.target.value);
    if (maxPrice - newMinPrice >= 1000) {
      setMinPrice(newMinPrice);
    }
  };

  const handleMaxPriceChange = (e) => {
    const newMaxPrice = parseInt(e.target.value);
    if (newMaxPrice - minPrice >= 1000) {
      setMaxPrice(newMaxPrice);
    }
  };

  const sliderLeft = ((minPrice / 15000) * 100).toFixed(2) + "%";
  const sliderWidth = (((maxPrice - minPrice) / 15000) * 100).toFixed(2) + "%";

  return (
    <div className="my-4 min-w-[200px]">
      <div className="h-2 relative bg-gray-200 rounded-lg">
        <div
          className="h-full absolute rounded-lg inset-x-1/4 bg-black"
          style={{ left: sliderLeft, width: sliderWidth }}
        ></div>
      </div>
      <div className="relative">
        <input
          type="range"
          className="range-min range-input"
          min="0"
          max="15000"
          value={minPrice}
          step="500"
          onChange={handleMinPriceChange}
        />
        <input
          type="range"
          className="range-max range-input"
          min="0"
          max="15000"
          value={maxPrice}
          step="500"
          onChange={handleMaxPriceChange}
        />
      </div>
      <div className="mt-6 flex justify-center gap-2">
        <div className="flex items-center w-full h-8">
          <input
            type="number"
            className="field-input"
            value={minPrice}
            onChange={handleMinPriceChange}
          />
        </div>
        <div className="flex items-center justify-center">-</div>
        <div className="flex items-center w-full h-8">
          <input
            type="number"
            className="field-input"
            value={maxPrice}
            onChange={handleMaxPriceChange}
          />
        </div>
      </div>
    </div>
  );
};
