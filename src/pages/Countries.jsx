import Filter from "../components/Filter";
import Search from "../components/Search";

const Homepage = () => {
  const handleSearch = (userInput) => {
    console.log(userInput);
  };
  const handleFilter = (userOption) => {
    console.log(userOption);
  };

  return (
    <div>
      <Search searchHandler={handleSearch} />
      <Filter filterHandler={handleFilter} />
    </div>
  );
};

export default Homepage;
