type GameStatus = "p1 wins" | "p2 wins" | "draw" | "playing"

export class TicTacToe {
  private board = "1|2|3\n-----\n4|5|6\n-----\n7|8|9"
  private player1 = "X"
  private player2 = "O"
  private isPlayer1Turn = true

  playIn(position: number) {
    if (!this.positionIsAlreadyFilled(position)) return
    const playingPlayer = this.getCurrentPlayer()
    this.board = this.board.replace(position.toString(), playingPlayer)

    this.isPlayer1Turn = !this.isPlayer1Turn
  }

  getBoard() {
    return this.board
  }

  getStatus(): GameStatus {
    if (this.doesPlayerWin(this.player1)) return "p1 wins"
    if (this.doesPlayerWin(this.player2)) return "p2 wins"
    if (this.doesTheGameIsDraw()) return "draw"

    return "playing"
  }

  private positionIsAlreadyFilled(position: number) {
    return this.board.includes(position.toString())
  }

  private getCurrentPlayer() {
    return this.isPlayer1Turn ? this.player1 : this.player2
  }
  private doesTheGameIsDraw() {
    return this.board.match(/[0-9]/) == null
  }

  private doesPlayerWin(player: string) {
    const columnRegex = new RegExp(
      `^(${player}\\|.\\|.\\n-----\\n${player}\\|.\\|.\\n-----\\n${player}\\|.\\|.$)|(.\\|${player}\\|.\\n-----\\n.\\|${player}\\|.\\n-----\\n.\\|${player}\\|.$)|(.\\|.\\|${player}\\n-----\\n.\\|.\\|${player}\\n-----\\n.\\|.\\|${player}$)`,
    )
    const diagonalRegex = new RegExp(
      `^(${player}\\|.\\|.\\n-----\\n.\\|${player}\\|.\\n-----\\n.\\|.\\|${player}$)|(.\\|.\\|${player}\\n-----\\n.\\|${player}\\|.\\n-----\\n${player}\\|.\\|.$)`,
    )
    return (
      this.board.includes(`${player}|${player}|${player}`) ||
      this.board.match(columnRegex) ||
      this.board.match(diagonalRegex)
    )
  }
}
