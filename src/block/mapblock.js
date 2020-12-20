/* eslint-disable max-len */
/* eslint-disable quote-props */
/*eslint class-methods-use-this: ["error", { "exceptMethods": ["geoJSON"]}] */

import mapboxgl from 'mapbox-gl';
import Control from '../utils/control';
import Legend from './legend';
import CasesAPI from '../utils/cases_api';

export default class MapWraper extends Control {
  constructor(parentNode, data, json) {
    super(parentNode, 'div', 'map-wrapper');
    this.node.id = 'map';
    this.data = data;
    this.tab = 'globalCases';

    const countArr = this.data.map((el) => el.count);
    const tabValue25 = Math.max.apply(null, countArr) * 0.05;
    const tabValue50 = Math.max.apply(null, countArr) * 0.20;
    const tabValue75 = Math.max.apply(null, countArr) * 0.98;
    this.legend = new Legend(this.node, Math.max.apply(null, countArr), this.tab);
    this.geoJS = {
      'type': 'FeatureCollection',
      'features': this.geoJSON(json),
    };
    const caseAPI = new CasesAPI(json);

    this.geoJSONMax = {
      'globalCases': caseAPI.globalCountSort(caseAPI.globalCountCases())[0].count,
      'globalDeaths': caseAPI.globalCountSort(caseAPI.globalCountDeaths())[0].count,
      'globalRecovered': caseAPI.globalCountSort(caseAPI.globalCountRecovered())[0].count,
      'lastCases': caseAPI.globalCountSort(caseAPI.newCountCases())[0].count,
      'lastDeaths': caseAPI.globalCountSort(caseAPI.newCountDeaths())[0].count,
      'lastRecovered': caseAPI.globalCountSort(caseAPI.newCountRecovered())[0].count,
      'globalCases100': caseAPI.globalCountSort(caseAPI.globalCountCases100())[0].count,
      'globalDeaths100': caseAPI.globalCountSort(caseAPI.globalCountDeaths100())[0].count,
      'globalRecovered100': caseAPI.globalCountSort(caseAPI.globalCountRecovered100())[0].count,
      'lastCases100': caseAPI.globalCountSort(caseAPI.newCountCases100())[0].count,
      'lastDeaths100': caseAPI.globalCountSort(caseAPI.newCountDeaths100())[0].count,
      'lastRecovered100': caseAPI.globalCountSort(caseAPI.newCountRecovered100())[0].count
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

  update(data) {
    this.data = data;
    this.tab = tab;
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
