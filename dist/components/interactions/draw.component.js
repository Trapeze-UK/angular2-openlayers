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
var DrawInteractionComponent = (function () {
    function DrawInteractionComponent(map) {
        this.map = map;
        this.drawend = new core_1.EventEmitter();
    }
    DrawInteractionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.instance = new openlayers_1.interaction.Draw(this);
        this.map.instance.addInteraction(this.instance);
        this.instance.on('drawend', function (event) { return _this.drawend.emit(event); });
    };
    DrawInteractionComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeInteraction(this.instance);
    };
    return DrawInteractionComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], DrawInteractionComponent.prototype, "clickTolerance", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", openlayers_1.Collection)
], DrawInteractionComponent.prototype, "features", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", openlayers_1.source.Vector)
], DrawInteractionComponent.prototype, "source", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], DrawInteractionComponent.prototype, "snapTolerance", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DrawInteractionComponent.prototype, "type", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], DrawInteractionComponent.prototype, "maxPoints", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Function)
], DrawInteractionComponent.prototype, "finishCondition", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DrawInteractionComponent.prototype, "style", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Function)
], DrawInteractionComponent.prototype, "geometryFunction", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DrawInteractionComponent.prototype, "geometryName", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Function)
], DrawInteractionComponent.prototype, "condition", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DrawInteractionComponent.prototype, "freehand", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Function)
], DrawInteractionComponent.prototype, "freehandCondition", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DrawInteractionComponent.prototype, "wrapX", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], DrawInteractionComponent.prototype, "drawend", void 0);
DrawInteractionComponent = __decorate([
    core_1.Component({
        selector: 'aol-interaction-draw',
        template: ''
    }),
    __metadata("design:paramtypes", [map_component_1.MapComponent])
], DrawInteractionComponent);
exports.DrawInteractionComponent = DrawInteractionComponent;
//# sourceMappingURL=draw.component.js.map