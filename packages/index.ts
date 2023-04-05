/**
 * @author  sparkHou
 * @date 2023-03-29 13:54
 * @Description:
 */
// @ts-nocheck
import type { App } from 'vue'
// 所有组件

// vite

const imports = import.meta.globEager("./components/**/*.vue");
export default {
  install(app) {
    for (const key in imports) {
      console.log(key,'=====')
      const component = imports[key];
      const name = key.replace("./components/", "").replace("/index.vue", "");
      app.component(name, component.default);
    }
  },
};

// webpack

//
// const requireCom = require.context('./components', true, /\.vue$/)
// export default {
//   install(app) {
//     requireCom.keys().forEach((key) => {
//       const _component = requireCom(key)
//       app.component(key.split('/')[1], _component.default || _component)
//     })
//   },
// }


