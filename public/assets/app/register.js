"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var Register = (function () {
    function Register(userService) {
        this.userService = userService;
        this.user = { name: "", password: "" };
    }
    Register.prototype.onRegisterClicked = function () {
        this.userService.register(this.user).subscribe(function (x) { return console.log(x); }, function (err) { return console.log(err); });
    };
    Register = __decorate([
        core_1.Component({
            selector: 'register',
            template: "\nRegister Page\n<br>\n\n<input [(ngModel)]=\"user.name\" placeholder=\"name\">\n<br>\n<input [(ngModel)]=\"user.password\" placeholder=\"password\" type=\"password\">\n<br>\n<button (click)=\"onRegisterClicked()\">Register</button>\n\n"
        })
    ], Register);
    return Register;
}());
exports.Register = Register;
//# sourceMappingURL=register.js.map