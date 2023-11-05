import { Filter } from "./Filter";
import { ProductCard } from "./ProductCard";

const Search = () => {
  return (
    <section>
      <div className="flex justify-between gap-4 lg:gap-6">
        <Filter />
        <div>
          <header className="f-ic-jb mb-4">
            <p>
              Found 367 results for{" "}
              <span className="font-bold">dji phantom</span>
            </p>
            <div className="f-ic-jb">
              <button className="py-1 px-3 border border-gray-500 rounded-3xl text-sm">
                Sort by Featured
              </button>
            </div>
          </header>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
