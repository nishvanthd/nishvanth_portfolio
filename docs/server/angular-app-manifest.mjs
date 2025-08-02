
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/nishvanth_portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/nishvanth_portfolio/home",
    "route": "/nishvanth_portfolio"
  },
  {
    "renderMode": 2,
    "route": "/nishvanth_portfolio/home"
  },
  {
    "renderMode": 2,
    "route": "/nishvanth_portfolio/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/nishvanth_portfolio/resume"
  },
  {
    "renderMode": 2,
    "route": "/nishvanth_portfolio/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5976, hash: 'ea174e4d9e282424365381468efc2437ebd3e28ce9eea65f1179f29bb2d6c4b1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1022, hash: 'b6a2e3605fda392f46adc3f9e0c50f748ffcc1ffb34241acd9b198bc1b3fee9b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 11394, hash: 'a330cc0d331283de6541c55b1cfc2e78004e72dc38b53d2e3ae607dafadf971d', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 12435, hash: 'fd16d919c2befa93f687994792e4e8b8401ba8dd1efc7cc5e657a09be603ee59', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 12829, hash: 'd307e8ed547fad33bc5138d2e2a8610dddfb4c36b85565b38f0eaf3d8f12837d', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'resume/index.html': {size: 11080, hash: '5eff3d37b4e502dd1d0ad41c99299cb163a0b8fc6f623a80bc74aba9ac0c5371', text: () => import('./assets-chunks/resume_index_html.mjs').then(m => m.default)},
    'styles-3N6SRIBF.css': {size: 13905, hash: 'ig7Aq5yVPqc', text: () => import('./assets-chunks/styles-3N6SRIBF_css.mjs').then(m => m.default)}
  },
};
