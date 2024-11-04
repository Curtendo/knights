class Node {
  constructor(coords, previous) {
    this.coords = coords;
    this.x = coords[0];
    this.y = coords[1];
    this.previous = previous || [];
  }
}

class Moves {
  constructor() {
    this.visited = new Set();
  }

  knightMoves(start, end) {
    let queue = [new Node(start)];
    this.visited.add(`${start[0]},${start[1]}`);

    while (queue.length > 0) {
      let currentNode = queue.shift();
      currentNode.previous = [...currentNode.previous, currentNode.coords];

      if (currentNode.x === end[0] && currentNode.y === end[1]) {
        return currentNode.previous;
      }

      const potentialMoves = this.makePotentialMoves(currentNode.x, currentNode.y);

      potentialMoves.forEach((coordinates) => {
        if (!this.visited.has(`${coordinates[0]},${coordinates[1]}`)) {
          this.visited.add(`${coordinates[0]},${coordinates[1]}`);
          queue.push(new Node(coordinates, currentNode.previous));
        }
      });
    }

    return null;
  }

  makePotentialMoves(x, y) {
    let array = [];
    array.push([x + 2, y + 1]);
    array.push([x + 2, y - 1]);
    array.push([x - 2, y + 1]);
    array.push([x - 2, y - 1]);
    array.push([x + 1, y + 2]);
    array.push([x + 1, y - 2]);
    array.push([x - 1, y + 2]);
    array.push([x - 1, y - 2]);

    // Check if x/y coordinates are within range
    let validArray = array.filter((coordinates) => {
      return (
        coordinates[0] >= 0 && coordinates[0] <= 7 && coordinates[1] >= 0 && coordinates[1] <= 7
      );
    });

    return validArray;
  }
}

const moves = new Moves();
console.log(moves.knightMoves([0, 0], [4, 4]));
