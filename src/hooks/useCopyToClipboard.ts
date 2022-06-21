import { useState } from "react";
import copy from "copy-to-clipboard";

interface Options {
  debug?: boolean;
  message?: string;
  format?: string; // MIME type
  onCopy?: (clipboardData: object) => void;
}

type UseCopyToClipboardReturnType = [
  (text: string, options?: Options) => void,
  { value: string | undefined; success: boolean | undefined }
];

export const useCopyToClipboard = (): UseCopyToClipboardReturnType => {
  const [value, setValue] = useState<string>();
  const [success, setSuccess] = useState<boolean>();

  const copyToClipboard = (text: string, options?: Options) => {
    const result = copy(text, options);
    if (result) setValue(text);
    setSuccess(result);
  };

  return [copyToClipboard, { value, success }];
};
