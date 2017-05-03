import {Component, OnDestroy, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {
  interaction, geom, Collection, Feature, source, EventsConditionType, style, DrawGeometryFunctionType,
  StyleFunction, events
} from 'openlayers';
import {MapComponent} from '../map.component';
import {SourceVectorComponent} from '../sources/vector.component';

@Component({
  selector: 'aol-interaction-draw',
  template: ''
})
export class DrawInteractionComponent implements OnInit, OnDestroy {
  instance: interaction.Draw;

  @Input() clickTolerance: number;
  @Input() features: Collection<Feature>;
  @Input() source: source.Vector;
  @Input() snapTolerance: number;
  @Input() type: geom.GeometryType;
  @Input() maxPoints: number;
  @Input() finishCondition: EventsConditionType;
  @Input() style: style.Style | style.Style[] | StyleFunction;
  @Input() geometryFunction: DrawGeometryFunctionType;
  @Input() geometryName: string;
  @Input() condition: EventsConditionType;
  @Input() freehand: boolean;
  @Input() freehandCondition: EventsConditionType;
  @Input() wrapX: boolean;

  @Output() drawend: EventEmitter<interaction.Draw.Event>;

  constructor(private map: MapComponent) {
    this.drawend = new EventEmitter<interaction.Draw.Event>();
  }

  ngOnInit() {
    this.instance = new interaction.Draw(this);

    // this.instance = new interaction.Draw(this);
    this.map.instance.addInteraction(this.instance);

    this.instance.on('drawend', (event: interaction.Draw.Event) => this.drawend.emit(event));
  }

  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
}
