
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
    'index.csr.html': {size: 4595, hash: '26e98ae42d4c311ded9471b13248ee5d2eceddd4eca3e97714ef9581a1b48e00', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1022, hash: '8ba7e6ba046e94c3651955bfc0c929a9284429611fe9cb2b10f73a3fd18c03ce', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 11374, hash: 'a5d9fe67b816687f00df73c729e711fc40238858247d0a3061bde3a3c73565ea', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 10980, hash: '2d3695bbf0110a813925db32981df22d40a4e28aea098d46d19394123300d48b', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 9939, hash: '01e707691dcdf4f0f65c2dc8cad09d14e54349c478e141064c868cc4031e02be', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'resume/index.html': {size: 9625, hash: '0c55b01330fa8700f418f04d4963bf3e13adb193bc33fdd1b1706c74bea60db4', text: () => import('./assets-chunks/resume_index_html.mjs').then(m => m.default)},
    'styles-YUW5ZS34.css': {size: 11739, hash: '1SROstxU2LU', text: () => import('./assets-chunks/styles-YUW5ZS34_css.mjs').then(m => m.default)}
  },
};
