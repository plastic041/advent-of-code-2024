import { readInput } from "../utils.ts";

function transpose<T>(matrix: T[][]) {
  return matrix[0].map((_, i) => matrix.map((row) => row[i]));
}

function solve() {
  const [mod] = Deno.args;
  const input = readInput(import.meta.dirname!, mod);

  const lines = input.split("\n").map((line) => line.split("   ").map(Number));
  const sorted = transpose(lines);

  const countMap: Map<number, number> = new Map();
  for (const num of sorted[1]) {
    const get = countMap.get(num);
    if (get === undefined) {
      countMap.set(num, 1);
    } else {
      countMap.set(num, get + 1);
    }
  }

  let sum = 0;
  for (const num of sorted[0]) {
    const get = countMap.get(num);
    sum += get ? get * num : 0;
  }
  console.log(sum);
}

solve();
