import { readInput } from "../utils.ts";

function transpose<T>(matrix: T[][]) {
  return matrix[0].map((_col, i) => matrix.map((row) => row[i]));
}

function solve() {
  const [mod] = Deno.args;
  const input = readInput(import.meta.dirname!, mod);

  const lines = input.split("\n").map((line) => line.split("   ").map(Number));
  const sorted = transpose(
    transpose(lines).map((nums) => nums.toSorted((a, b) => a - b))
  );
  const diffSum = sorted.reduce((acc, curr) => {
    const diff = Math.abs(curr[0] - curr[1]);
    return acc + diff;
  }, 0);

  console.log(diffSum);
}

solve();
