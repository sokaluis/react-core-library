import { MouseEvent } from "react";
import { StyledTile } from "./styles";

interface TileProps {
  id: number;
  title: string;
  subtitle: string;
  readTime: string | number;
  removeItem: (id: number | MouseEvent) => void;
}

const Tile = ({ id, readTime, removeItem, subtitle, title }: TileProps) => {
  return (
    <StyledTile key={id} className="card-wrapper" onClick={removeItem}>
      <div className="card">
        <h6>{subtitle}</h6>
        <h4>{title}</h4>
        <div className="card-pill">{readTime} min</div>
      </div>
    </StyledTile>
  );
};

export default Tile;
