import UAParser from 'ua-parser-js';

let $uapraser = new UAParser(navigator.userAgent);
let browser = $uapraser.getBrowser();
let os = $uapraser.getOS();
if (os.name === 'iOS' && browser.name === '[Mobile] Safari') {
  window.location.href="kuozhi://" + $('#jsWebViewPayResult').data('goto');
}