// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-tourist',
//   imports: [],
//   templateUrl: './tourist.html',
//   styleUrl: './tourist.css'
// })
// export class Tourist {

// }

import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

interface Location {
  coords: [number, number]; // Exactly 2 numbers
  name: string;
  desc: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-tourist',
  standalone: true,
  templateUrl: './tourist.html',
  styleUrls: ['./tourist.css']
})
export class Tourist implements AfterViewInit {

  private map!: L.Map;
  private apiKey: string = 'cRSSNZzV16wjUghml2N4';

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [27.3389, 88.6065],
      zoom: 9
    });

    L.tileLayer(`https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=${this.apiKey}`, {
      attribution: '&copy; <a href="https://www.maptiler.com/">MapTiler</a> contributors'
    }).addTo(this.map);

    const locations: Location[] = [
      { coords: [27.3389, 88.6065], name: 'Gangtok', desc: 'Capital of Sikkim', icon: 'fa-city', color: 'blue' },
      { coords: [27.4900, 88.7400], name: 'Tsomgo Lake', desc: 'Glacial lake near Gangtok', icon: 'fa-water', color: 'teal' },
      { coords: [27.3364, 88.5690], name: 'Rumtek Monastery', desc: 'Largest monastery in Sikkim', icon: 'fa-place-of-worship', color: 'purple' },
      { coords: [27.3066, 88.2183], name: 'Pemayangtse Monastery', desc: 'Oldest monastery near Pelling', icon: 'fa-place-of-worship', color: 'purple' },
      { coords: [27.2870, 88.2640], name: 'Tashiding Monastery', desc: 'Sacred site in West Sikkim', icon: 'fa-place-of-worship', color: 'purple' },
      { coords: [27.4069, 88.9550], name: 'Nathula Pass', desc: 'Indo-China border pass', icon: 'fa-mountain', color: 'brown' },
      { coords: [27.3136, 88.2756], name: 'Pelling', desc: 'Hill town with Kanchenjunga views', icon: 'fa-mountain', color: 'green' },
      { coords: [27.3360, 88.6085], name: 'Enchey Monastery', desc: 'Buddhist monastery in Gangtok', icon: 'fa-place-of-worship', color: 'purple' },
      { coords: [27.3056, 88.3147], name: 'Yuksom & Dubdi Monastery', desc: 'Gateway to Kanchenjunga treks', icon: 'fa-place-of-worship', color: 'purple' },
      { coords: [27.6825, 88.6400], name: 'Lachung & Yumthang Valley', desc: 'Scenic valley with hot springs', icon: 'fa-tree', color: 'green' }
    ];

    locations.forEach(loc => {
      const customIcon = L.divIcon({
        html: `<i class="fa ${loc.icon}" style="color:${loc.color}; font-size:24px;"></i>`,
        className: '',
        iconSize: [24, 24],
        iconAnchor: [12, 24],
        popupAnchor: [0, -24]
      });

      L.marker(loc.coords, { icon: customIcon }).addTo(this.map)
        .bindPopup(`<b>${loc.name}</b><br>${loc.desc}`);
    });
  }
}
