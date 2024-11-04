export class TicTacToe {
  private board = "1|2|3\n-----\n4|5|6\n-----\n7|8|9"

  private isPlayer1Turn = true

  getBoard() {
    return this.board
  }

  getStatus() {
    if (this.doesPlayer1Win()) return "p1 wins"
    if (this.doesPlayer2Win()) return "p2 wins"
    if (this.doesTheGameIsDraw()) return "draw"

    return "playing"
  }

  private doesTheGameIsDraw() {
    return this.board.match(/[0-9]/) == null
  }

  private doesPlayer1Win() {
    const columnRegex =
      /^(X\|.\|.\n-----\nX\|.\|.\n-----\nX\|.\|.$)|(.\|X\|.\n-----\n.\|X\|.\n-----\n.\|X\|.$)|(.\|.\|X\n-----\n.\|.\|X\n-----\n.\|.\|X$)/
    const diagonalRegex = /^(X\|.\|.\n-----\n.\|X\|.\n-----\n.\|.\|X$)|(.\|.\|X\n-----\n.\|X\|.\n-----\nX\|.\|.$)/

    return this.board.includes("X|X|X") || this.board.match(columnRegex) || this.board.match(diagonalRegex)
  }

  private doesPlayer2Win() {
    const columnRegex =
      /^(O\|.\|.\n-----\nO\|.\|.\n-----\nO\|.\|.$)|(.\|O\|.\n-----\n.\|O\|.\n-----\n.\|O\|.$)|(.\|.\|O\n-----\n.\|.\|O\n-----\n.\|.\|O$)/
    return this.board.includes("O|O|O") || this.board.match(columnRegex)
  }

  playIn(position: number) {
    if (!this.board.includes(position.toString())) return

    if (this.isPlayer1Turn) this.board = this.board.replace(position.toString(), "X")
    if (!this.isPlayer1Turn) this.board = this.board.replace(position.toString(), "O")
    this.isPlayer1Turn = !this.isPlayer1Turn
  }
}
