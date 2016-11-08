import bootstrap from 'bootstrap.native/dist/bootstrap-native';
import Drupal from '../lib/drupal';
import $ from '../lib/jquery';

//let modal = init();

export default () => {
  return;
  window.x = modal;

  $(document).ready(() => {
    /*
    Drupal.behaviors.vsContactForm = {
      attach: function (context, settings) {
        console.log(context, settings);
      }
    };*/
    
    $('a').each(function () {
      bindLink(this);
    });
  });
};

function init() {
  let html = `
    <div id="vs-contact-form-modal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content"></div>
      </div>
    </div>
  `;
  
  let $modal = $(html);
  $modal.appendTo('body');
  
  return new bootstrap.Modal($modal.get(0));
}

function bindLink(el) {
  let base = id();
  
  let ajax = new Drupal.ajax(base, el, {
    url: '//' + window.location.hostname +  Drupal.settings.basePath + Drupal.settings.pathPrefix + 'ajax/contact-form',
    event: 'click'
  });
  
  ajax.commands.vsContactForm = function (ajax, response, status) {
    //Drupal.attachBehaviors(new_content, settings);
    
    console.log(modal);
    
    modal.open();
    modal.content(response.data);
  };
  
  Drupal.ajax[base] = ajax;
}

/**
 * Generates a random unique identifier
 *
 * @returns {string}
 */
function id() {
  return 'vs-contact-form-' + (Math.random().toString(36)+'00000000000000000').slice(2, 10+2);
}
