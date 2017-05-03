import {Component, OnDestroy, OnInit, Input, AfterViewInit} from '@angular/core';
import { interaction, Collection, Feature, EventsConditionType, StyleFunction, style } from 'openlayers';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-interaction-modify',
  template: ''
})
export class ModifyInteractionComponent implements OnInit, AfterViewInit, OnDestroy {
  instance: interaction.Modify;

  @Input() type: string;
  @Input() condition: EventsConditionType | undefined;
  @Input() deleteCondition: EventsConditionType | undefined;
  @Input() pixelTolerance: number | undefined;
  @Input() style: style.Style | style.Style[] | StyleFunction | undefined;
  @Input() features: Collection<Feature>;
  @Input() wrapX: boolean | undefined;

  constructor(private map: MapComponent) {
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.instance = new interaction.Modify(this);
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
}
