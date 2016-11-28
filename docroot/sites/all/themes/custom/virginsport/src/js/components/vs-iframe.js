import {iframeResizer, iframeResizerContentWindow} from 'iframe-resizer';

export default () => {
    iframeResizer({ checkOrigin: false }, '.vs-iframe');
};
