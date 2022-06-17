import { useMediaQuery } from "hooks";

const MediaQueryExample = () => {
  const isLarge = useMediaQuery("(min-width: 200px)");

  return <div>Large: {isLarge.toString()}</div>;
};

export default MediaQueryExample;
