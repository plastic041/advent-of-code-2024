import { readInput } from "../utils.ts";

function solve() {
  const [mod] = Deno.args;
  const input = readInput(import.meta.dirname!, mod);
}

solve();
