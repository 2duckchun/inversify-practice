import { Container } from "inversify"
import { TYPES } from "./types"
import { Warrior, Weapon, ThrowableWeapon } from "./interfaces"
import { Ninja, Katana, Shuriken, Hammer, Knigh, Spear } from "./entities"

const container = new Container()
container.bind<Warrior>(TYPES.Warrior).to(Ninja)
container.bind<Weapon>(TYPES.Weapon).to(Katana)
container.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken)
container.bind<Warrior>(TYPES.Knight).to(Knigh)
container.bind<Weapon>(TYPES.Hammer).to(Hammer)
container.bind<ThrowableWeapon>(TYPES.Spear).to(Spear)
export { container }