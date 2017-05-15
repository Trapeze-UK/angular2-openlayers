/// <reference types="openlayers" />
import { OnDestroy, OnInit, AfterViewInit, EventEmitter } from '@angular/core';
import { interaction, Collection, Feature, EventsConditionType, StyleFunction, style } from 'openlayers';
import { MapComponent } from '../map.component';
export declare class ModifyInteractionComponent implements OnInit, AfterViewInit, OnDestroy {
    private map;
    instance: interaction.Modify;
    type: string;
    condition: EventsConditionType | undefined;
    deleteCondition: EventsConditionType | undefined;
    pixelTolerance: number | undefined;
    style: style.Style | style.Style[] | StyleFunction | undefined;
    features: Collection<Feature>;
    wrapX: boolean | undefined;
    modifystart: EventEmitter<interaction.Modify.Event>;
    modifyend: EventEmitter<interaction.Modify.Event>;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
