/* eslint-disable max-len */
/* eslint-disable quote-props */
/*eslint class-methods-use-this: ["error", { "exceptMethods": ["geoJSON"]}] */

import mapboxgl from 'mapbox-gl';
import Control from '../utils/control';

export default class MapWraper extends Control {
  constructor(parentNode, data, json) {
    super(parentNode, 'div', 'map-wrapper');
    this.node.id = 'map';
    this.data = data;

    // переменная с большим json
    this.geoJS = {
      'type': 'FeatureCollection',
      'features': this.geoJSON(json)
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
    });
  }

  update(data) {
    this.data = data;
  }

  geoJSON(json) {
    const features = [];
    json.forEach((key) => {
      features.push({
        'type': 'Feature',
        'properties': {
          'ADMIN': key.country,
          'ISO_A3': key.countryInfo.iso3,
          'globalCases': key.cases,
          'globalDeaths': key.deaths,
          'globalRecovered': key.recovered,
          'lastCases': key.todayCases,
          'lastDeaths': key.todayDeaths,
          'lastRecovered': key.todayRecovered,
          'globalCases100': key.casesPerOneMillion / 10,
          'globalDeaths100': key.deathsPerOneMillion / 10,
          'globalRecovered100': key.recoveredPerOneMillion / 10,
          'lastCases100': (key.todayCases / key.population) * 100000,
          'lastDeaths100': (key.todayDeaths / key.population) * 100000,
          'lastRecovered100': (key.todayRecovered / key.population) * 100000
        },
        'geometry': {
          'type': 'Point',
          'coordinates': [key.countryInfo.long, key.countryInfo.lat],
        },
      });
    })
    return features;
  }
}
