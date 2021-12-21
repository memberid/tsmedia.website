export default function ({ $axios, $config }) {
  $axios.onRequest((config) => {
    config.headers.Authorization = 'Bearer ' + $config.baseTOKEN
  })
}
