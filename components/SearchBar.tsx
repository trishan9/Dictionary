"use client";

import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Loader2, Search } from "lucide-react";
import { Input } from "@/components/ui";
import { WordDataContext } from "@/contexts/word-data-context";

type Inputs = {
  query: string;
};

const SearchBar = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const {
    states: { isLoading },
    actions: { getWordData },
  } = useContext(WordDataContext);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    getWordData(data.query);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        register={register("query")}
        type="text"
        Icon={isLoading ? Loader2 : Search}
        spinner={isLoading}
        disabled={isLoading}
      />
    </form>
  );
};

export default SearchBar;
