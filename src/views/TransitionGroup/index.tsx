import { useState } from "react";
import {
  getFunName,
  getRandomReadTime,
  getArticleType,
} from "helpers/transition.helpers";
import {
  StyledContainer,
  StyledH1,
  StyledIntroText,
} from "./components/styles";
import AddButton from "./components/AddButton";
import TileGroup from "./components/TileGroup";

const TransitionGroup = () => {
  // make below based on routes
  const [items, setItems] = useState([
    {
      id: 0,
      title: "Giraffe In Paris",
      subtitle: "New Article",
      readTime: 8,
    },
  ]);

  const addItem = () => {
    const timestamp = Date.now();
    setItems([
      ...items,
      {
        id: timestamp,
        title: getFunName(),
        subtitle: getArticleType(),
        readTime: getRandomReadTime(),
      },
    ]);
  };

  const removeItem = (id: number | MouseEvent) => {
    console.log("here is the " + id);
    // remove the clicked route from the array using an array filter
    // pass in each item via the filter and check if it doesn't equal
    // the id of the clicked item
    const newItems = [...items].filter((item) => {
      return item.id !== id;
    });

    setItems(newItems);
  };

  return (
    <StyledContainer>
      <StyledH1>Dirty Transition Group Example</StyledH1>
      <StyledIntroText>
        Here is a test of the transition group and styled components, wrapped
        into one. The point is to show how you can transition in elements and
        out elements by wrapping them in the transition group. You can do this
        using TransitionGroup and CSSTransition.
      </StyledIntroText>
      <AddButton label={"Add an Item"} addItem={addItem}></AddButton>
      <TileGroup items={items} removeItem={removeItem}></TileGroup>
    </StyledContainer>
  );
};

export default TransitionGroup;
