/* eslint-disable max-len */
/* eslint-disable quote-props */
import mapboxgl from 'mapbox-gl';
import Control from '../utils/control';
import Legend from './legend';

export default class MapWraper extends Control {
  constructor(parentNode, data) {
    super(parentNode, 'div', 'map-wrapper');
    this.node.id = 'map';
    this.data = data;
    this.tab = 'globalCases';

    const countArr = this.data.map((el) => el.count);
    const tabValue25 = Math.max.apply(null, countArr) * 0.25;
    const tabValue50 = Math.max.apply(null, countArr) * 0.50;
    const tabValue75 = Math.max.apply(null, countArr) * 0.75;
    this.legend = new Legend(this.node, Math.max.apply(null, countArr), this.tab);

    this.geoJS = {
      'type': 'FeatureCollection',
      'features': [{
          'type': 'Feature',
          'properties': {
            'ADMIN': 'Australia',
            'ISO_A3': 'AUS',
            'globalCases': 1982090,
            'deaths': 17610,
          },
          'geometry': {
            'type': 'Point',
            'coordinates': [133, -27],
          },
        },
        {
          'type': 'Feature',
          'properties': {
            'ADMIN': 'Austria',
            'ISO_A3': 'AUT',
            'globalCases': 12090,
            'deaths': 17610,
          },
          'geometry': {
            'type': 'Point',
            'coordinates': [13.3333, 47.3333],
          },
        },
        {
          'type': 'Feature',
          'properties': {
            'ADMIN': 'Belarus',
            'ISO_A3': 'BLR',
            'globalCases': 1454000,
            'deaths': 17610,
          },
          'geometry': {
            'type': 'Point',
            'coordinates': [28, 53],
          },
        },
        {
          'type': 'Feature',
          'properties': {
            'ADMIN': 'Brazil',
            'ISO_A3': 'BRA',
            'globalCases': 204590,
            'deaths': 17610,
          },
          'geometry': {
            'type': 'Point',
            'coordinates': [-55, -10],
          },
        },
        {
          'type': 'Feature',
          'properties': {
            'ADMIN': 'Canada',
            'ISO_A3': 'CAN',
            'globalCases': 50501090,
            'deaths': 17610,
          },
          'geometry': {
            'type': 'Point',
            'coordinates': [-95, 60],
          },
        },
        {
          'type': 'Feature',
          'properties': {
            'ADMIN': 'Germany',
            'ISO_A3': 'DEU',
            'globalCases': 2945090,
            'deaths': 17610,
          },
          'geometry': {
            'type': 'Point',
            'coordinates': [9, 51],
          },
        },
        {
          'type': 'Feature',
          'properties': {
            'ADMIN': 'Turkey',
            'ISO_A3': 'TUR',
            'globalCases': 190000940,
            'deaths': 17610,
          },
          'geometry': {
            'type': 'Point',
            'coordinates': [35, 39],
          },
        },
      ],
    };

    mapboxgl.accessToken = 'pk.eyJ1IjoibWF1dGEiLCJhIjoiY2tpbjM4dHIyMDU3MDJ6bWx1YnhoNXYxNSJ9.kq3HP8TVE6Sc8u1-HU2QFg';
    this.map = new mapboxgl.Map({
      container: 'map',
      center: [-74.5, 40],
      zoom: 2,
      style: 'mapbox://styles/mauta/ckin44yuk3h3d18l3t77d0mn2',
      hash: true,
      transformRequest: (url, resourceType) => {
        if (resourceType === 'Source' && url.startsWith('http://myHost')) {
          return {
            url: url.replace('http', 'https'),
            headers: {
              'my-custom-header': true,
            },
            credentials: 'include', // Include cookies for cross-origin requests
          };
        }
      },
    }).addControl(new mapboxgl.AttributionControl({
      compact: true,
    }));

    this.map.on('load', () => {
      const popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false,
      });

      this.map.on('mousemove', (e) => {
        const countries = this.map.queryRenderedFeatures(e.point, {
          layers: ['countries-cnvat2'],
        });

        if (countries.length > 0) {
          const countryHovered = this.data.filter((el) => el.countryInfo === countries[0].properties.ISO_A3)[0];

          //           const countryHovered = this.data.filter((el) => el.country === countries[0].properties.ADMIN)[0];

          popup.setLngLat(e.lngLat).setHTML(`<div>${countryHovered.country}</div><div>${countryHovered.count.toLocaleString('ru-RU')}</div>`).addTo(this.map);
        } else {
          popup.remove();
        }
      });

      this.map.on('click', (e) => {
        const countries = this.map.queryRenderedFeatures(e.point, {
          layers: ['countries-cnvat2'],
        });
        if (countries.length > 0) {
          const countryClicked = this.data.filter((el) => el.countryInfo === countries[0].properties.ISO_A3)[0];

          //           const countryClicked = this.data.filter((el) => el.country === countries[0].properties.ADMIN)[0];

          this.dispath('onMapCountrySelect', countryClicked.country);
        }
      });

      this.map.getCanvas().style.cursor = 'default';
      this.map.addSource('dataCircle', {
        type: 'geojson',
        data: this.geoJS,
      });



      this.map.addLayer({
        id: 'circle-point',
        type: 'circle',
        source: 'dataCircle',
        paint: {
          'circle-color': '#008000',
          'circle-radius': [
            'step',
            ['get', this.tab],
            5,
            tabValue25,
            10,
            tabValue50,
            15,
            tabValue75,
            20,
          ],
          'circle-stroke-width': 1,
          'circle-stroke-color': '#000',
        },
      });
    });
  }

  update(data, tab) {
    this.data = data;
    this.tab = tab;
  }
}
