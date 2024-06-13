function knightMoves(start, end) {
    const moves = [
      [2, 1], [1, 2], [-1, 2], [-2, 1],
      [-2, -1], [-1, -2], [1, -2], [2, -1]
    ];
  
    const isValidMove = (x, y) => {
        return x >= 0 && x < 8 && y >= 0 && y < 8;
    }
  
    const queue = [[start, [start]]];
    const visited = new Set();
    visited.add(start.toString());
  
    while (queue.length > 0) {
      const [current, path] = queue.shift();
      const [x, y] = current;
  
      if (x === end[0] && y === end[1]) {
        return path;
      }
  
      for (const [dx, dy] of moves) {
        const nextX = x + dx;
        const nextY = y + dy;
        const nextMove = [nextX, nextY];
  
        if (isValidMove(nextX, nextY) && !visited.has(nextMove.toString())) {
          visited.add(nextMove.toString());
          queue.push([nextMove, [...path, nextMove]]);
        }
      }
    }
    return null; // In case no path is found, though there should always be one.
  }