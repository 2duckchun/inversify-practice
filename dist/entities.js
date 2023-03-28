"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Knight = exports.Spear = exports.Hammer = exports.Shuriken = exports.Katana = exports.Ninja = void 0;
const inversify_1 = require("inversify");
require("reflect-metadata");
const types_1 = require("./types");
let Katana = class Katana {
    hit() {
        return "cut!";
    }
};
Katana = __decorate([
    (0, inversify_1.injectable)()
], Katana);
exports.Katana = Katana;
let Hammer = class Hammer {
    hit() {
        return "BOOM!";
    }
};
Hammer = __decorate([
    (0, inversify_1.injectable)()
], Hammer);
exports.Hammer = Hammer;
let Shuriken = class Shuriken {
    throw() {
        return "hit!";
    }
};
Shuriken = __decorate([
    (0, inversify_1.injectable)()
], Shuriken);
exports.Shuriken = Shuriken;
let Spear = class Spear {
    throw() {
        return "BBAK!";
    }
};
Spear = __decorate([
    (0, inversify_1.injectable)()
], Spear);
exports.Spear = Spear;
let Knight = class Knight {
    constructor(hammer, spear) {
        this._Hammer = hammer;
        this._spear = spear;
    }
    fight() {
        return this._Hammer.hit();
    }
    sneak() {
        return this._spear.throw();
    }
};
Knight = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(types_1.TYPES.Hammer)),
    __param(1, (0, inversify_1.inject)(types_1.TYPES.Spear)),
    __metadata("design:paramtypes", [Object, Object])
], Knight);
exports.Knight = Knight;
// Constructor Injection
let Ninja = class Ninja {
    constructor(katana, shuriken) {
        this._katana = katana;
        this._shuriken = shuriken;
    }
    fight() {
        return this._katana.hit();
    }
    sneak() {
        return this._shuriken.throw();
    }
};
Ninja = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(types_1.TYPES.Weapon)),
    __param(1, (0, inversify_1.inject)(types_1.TYPES.ThrowableWeapon)),
    __metadata("design:paramtypes", [Object, Object])
], Ninja);
exports.Ninja = Ninja;
