import iFrameResize from 'iframe-resizer';
import $ from '../lib/jquery';

export default () => {
  $('.vs-iframe').iFrameResize({
    checkOrigin: false
  });
};
