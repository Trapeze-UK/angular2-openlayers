import {Component} from '@angular/core';
import {style, Collection, Feature} from 'openlayers';

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

  zoneFill =  new style.Fill({color: 'rgba(0, 0, 0, 0.5)'});
  zoneStroke = new style.Stroke({color: '#ff000e', width: 2});

    zoneCreated(event) {
      console.log(event);
      alert(event);
    }

    increaseZoom() {
        this.zoom  = Math.min(this.zoom + 1, 18);
        console.log('zoom: ', this.zoom);
    }

    decreaseZoom() {
        this.zoom  = Math.max(this.zoom - 1, 1);
        console.log('zoom: ', this.zoom);
    }

    increaseOpacity() {
        this.opacity  = Math.min(this.opacity + 0.1, 1);
        console.log('opacity: ', this.opacity);
    }

    decreaseOpacity() {
        this.opacity  = Math.max(this.opacity - 0.1, 0);
        console.log('opacity: ', this.opacity);
    }
}
