/** InversifyJS needs to use the type as identifiers at runtime. We use symbols as identifiers but you can also use classes and or string literals.
 * 
 */

const TYPES = {
  Warrior: Symbol.for("Warrior"),
  Weapon: Symbol.for("Weapon"),
  ThrowableWeapon: Symbol.for("ThrowableWeapon"),
  Knight: Symbol.for("Knigh"),
  Hammer: Symbol.for("Hammer"),
  Spear: Symbol.for("Spear"),
}

export { TYPES }