import { SearchBar, WordData, MainLogo } from "@/components";

const HomePage = () => {
  return (
    <section className="flex flex-col items-center gap-7 w-full sm:px-32 lg:px-60">
      <SearchBar />

      <WordData />

      <MainLogo />
    </section>
  );
};

export default HomePage;
