import { describe, it, expect } from "vitest"
import { TicTacToe } from "./TicTacToe.js"

describe(TicTacToe, () => {
  it("can print an empty board", () => {
    const ticTacToe = new TicTacToe()

    expect(ticTacToe.getBoard()).toEqual("1|2|3\n-----\n4|5|6\n-----\n7|8|9")
  })
})
