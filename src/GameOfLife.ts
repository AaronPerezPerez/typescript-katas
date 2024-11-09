export class GameOfLife {
  constructor(private initialGrid: boolean[][]) {}

  nextGeneration() {
    this.initialGrid = this.initialGrid.map((row) => {
      return row.map((cell) => {
        return false
      })
    })
  }

  getGrid() {
    return this.initialGrid
  }
}
