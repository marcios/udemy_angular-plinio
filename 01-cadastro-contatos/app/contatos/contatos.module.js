"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
const contatos_lista_component_1 = require("./contatos-lista.component");
let ContatosModule = class ContatosModule {
};
ContatosModule = __decorate([
    core_1.NgModule({
        declarations: [
            contatos_lista_component_1.ContatosListaComponent
        ],
        exports: [
            contatos_lista_component_1.ContatosListaComponent
        ]
    })
], ContatosModule);
exports.ContatosModule = ContatosModule;
//# sourceMappingURL=contatos.module.js.map