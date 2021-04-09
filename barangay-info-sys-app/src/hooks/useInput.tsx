import { useState } from "react";

const useInput = (initialValue?: string) => {
  const [value, setValue] = useState(() => {
    return !!initialValue ? initialValue : "";
  });

  const set = (newValue?: string) => {
    setValue(newValue || "");
  };

  const bind = {
    value,
    onChange: (e: any) => {
      setValue(e.target.value);
    },
  };

  return [value, bind, set] as const;
};

export default useInput;
