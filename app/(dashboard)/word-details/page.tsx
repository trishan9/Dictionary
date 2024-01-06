"use client";

import { redirect } from "next/navigation";
import Link from "next/link";
import { useContext } from "react";
import { ArrowLeft } from "lucide-react";
import { WordDataContext } from "@/contexts/word-data-context";
import { WordData } from "@/components";

const WordDetailsPage = () => {
  const {
    states: { wordData },
  } = useContext(WordDataContext);

  if (!wordData) {
    return redirect("/");
  }

  return (
    <section className="flex flex-col gap-7 w-full lg:px-60">
      <div className="flex items-center gap-2">
        <Link href="/">
          <ArrowLeft className="w-8 h-8 mr-2" />
        </Link>

        <h1 className="capitalize text-3xl font-medium">
          Word: {wordData.word}
        </h1>
      </div>

      <WordData />
    </section>
  );
};

export default WordDetailsPage;
