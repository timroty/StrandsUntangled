"use client";

import { useState, useRef, useEffect, forwardRef } from "react";

const GrowingInput = forwardRef((props, ref) => {
  const [value, setValue] = useState("");
  const inputRef: any = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      let numChars = Math.max(1, Math.min(value.length, 50));
      if (numChars >= 16) {
        numChars *= 0.86;
      } else if (numChars >= 8) {
        numChars *= 0.9;
      }

      inputRef.current.style.width = `${numChars}ch`;
    }
  }, [value]);

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      className="rounded-md transition-all duration-200 focus:outline-none"
      style={{ minWidth: "1ch", maxWidth: "100ch", padding: 0 }}
      ref={(node) => {
        inputRef.current = node;
        if (ref) {
          if (typeof ref === "object" && ref !== null) {
            ref.current = node;
          } else if (typeof ref === "function") {
            ref(node);
          }
        }
      }}
    />
  );
});

export default GrowingInput;
