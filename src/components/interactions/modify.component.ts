import {Component, OnDestroy, OnInit, Input, AfterViewInit, Output, EventEmitter} from '@angular/core';
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

  @Output() modifystart: EventEmitter<interaction.Modify.Event>;
  @Output() modifyend: EventEmitter<interaction.Modify.Event>;

  constructor(private map: MapComponent) {
    this.modifystart = new EventEmitter<interaction.Modify.Event>();
    this.modifyend = new EventEmitter<interaction.Modify.Event>();
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.instance = new interaction.Modify(this);
    this.map.instance.addInteraction(this.instance);

    this.instance.on('modifystart', (event: interaction.Modify.Event) => this.modifystart.emit(event));
    this.instance.on('modifyend', (event: interaction.Modify.Event) => this.modifyend.emit(event));
  }

  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
}
