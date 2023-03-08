"use strict";
/** InversifyJS needs to use the type as identifiers at runtime. We use symbols as identifiers but you can also use classes and or string literals.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TYPES = void 0;
const TYPES = {
    Warrior: Symbol.for("Warrior"),
    Weapon: Symbol.for("Weapon"),
    ThrowableWeapon: Symbol.for("ThrowableWeapon"),
    Knight: Symbol.for("Knigh"),
    Hammer: Symbol.for("Hammer"),
    Spear: Symbol.for("Spear"),
};
exports.TYPES = TYPES;
