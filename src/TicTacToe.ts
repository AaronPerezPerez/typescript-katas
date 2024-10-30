export class TicTacToe {
  private board = "1|2|3\n-----\n4|5|6\n-----\n7|8|9"

  private isPlayer1Turn = true

  getBoard() {
    return this.board
  }

  getStatus() {
    return "playing"
  }

  playIn(position: number) {
    if (this.isPlayer1Turn) this.board = this.board.replace(position.toString(), "X")
    if (!this.isPlayer1Turn) this.board = this.board.replace(position.toString(), "O")
    this.isPlayer1Turn = !this.isPlayer1Turn
  }
}
