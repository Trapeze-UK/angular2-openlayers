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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var openlayers_1 = require("openlayers");
var map_component_1 = require("../map.component");
var ModifyInteractionComponent = (function () {
    function ModifyInteractionComponent(map) {
        this.map = map;
        this.modifystart = new core_1.EventEmitter();
        this.modifyend = new core_1.EventEmitter();
    }
    ModifyInteractionComponent.prototype.ngOnInit = function () {
    };
    ModifyInteractionComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.instance = new openlayers_1.interaction.Modify(this);
        this.map.instance.addInteraction(this.instance);
        this.instance.on('modifystart', function (event) { return _this.modifystart.emit(event); });
        this.instance.on('modifyend', function (event) { return _this.modifyend.emit(event); });
    };
    ModifyInteractionComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeInteraction(this.instance);
    };
    return ModifyInteractionComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ModifyInteractionComponent.prototype, "type", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Function)
], ModifyInteractionComponent.prototype, "condition", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Function)
], ModifyInteractionComponent.prototype, "deleteCondition", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ModifyInteractionComponent.prototype, "pixelTolerance", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ModifyInteractionComponent.prototype, "style", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", openlayers_1.Collection)
], ModifyInteractionComponent.prototype, "features", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ModifyInteractionComponent.prototype, "wrapX", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ModifyInteractionComponent.prototype, "modifystart", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ModifyInteractionComponent.prototype, "modifyend", void 0);
ModifyInteractionComponent = __decorate([
    core_1.Component({
        selector: 'aol-interaction-modify',
        template: ''
    }),
    __metadata("design:paramtypes", [map_component_1.MapComponent])
], ModifyInteractionComponent);
exports.ModifyInteractionComponent = ModifyInteractionComponent;
//# sourceMappingURL=modify.component.js.map