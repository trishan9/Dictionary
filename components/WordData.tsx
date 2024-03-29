"use client";

import { Fragment, useContext } from "react";
import { Loader2 } from "lucide-react";
import { WordDataContext } from "@/contexts/word-data-context";
import { AudioControl, Tabs } from "@/components/ui";

const WordData = () => {
  const {
    states: { isLoading, isError, wordData, activeTabIndex },
  } = useContext(WordDataContext);

  const isPhoneticsAvailable = wordData
    ? wordData.phonetics.length > 0
      ? true
      : false
    : false;
  const phonetics = wordData
    ? isPhoneticsAvailable
      ? wordData.phonetics[wordData.phonetics.length == 1 ? 0 : 1]
      : undefined
    : undefined;

  return (
    <div className="w-full min-h-[300px] border-2 rounded-2xl p-6 border-border-primary relative flex flex-col items-start gap-6">
      {isLoading && (
        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full  rounded-2xl  bg-background-primary">
          <Loader2 className="w-16 h-16 animate-spin" />
        </div>
      )}

      {isError ? (
        <p className="italic">Search results not found!</p>
      ) : (
        <Fragment>
          {wordData && (
            <Fragment>
              {isPhoneticsAvailable && phonetics ? (
                <div className="flex items-center gap-4">
                  {phonetics.audio ? (
                    <AudioControl audioSrc={phonetics.audio} />
                  ) : (
                    <p className="italic text-sm">Audio Unavailable</p>
                  )}

                  <p>{phonetics.text}</p>
                </div>
              ) : (
                <p className="italic">
                  Phonetics for{" "}
                  <span className="font-semibold">{wordData.word}</span> not
                  available!
                </p>
              )}
            </Fragment>
          )}

          {wordData?.meanings && (
            <Tabs
              tabs={wordData.meanings}
              label="partOfSpeech"
              handleClick={() => console.log("hello")}
            />
          )}

          <ol className="list-decimal px-5 gap-2 flex flex-col items-start">
            {wordData?.meanings &&
              wordData?.meanings[activeTabIndex].definitions.map(
                (definition) => (
                  <li key={definition.definition}>{definition.definition}</li>
                )
              )}
          </ol>
        </Fragment>
      )}
    </div>
  );
};

export default WordData;
