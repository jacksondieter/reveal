import React, { useState } from "react";
import Copy from "../copy.svg";
import Copy_Active from "../copy_a.png";
import { localhost } from "../config";

export function UrlBox({ code }: { code: string }) {
  const url = `${localhost}${code}`;
  const [isCopied, setIsCopied] = useState(false);
  console.log(localhost);
  async function copyTextToClipboard() {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(url);
    }
  }

  const handleCopyClick = () => {
    copyTextToClipboard()
      .then(() => {
        setIsCopied(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <label className="label-linkbox">
        This is your secret link, but be warned! The link can only be revealed
        once, afterwards it self-destructs.
      </label>
      <div className={isCopied ? "linkbox copy-linkbox" : "linkbox"}>
        <span className="text-linkbox">{url}</span>
        {isCopied ? (
          <img
            src={Copy_Active}
            alt="copy icon"
            className="copy-icon"
            onClick={handleCopyClick}
          />
        ) : (
          <img
            src={Copy}
            alt="copy icon"
            className="copy-icon"
            onClick={handleCopyClick}
          />
        )}
      </div>
    </div>
  );
}
