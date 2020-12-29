import React, { FC, useRef, useState } from 'react';

import styled from '@emotion/styled';

type GameBoardProps = {
  CELL_SIZE: string | number | 20;
  WIDHT: string | number | 800;
  HEIGHT: string | number | 600;
};

export const defaults: GameBoardProps = {
  CELL_SIZE: 20,
  WIDHT: 800,
  HEIGHT: 600,
};

export const Board = styled.div`
  position: relative;
  margin: 0 auto;
  background-color: #000;
  background-image: linear-gradient(#333 1px, transparent 1px),
    linear-gradient(90deg, #333 1px, transparent 1px);
`;

export const GameBoard: FC<GameBoardProps> = ({ CELL_SIZE, WIDHT, HEIGHT }) => {
  const ROWS = HEIGHT / CELL_SIZE;
  const COLUMNS = WIDHT / CELL_SIZE;
  const selfRef = React.createRef<any>();
  const [cells, setCells] = useState<any[]>([]);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [interval, setRefreshInterval] = useState(100);

  const boardRef = useRef<HTMLDivElement>();

  const getElementOffset = () => {
    const rect = selfRef.current.getBoundingClientRect();
    const doc = document.documentElement;

    return {
      x: Number(rect.left) + window.pageXOffset - doc.clientLeft,
      y: Number(rect.top) + window.pageYOffset - doc.clientTop,
    };
  };

  const buildCells = () => {
    let cells = [];
    for (let y = 0; y < ROWS; y++) {
      for (let x = 0; x < COLUMNS; x++) {
        if (board[y][x]) {
          cells.push({ x, y });
        }
      }
    }

    return cells;
  };

  const buildEmptyBoard = () => {
    const board: any[] = [];
    for (let y = 0; y < ROWS; y++) {
      board[y] = [];
      for (let x = 0; x < COLUMNS; x++) {
        board[y][x] = false;
      }
    }

    return board;
  };

  return (
    <Board
      style={{
        width: WIDHT,
        height: HEIGHT,
        backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`,
      }}
    />
  );
};

GameBoard.defaultProps = {
  WIDHT: defaults.WIDHT,
  HEIGHT: defaults.HEIGHT,
  CELL_SIZE: defaults.CELL_SIZE,
};
