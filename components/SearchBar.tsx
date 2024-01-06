"use client";

import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Loader2, Search } from "lucide-react";
import { WordDataContext } from "@/contexts/word-data-context";
import { Input } from "@/components/ui";

type Inputs = {
  query: string;
};

const SearchBar = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const {
    states: { isLoading, wordData },
    actions: { getWordData, setActiveTabIndex },
  } = useContext(WordDataContext);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setActiveTabIndex(0);
    getWordData(data.query);
  };

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <Input
        register={register("query")}
        type="text"
        Icon={isLoading ? Loader2 : Search}
        spinner={isLoading}
        disabled={isLoading}
        defaultValue={wordData?.word}
      />
    </form>
  );
};

export default SearchBar;
