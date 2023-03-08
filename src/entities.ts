import { injectable, inject } from "inversify";
import "reflect-metadata";
import { Weapon, ThrowableWeapon, Warrior } from "./interfaces";
import { TYPES } from "./types";

@injectable()
class Katana implements Weapon {
  public hit() {
    return "cut!"
  }
}

@injectable()
class Hammer implements Weapon {
  public hit() {
    return "BOOM!"
  }
}

@injectable()
class Shuriken implements ThrowableWeapon {
  public throw() {
    return "hit!"
  }
}

@injectable()
class Spear implements ThrowableWeapon {
  public throw() {
    return "BBAK!"
  }
}

@injectable()
class Knigh implements Warrior {
  private _Hammer: Weapon;
  private _spear: ThrowableWeapon;

  public constructor(
    @inject(TYPES.Hammer) hammer: Weapon,
    @inject(TYPES.Spear) spear: ThrowableWeapon
  ) {
    this._Hammer = hammer
    this._spear = spear
  }

  public fight(): string {
    return this._Hammer.hit()
  }

  public sneak(): string {
    return this._spear.throw()
  }
}

// Constructor Injection
@injectable()
class Ninja implements Warrior {
  private _katana: Weapon;
  private _shuriken: ThrowableWeapon;

  public constructor(
    @inject(TYPES.Weapon) katana: Weapon,
    @inject(TYPES.ThrowableWeapon) shuriken: ThrowableWeapon
  ) {
    this._katana = katana
    this._shuriken = shuriken
  }

  public fight(): string {
    return this._katana.hit()
  }

  public sneak(): string {
    return this._shuriken.throw()
  }
}

export { Ninja, Katana, Shuriken, Hammer, Spear, Knigh }