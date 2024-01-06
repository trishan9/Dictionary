"use client";

import { createContext, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import type { LayoutProps, TWordData, TWordDataContext } from "@/types";

//@ts-ignore
export const WordDataContext = createContext<TWordDataContext>({});
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const WordDataContextProvider = ({ children }: LayoutProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [wordData, setWordData] = useState<TWordData>();
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  const getWordDataMutation = useMutation({
    mutationFn: async (query: string) => {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await axios.get(`${API_BASE_URL}/${query}`);
        setWordData(data.data[0]);
      } catch (error) {
        setIsError(true);
        setWordData(undefined);
      } finally {
        setIsLoading(false);
      }
    },
  });

  const getWordData = (query: string) => {
    getWordDataMutation.mutate(query);
  };

  const states = { isLoading, isError, wordData, activeTabIndex };
  const actions = { getWordData, setActiveTabIndex };

  return (
    <WordDataContext.Provider value={{ states, actions }}>
      {children}
    </WordDataContext.Provider>
  );
};

export default WordDataContextProvider;
