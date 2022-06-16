import { TransitionGroup, CSSTransition } from "react-transition-group";
import { StyledGrid } from "./styles";
import Tile from "./Tile";
// ☝🏻
// wrap Styled Grid in Transition Group
// wrap individual items in CSS transition
// need to apply the styled to styled component

interface TileGroupProps {
  items: Array<{
    id: number;
    title: string;
    subtitle: string;
    readTime: string | number;
  }>;
  removeItem: (id: number | MouseEvent) => void;
}

const TileGroup = ({ items, removeItem }: TileGroupProps) => {
  return (
    // if I wrapped StyledGrid in TransitionGroup or vice versa,
    // I got some odd results. cleanest way is to use the component prop
    // of transition group to have its behavior applied to StyledGrid
    // rather than wrapping in the JSX
    <TransitionGroup component={StyledGrid}>
      {items.map((item) => (
        <CSSTransition key={item.id} timeout={300} classNames="transition">
          <Tile
            {...item}
            removeItem={() => {
              removeItem(item.id);
            }}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default TileGroup;
