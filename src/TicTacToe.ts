export class TicTacToe {
  private board = "1|2|3\n-----\n4|5|6\n-----\n7|8|9"

  getBoard() {
    return this.board
  }

  getStatus() {
    return "playing"
  }

  playIn(position: number) {
    this.board = this.board.replace(position.toString(), "X")
  }
}
