
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://Mallika-Nakka.github.io/Quick-Bite-Angular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Quick-Bite-Angular/login",
    "route": "/Quick-Bite-Angular"
  },
  {
    "renderMode": 2,
    "route": "/Quick-Bite-Angular/login"
  },
  {
    "renderMode": 2,
    "route": "/Quick-Bite-Angular/home"
  },
  {
    "renderMode": 2,
    "route": "/Quick-Bite-Angular/orders"
  },
  {
    "renderMode": 2,
    "route": "/Quick-Bite-Angular/cart"
  },
  {
    "renderMode": 2,
    "route": "/Quick-Bite-Angular/favourites"
  },
  {
    "renderMode": 2,
    "route": "/Quick-Bite-Angular/address"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5209, hash: '5890106f0d44901cbf1e369b71796a8662d6a70cfd408315d51050ee9b4a0c81', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1108, hash: '1055a07251263e6cdd14adc4a0a4a096fe8ea30df116cf1ab203d7b2c0a544df', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 12249, hash: 'a83c0a179b85a6cc26be04243f35658fd8537236116a6ab8b34516cca8006ff3', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'favourites/index.html': {size: 9514, hash: '07b643ca29c2f1094de911c92518dc3454562420cdbc0e16dc594bf55eb855da', text: () => import('./assets-chunks/favourites_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 19956, hash: '5375a352c179b6bc7305c49e4db2c4cf81a7c448a9d47e279fbdc01b770ad68a', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'address/index.html': {size: 9502, hash: '507582a63180385a31a97b36a26a1253e7a790f757b8d70c6c88a81ff2ef9a94', text: () => import('./assets-chunks/address_index_html.mjs').then(m => m.default)},
    'cart/index.html': {size: 12145, hash: 'aa37639a6f2dd7e34ad55d2e1c5f647669753ac7d5c008d6ed185e9c2ec0b731', text: () => import('./assets-chunks/cart_index_html.mjs').then(m => m.default)},
    'orders/index.html': {size: 9501, hash: 'b467936c460a368d61a351fa85a2099f6a37423e792ab895acf1a82e2e24d06f', text: () => import('./assets-chunks/orders_index_html.mjs').then(m => m.default)},
    'styles-QVIWWWEK.css': {size: 231039, hash: '4utDjBw/77M', text: () => import('./assets-chunks/styles-QVIWWWEK_css.mjs').then(m => m.default)}
  },
};
