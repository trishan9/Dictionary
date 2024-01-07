import { ComponentPropsWithoutRef, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

export type LayoutProps = {
  children: ReactNode;
};

export interface IInputProps extends ComponentPropsWithoutRef<"input"> {
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
    activeTabIndex: number;
  };
  actions: {
    getWordData: (query: string) => void;
    setActiveTabIndex: (index: number) => void;
  };
};

export type TabsProps = {
  tabs: any[];
  label: string;
  handleClick?: () => void;
};
