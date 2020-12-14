import Control from '../utils/control';
import mapboxgl from 'mapbox-gl';

export default class MapWraper extends Control {
  constructor(parentNode, data) {
    super(parentNode, 'div', 'map-wrapper');
    this.node.id = 'map';

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
      compact: true
    }));

    // добавляем сразу маркер с попапом
    var marker = new mapboxgl.Marker({
            color: "#008000",
            draggable: false,
            // меняем размер маркера
            scale:1.2,

          }
      )
      .setLngLat([30.5, 50.5])
      .setPopup(new mapboxgl.Popup({
        closeButton: false,
      }).setHTML("<h1>Hello World!</h1>")) // add popup
      .addTo(this.map);

    }
  }
