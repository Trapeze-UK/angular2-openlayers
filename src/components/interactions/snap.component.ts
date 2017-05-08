import {Component, OnDestroy, OnInit, Input, AfterViewInit} from '@angular/core';
import { interaction, Collection, Feature, source } from 'openlayers';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-interaction-snap',
  template: ''
})
export class SnapInteractionComponent implements OnInit, AfterViewInit, OnDestroy {
  instance: interaction.Snap;

  @Input() features: Collection<Feature>;
  @Input() edge: boolean;
  @Input() vertex: boolean;
  @Input() pixelTolerance: number;
  @Input() source: source.Vector;

  constructor(private map: MapComponent) {
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.instance = new interaction.Snap(this);
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
}
