"use client";

import { useContext } from "react";
import { cn } from "@/lib/utils";
import { TabsProps } from "@/types";
import { WordDataContext } from "@/contexts/word-data-context";

const Tabs = ({ tabs, label, handleClick = () => {} }: TabsProps) => {
  const {
    states: { activeTabIndex },
    actions: { setActiveTabIndex },
  } = useContext(WordDataContext);

  const onClick = (index: number) => {
    handleClick();
    setActiveTabIndex(index);
  };

  return (
    <div className="flex gap-3 items-center">
      {tabs &&
        tabs.map((tab: any, index: number) => (
          <button
            key={`${tab[label]}-${index}}`}
            onClick={() => onClick(index)}
            className={cn(
              "px-3.5 font-medium flex items-center justify-center py-1 rounded-md",
              activeTabIndex == index
                ? "bg-black text-white"
                : "bg-[#dedede] text-black"
            )}
          >
            {tab[label]}
          </button>
        ))}
    </div>
  );
};

export default Tabs;
