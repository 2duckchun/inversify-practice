import { container } from "./inversify.config";
import { TYPES } from "./types";
import { Warrior } from "./interfaces";

const ninja = container.get<Warrior>(TYPES.Warrior)
const a = ninja.fight()
const b = ninja.sneak()

const knight = container.get<Warrior>(TYPES.Knight)
const c = knight.fight()
const d = knight.sneak()

console.log(a) // cut!
console.log(b) // hit!
console.log(c)
console.log(d)
console.log(ninja)
console.log(knight)