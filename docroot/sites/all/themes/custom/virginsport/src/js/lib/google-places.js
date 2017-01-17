import $ from '../lib/jquery';

let isInited = false;
let toBind = [];

export default (el, cb) => {
  toBind.push({
    element: el,
    callback: cb
  });

  bind();
};

function bind() {
  if (!isInited) {
    return;
  }

  for (let i = toBind.length - 1; i > -1; i--) {
    let bind = toBind[i];

    let ac = new google.maps.places.Autocomplete(bind.element, {
      types: ['address']
    });
  
    navigator.geolocation && navigator.geolocation.getCurrentPosition(function(pos) {
      let circle = new google.maps.Circle({
        center: {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        },
        radius: pos.coords.accuracy
      });
  
      ac.setBounds(circle.getBounds());
    });

    ac.addListener('place_changed', () => {
      let place = ac.getPlace();
      let addr = {};

      addr.long = (name) => {
        return (addr[name] && addr[name].long_name) ? addr[name].long_name : '';
      };

      addr.short = (name) => {
        return (addr[name] && addr[name].short_name) ? addr[name].short_name : '';
      };

      if (!place.address_components) {
        return;
      }

      for (var i = 0; i < place.address_components.length; i++) {
        var addressType = place.address_components[i].types[0];
        addr[addressType] = place.address_components[i];
      }

      bind.callback(addr);
    });

    toBind.splice(i, 1);
  }
}

// Clean me up

addLib();

function addLib() {
  let callback = 'initPlacesAutocomplete'; // Needs to be a global function
  let key = 'AIzaSyA2QJCdZiMdEG4S1Xgdo00zopSgew5gV6Y'; // TODO move to Drupal.settings somewhere!!!
  let src = `https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places&callback=${callback}`;

  $('body').append(`<script src="${src}"></script>`);
}

window.initPlacesAutocomplete = function () {;
  isInited = true;
  bind();
};
