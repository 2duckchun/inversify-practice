"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_config_1 = require("./inversify.config");
const types_1 = require("./types");
const ninja = inversify_config_1.container.get(types_1.TYPES.Warrior);
const a = ninja.fight();
const b = ninja.sneak();
const knight = inversify_config_1.container.get(types_1.TYPES.Knight);
const c = knight.fight();
const d = knight.sneak();
console.log(a); // cut!
console.log(b); // hit!
console.log(c);
console.log(d);
console.log(ninja);
console.log(knight);
