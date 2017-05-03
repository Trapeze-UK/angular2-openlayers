/// <reference types="openlayers" />
import { EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { interaction, Feature, Collection, style, source, EventsConditionType, StyleFunction, DrawGeometryFunctionType, geom } from 'openlayers';
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
