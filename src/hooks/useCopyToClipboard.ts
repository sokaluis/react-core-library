import { useState } from "react";
import copy from "copy-to-clipboard";

type UseCopyToClipboardReturnType = [
  (text: string, options?: any) => void,
  { value: string | undefined; success: boolean | undefined }
];

export const useCopyToClipboard = (): UseCopyToClipboardReturnType => {
  const [value, setValue] = useState<string>();
  const [success, setSuccess] = useState<boolean>();

  const copyToClipboard = (text: string, options?: any) => {
    const result = copy(text, options);
    if (result) setValue(text);
    setSuccess(result);
  };

  return [copyToClipboard, { value, success }];
};
