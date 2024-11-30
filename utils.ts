import { join } from "jsr:@std/path/join";

export function readInput(dirname: string, mod: string) {
  return Deno.readTextFileSync(
    join(dirname, mod === "-e" ? "./example.txt" : "./input.txt")
  );
}
