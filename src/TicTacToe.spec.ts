import { describe, it, expect } from "vitest"
import { TicTacToe } from "./TicTacToe.js"

describe(TicTacToe, () => {
  it("can print an empty board", () => {
    const ticTacToe = new TicTacToe()

    expect(ticTacToe.getBoard()).toEqual("1|2|3\n-----\n4|5|6\n-----\n7|8|9")
  })

  it("has a playing status", () => {
    const ticTacToe = new TicTacToe()

    expect(ticTacToe.getStatus()).toEqual("playing")
  })

  it("has a playing status", () => {
    const ticTacToe = new TicTacToe()

    expect(ticTacToe.getStatus()).toEqual("playing")
  })

  it("can record that the position 1 is marked by player 1", () => {
    const ticTacToe = new TicTacToe()

    ticTacToe.playIn(1)

    expect(ticTacToe.getBoard()).toEqual("X|2|3\n-----\n4|5|6\n-----\n7|8|9")
  })

  it("can record that the position 2 is marked by player 1", () => {
    const ticTacToe = new TicTacToe()

    ticTacToe.playIn(2)

    expect(ticTacToe.getBoard()).toEqual("1|X|3\n-----\n4|5|6\n-----\n7|8|9")
  })

  it("can record that the position 1 is marked by player 1 and position 2 by player 2", () => {
    const ticTacToe = new TicTacToe()

    ticTacToe.playIn(1)
    ticTacToe.playIn(2)

    expect(ticTacToe.getBoard()).toEqual("X|O|3\n-----\n4|5|6\n-----\n7|8|9")
  })

  it("skips the play when a already marked position is attempted to be marked again", () => {
    const ticTacToe = new TicTacToe()

    ticTacToe.playIn(1)
    ticTacToe.playIn(1)
    ticTacToe.playIn(2)

    expect(ticTacToe.getBoard()).toEqual("X|O|3\n-----\n4|5|6\n-----\n7|8|9")
  })
})
