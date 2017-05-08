/// <reference types="openlayers" />
import { OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { interaction, Collection, Feature, source } from 'openlayers';
import { MapComponent } from '../map.component';
export declare class SnapInteractionComponent implements OnInit, AfterViewInit, OnDestroy {
    private map;
    instance: interaction.Snap;
    features: Collection<Feature>;
    edge: boolean;
    vertex: boolean;
    pixelTolerance: number;
    source: source.Vector;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
