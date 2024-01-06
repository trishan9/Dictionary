import React from "react";
import { cn } from "@/lib/utils";
import { IInputProps } from "@/types";

const Input = (props: IInputProps) => {
  const { className, label, Icon, register, spinner, ...rest } = props;

  return (
    <div className="flex flex-col items-start gap-1">
      {label && (
        <p className="text-sm text-gray-500 uppercase font-semibold">{label}</p>
      )}

      <div className="flex w-full justify-center items-center relative">
        <input
          type="text"
          className={cn(
            "border bg-background-primary disabled:cursor-not-allowed disabled:opacity-50 outline-none focus:border-brand-blue focus:shadow-blue-shadow text-sm sm:text-base lg:text-lg text-foreground-primary w-full p-4 py-2 rounded-lg border-border-primary",
            className,
            Icon != null && "pl-10"
          )}
          {...register}
          {...rest}
        />

        {Icon != null && (
          <Icon
            className={cn(
              "absolute left-0 ml-3 w-5 h-5",
              spinner && "animate-spin"
            )}
          />
        )}
      </div>
    </div>
  );
};

export default Input;
