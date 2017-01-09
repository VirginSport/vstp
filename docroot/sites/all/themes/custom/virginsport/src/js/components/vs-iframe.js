import {iframeResizer, iframeResizerContentWindow} from 'iframe-resizer';
import $ from '../lib/jquery';

export default () => {
    iframeResizer({ checkOrigin: false }, '.vs-iframe');
  
    $('.vs-iframe').on('load', (e) => {
      $(e.target).addClass('vs-iframe--loaded');
    });
};
