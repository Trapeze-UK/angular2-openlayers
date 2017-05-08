import {Component} from '@angular/core';
import {style, Collection, Feature, geom} from 'openlayers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public zoom = 15;
  public opacity = 1.0;
  public width = 5;
  public features = new Collection<Feature>();

  enableModification = false;

  zoneFill = new style.Fill({color: 'rgba(0, 0, 0, 0.5)'});
  zoneStroke = new style.Stroke({color: '#ff000e', width: 2});

  zoneCreated(event) {
    console.log(event);
    alert(event);
  }

  increaseZoom() {
    this.zoom = Math.min(this.zoom + 1, 18);
    console.log('zoom: ', this.zoom);
  }

  decreaseZoom() {
    this.zoom = Math.max(this.zoom - 1, 1);
    console.log('zoom: ', this.zoom);
  }

  increaseOpacity() {
    this.opacity = Math.min(this.opacity + 0.1, 1);
    console.log('opacity: ', this.opacity);
  }

  decreaseOpacity() {
    this.opacity = Math.max(this.opacity - 0.1, 0);
    console.log('opacity: ', this.opacity);
  }

  zoneModifyStart(event) {
    console.log('Point being edited:' + event.mapBrowserEvent.coordinate);
  }

  zoneModifyEnd(event) {

    console.log(event);
    // TODO Check whether we have any overlapping polygons
    console.log('Need to see if this co-ordinate now overlaps any features:');
    const modifiedCoord = event.mapBrowserEvent.coordinate;
    console.log(modifiedCoord);

    console.log(this.features.getArray().length + ' features to check');
    let featureIndex = 0;
    this.features.forEach((feature) => {

      const defaultStyle = new style.Style({
        fill: this.zoneFill,
        stroke: this.zoneStroke
      });

      feature.setStyle(defaultStyle);

      const intersects = feature.getGeometry().intersectsCoordinate(modifiedCoord);

      if (intersects) {

        // Check that its not the actual co-ordinate i.e. inside not on the edge
        let matchingCoord = false;
        (<geom.Polygon>feature.getGeometry()).getCoordinates()[0].forEach((coord) => {
          if (coord[0] === modifiedCoord[0] && coord[1] === modifiedCoord[1]) {
            matchingCoord = true;
          }
        });

        if (!matchingCoord) {
          console.log('Feature ' + featureIndex + ' intersects with coordinate ' + modifiedCoord);
          console.log('Feature co-ords:');
          console.log((<geom.Polygon>feature.getGeometry()).getCoordinates());
          const highlightStyle = new style.Style({
            fill: new style.Fill({
              color: 'red'
            })
          });
          feature.setStyle(highlightStyle);
        }
      }
      ++featureIndex;
    });
  }
}
