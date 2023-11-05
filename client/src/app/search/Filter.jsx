import { PriceRangeSlider } from "./PriceRangeSlider";

export const Filter = () => {
  return (
    <div className="hidden md:block min-w-[260px] min-h-[670px] bg-white p-6 rounded-2xl">
      <header>Filter</header>
      <PriceRangeSlider />
      <div>
        <title>Brand</title>
        <input type="checkbox" />
        <label>DJI</label>
      </div>
      <div>
        filter optios
        <p>brand</p>
        <p>ratings</p>
        <p>discount</p>
      </div>
    </div>
  );
};
