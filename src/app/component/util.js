import { useState } from "react";

export function useCopyToClipboard() {
  const [copiedCode, setCopiedCode] = useState("");

  const copyToClipboard = (text, id) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopiedCode(id);
        setTimeout(() => setCopiedCode(""), 2000);
      })
      .catch((err) => {
        console.error("Clipboard write failed:", err);
      });
  };

  return { copiedCode, copyToClipboard };
}
