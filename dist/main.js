/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
class Node {
  constructor(coords) {
    this.coords = coords;
    this.x = coords[0];
    this.y = coords[1];
    this.distance = 0;
    this.previous = null;
  }
}

class Moves {
  constructor() {
    this.visited = [];
    this.queue = [];
  }

  knightMoves(start, end, queue = [new Node(start)]) {
    // End coordinates not found
    if (queue.length === 0) {
      return;
    }

    const currentNode = queue.shift();
    this.visited.push([currentNode.x, currentNode.y]);
    currentNode.distance += 1;

    // Base case: start equals end. Return final node.
    if (currentNode.x === end.x && currentNode.y === end.y) {
      return currentNode;
    }

    // Get coordinates of all possible next [+/- 2, +/- 1] moves
    const potentialMoves = this.makePotentialMoves(currentNode.x, currentNode.y);

    potentialMoves.forEach((coordinates) => {
      // Check if x/y coordinates are within range and haven't been visited
      if (
        coordinates[0] >= 0 &&
        coordinates[0] <= 7 &&
        coordinates[1] >= 0 &&
        coordinates[1] <= 7 &&
        !this.visited.includes(coordinates)
      ) {
        // Add coordinates to queue
        this.queue.push(coordinates);
      }
    });

    // recursive call
    this.knightMoves(start, end, this.queue);
  }

  makePotentialMoves(x, y) {
    const a = [x + 2, y + 1];
    const b = [x + 2, y - 1];
    const c = [x - 2, y + 1];
    const d = [x - 2, y - 1];
    const e = [x + 1, y + 2];
    const f = [x + 1, y - 2];
    const g = [x - 1, y + 2];
    const h = [x - 1, y - 2];
    return [a, b, c, d, e, f, g, h];
  }

  levelOrderRec(queue = [this.queue]) {
    if (queue.length === 0) {
      return;
    }

    const currentNode = queue.shift();
    callback(currentNode);

    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }

    this.levelOrderRec(queue);
  }

  levelOrder(callback) {
    if (!callback) {
      throw new Error('No callback argument provided');
    }

    let queue = [this.root];

    while (queue.length > 0) {
      const currentNode = queue.shift();
      callback(currentNode);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
  }
}

