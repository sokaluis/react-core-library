import { useCopyToClipboard } from "hooks";

const CopyToClipboardExample = () => {
  const [copyToClipboard, { success }] = useCopyToClipboard();

  return (
    <>
      {/* in this case we have to pass here the value of inputText */}
      <button onClick={() => copyToClipboard("This was copied")}>
        {success ? "Copied" : "Copy Text"}
      </button>
      <input type="text" />
    </>
  );
};

export default CopyToClipboardExample;
