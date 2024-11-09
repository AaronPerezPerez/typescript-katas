import { describe, expect, it } from "vitest"
import { GameOfLife } from "./GameOfLife.js"

/*
1. A live cell dies if it has fewer than two live neighbors.
2. A live cell with two or three live neighbors lives on to the next
generation.
3. A live cell with more than three live neighbors dies.
4. A dead cell will be brought back to live if it has exactly three live
neighbors.
* **/
describe("Game of life", () => {
  it("should kill a cell that has no neighbours", () => {
    const initialGrid = [
      [false, false, false],
      [false, true, false],
      [false, false, false],
    ]
    const expectedGrid = [
      [false, false, false],
      [false, false, false],
      [false, false, false],
    ]
    const gameOfLife = new GameOfLife(initialGrid)

    gameOfLife.nextGeneration()
    const result = gameOfLife.getGrid()

    expect(result).toEqual(expectedGrid)
  })
})