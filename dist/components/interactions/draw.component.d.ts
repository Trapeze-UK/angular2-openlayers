/// <reference types="openlayers" />
import { OnDestroy, OnInit, EventEmitter } from '@angular/core';
import { interaction, geom, Collection, Feature, source, EventsConditionType, style, DrawGeometryFunctionType, StyleFunction } from 'openlayers';
import { MapComponent } from '../map.component';
export declare class DrawInteractionComponent implements OnInit, OnDestroy {
    private map;
    instance: interaction.Draw;
    clickTolerance: number;
    features: Collection<Feature>;
    source: source.Vector;
    snapTolerance: number;
    type: geom.GeometryType;
    maxPoints: number;
    finishCondition: EventsConditionType;
    style: style.Style | style.Style[] | StyleFunction;
    geometryFunction: DrawGeometryFunctionType;
    geometryName: string;
    condition: EventsConditionType;
    freehand: boolean;
    freehandCondition: EventsConditionType;
    wrapX: boolean;
    drawend: EventEmitter<interaction.Draw.Event>;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
