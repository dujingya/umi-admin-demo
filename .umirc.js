
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: 'umi-demo',
      dll: true,

      routes:[{
        path:'/',
        component:'index',
        routes: [{
          path: '/',
          component: './home'
        }]
      }]
    }],
  ],
}
