import { SearchBar, WordData } from "@/components";

const HomePage = () => {
  return (
    <section className="flex flex-col gap-7 w-full sm:px-32 lg:px-60">
      <SearchBar />

      <WordData />
    </section>
  );
};

export default HomePage;
