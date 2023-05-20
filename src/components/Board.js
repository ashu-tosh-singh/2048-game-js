import React, { useState } from "react";
import Tile from "./Tile";
import Cell from "./Cell";
import { Board } from "../helper";

const BoardView = () => {
  const [board, setBoard] = useState(new Board());

  const cells = board.cells.map((row, rowIndex) => {
    return (
      <div>
        {row.map((col, colIndex) => {
          return <Cell key={rowIndex * board.size + colIndex} />;
        })}
      </div>
    );
  });

  const tiles = board.tiles
    .filter((tile) => tile.value !== 0)
    .map((tile, index) => {
      return <Tile tile={tile} key={index} />;
    });

  return (
    <div>
      <div className="board">
        {cells}
        {tiles}
      </div>
    </div>
  );
};

export default BoardView;
