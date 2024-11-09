export class GameOfLife {
  constructor(private initialGrid: boolean[][]) {}

  nextGeneration() {
    this.initialGrid = this.initialGrid.map((row, x) =>
      row.map((cell, y) => {
        const topCell = this.getCellValueAt(x, y - 1)
        const bottomCell = this.getCellValueAt(x, y + 1)
        const leftCell = this.getCellValueAt(x - 1, y)
        const rightCell = this.getCellValueAt(x + 1, y)
        const topRightCell = this.getCellValueAt(x + 1, y - 1)
        const bottomRightCell = this.getCellValueAt(x + 1, y + 1)
        const topLeftCell = this.getCellValueAt(x - 1, y - 1)
        const bottomLeftCell = this.getCellValueAt(x - 1, y + 1)
        const aliveNeighboursCount = [
          topCell,
          bottomCell,
          leftCell,
          rightCell,
          topRightCell,
          bottomRightCell,
          topLeftCell,
          bottomLeftCell,
        ].filter((cell) => cell).length

        const moreThanOneNeighbour = aliveNeighboursCount >= 2
        const lessThanFourNeighbours = aliveNeighboursCount < 4
        const cellIsAliveAndShouldKeepAlive = cell && moreThanOneNeighbour && lessThanFourNeighbours
        const cellIsDeadAndShouldRevive = !cell && aliveNeighboursCount == 3

        return cellIsAliveAndShouldKeepAlive || cellIsDeadAndShouldRevive
      }),
    )
  }

  getGrid() {
    return this.initialGrid
  }

  private getCellValueAt(x: number, y: number) {
    const row = this.initialGrid[x]
    if (!row) return false

    return this.initialGrid[x][y] ?? false
  }
}