const moves = new Moves();
moves.knightMoves([1, 1], [3, 3]);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQyIsInNvdXJjZXMiOlsid2VicGFjazovL2pzLXdlYnBhY2stZXNsaW50LXByZXR0aWVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pzLXdlYnBhY2stZXNsaW50LXByZXR0aWVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vanMtd2VicGFjay1lc2xpbnQtcHJldHRpZXIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNsYXNzIE5vZGUge1xuICBjb25zdHJ1Y3Rvcihjb29yZHMpIHtcbiAgICB0aGlzLmNvb3JkcyA9IGNvb3JkcztcbiAgICB0aGlzLnggPSBjb29yZHNbMF07XG4gICAgdGhpcy55ID0gY29vcmRzWzFdO1xuICAgIHRoaXMuZGlzdGFuY2UgPSAwO1xuICAgIHRoaXMucHJldmlvdXMgPSBudWxsO1xuICB9XG59XG5cbmNsYXNzIE1vdmVzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy52aXNpdGVkID0gW107XG4gICAgdGhpcy5xdWV1ZSA9IFtdO1xuICB9XG5cbiAga25pZ2h0TW92ZXMoc3RhcnQsIGVuZCwgcXVldWUgPSBbbmV3IE5vZGUoc3RhcnQpXSkge1xuICAgIC8vIEVuZCBjb29yZGluYXRlcyBub3QgZm91bmRcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY3VycmVudE5vZGUgPSBxdWV1ZS5zaGlmdCgpO1xuICAgIHRoaXMudmlzaXRlZC5wdXNoKFtjdXJyZW50Tm9kZS54LCBjdXJyZW50Tm9kZS55XSk7XG4gICAgY3VycmVudE5vZGUuZGlzdGFuY2UgKz0gMTtcblxuICAgIC8vIEJhc2UgY2FzZTogc3RhcnQgZXF1YWxzIGVuZC4gUmV0dXJuIGZpbmFsIG5vZGUuXG4gICAgaWYgKGN1cnJlbnROb2RlLnggPT09IGVuZC54ICYmIGN1cnJlbnROb2RlLnkgPT09IGVuZC55KSB7XG4gICAgICByZXR1cm4gY3VycmVudE5vZGU7XG4gICAgfVxuXG4gICAgLy8gR2V0IGNvb3JkaW5hdGVzIG9mIGFsbCBwb3NzaWJsZSBuZXh0IFsrLy0gMiwgKy8tIDFdIG1vdmVzXG4gICAgY29uc3QgcG90ZW50aWFsTW92ZXMgPSB0aGlzLm1ha2VQb3RlbnRpYWxNb3ZlcyhjdXJyZW50Tm9kZS54LCBjdXJyZW50Tm9kZS55KTtcblxuICAgIHBvdGVudGlhbE1vdmVzLmZvckVhY2goKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgICAvLyBDaGVjayBpZiB4L3kgY29vcmRpbmF0ZXMgYXJlIHdpdGhpbiByYW5nZSBhbmQgaGF2ZW4ndCBiZWVuIHZpc2l0ZWRcbiAgICAgIGlmIChcbiAgICAgICAgY29vcmRpbmF0ZXNbMF0gPj0gMCAmJlxuICAgICAgICBjb29yZGluYXRlc1swXSA8PSA3ICYmXG4gICAgICAgIGNvb3JkaW5hdGVzWzFdID49IDAgJiZcbiAgICAgICAgY29vcmRpbmF0ZXNbMV0gPD0gNyAmJlxuICAgICAgICAhdGhpcy52aXNpdGVkLmluY2x1ZGVzKGNvb3JkaW5hdGVzKVxuICAgICAgKSB7XG4gICAgICAgIC8vIEFkZCBjb29yZGluYXRlcyB0byBxdWV1ZVxuICAgICAgICB0aGlzLnF1ZXVlLnB1c2goY29vcmRpbmF0ZXMpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gcmVjdXJzaXZlIGNhbGxcbiAgICB0aGlzLmtuaWdodE1vdmVzKHN0YXJ0LCBlbmQsIHRoaXMucXVldWUpO1xuICB9XG5cbiAgbWFrZVBvdGVudGlhbE1vdmVzKHgsIHkpIHtcbiAgICBjb25zdCBhID0gW3ggKyAyLCB5ICsgMV07XG4gICAgY29uc3QgYiA9IFt4ICsgMiwgeSAtIDFdO1xuICAgIGNvbnN0IGMgPSBbeCAtIDIsIHkgKyAxXTtcbiAgICBjb25zdCBkID0gW3ggLSAyLCB5IC0gMV07XG4gICAgY29uc3QgZSA9IFt4ICsgMSwgeSArIDJdO1xuICAgIGNvbnN0IGYgPSBbeCArIDEsIHkgLSAyXTtcbiAgICBjb25zdCBnID0gW3ggLSAxLCB5ICsgMl07XG4gICAgY29uc3QgaCA9IFt4IC0gMSwgeSAtIDJdO1xuICAgIHJldHVybiBbYSwgYiwgYywgZCwgZSwgZiwgZywgaF07XG4gIH1cblxuICBsZXZlbE9yZGVyUmVjKHF1ZXVlID0gW3RoaXMucXVldWVdKSB7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGN1cnJlbnROb2RlID0gcXVldWUuc2hpZnQoKTtcbiAgICBjYWxsYmFjayhjdXJyZW50Tm9kZSk7XG5cbiAgICBpZiAoY3VycmVudE5vZGUubGVmdCkge1xuICAgICAgcXVldWUucHVzaChjdXJyZW50Tm9kZS5sZWZ0KTtcbiAgICB9XG4gICAgaWYgKGN1cnJlbnROb2RlLnJpZ2h0KSB7XG4gICAgICBxdWV1ZS5wdXNoKGN1cnJlbnROb2RlLnJpZ2h0KTtcbiAgICB9XG5cbiAgICB0aGlzLmxldmVsT3JkZXJSZWMocXVldWUpO1xuICB9XG5cbiAgbGV2ZWxPcmRlcihjYWxsYmFjaykge1xuICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm8gY2FsbGJhY2sgYXJndW1lbnQgcHJvdmlkZWQnKTtcbiAgICB9XG5cbiAgICBsZXQgcXVldWUgPSBbdGhpcy5yb290XTtcblxuICAgIHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBjdXJyZW50Tm9kZSA9IHF1ZXVlLnNoaWZ0KCk7XG4gICAgICBjYWxsYmFjayhjdXJyZW50Tm9kZSk7XG4gICAgICBpZiAoY3VycmVudE5vZGUubGVmdCkge1xuICAgICAgICBxdWV1ZS5wdXNoKGN1cnJlbnROb2RlLmxlZnQpO1xuICAgICAgfVxuICAgICAgaWYgKGN1cnJlbnROb2RlLnJpZ2h0KSB7XG4gICAgICAgIHF1ZXVlLnB1c2goY3VycmVudE5vZGUucmlnaHQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBtb3ZlcyA9IG5ldyBNb3ZlcygpO1xubW92ZXMua25pZ2h0TW92ZXMoWzEsIDFdLCBbMywgM10pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==