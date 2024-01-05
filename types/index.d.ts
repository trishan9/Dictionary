import React from "react";
import type { LucideIcon } from "lucide-react";

export type LayoutProps = {
  children: React.ReactNode;
};

export interface IInputProps extends React.ComponentPropsWithoutRef<"input"> {
  label?: string;
  Icon?: LucideIcon;
  register?: {};
  spinner?: boolean;
}

export type TWordData = {
  word: string;
  title?: string;
  phonetics: {
    text: string;
    audio: string;
  }[];
  meanings: {
    partOfSpeech: string;
    definitions: {
      definition: string;
    }[];
  }[];
};

export type TWordDataContext = {
  states: {
    isLoading: boolean;
    isError: boolean;
    wordData: TWordData | undefined;
  };
  actions: { getWordData: (query: string) => void };
};
