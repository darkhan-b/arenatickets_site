module.exports = {
  apps: [
    {
      name: 'ArenaticketsSite',
      port: '3005',
      exec_mode: 'cluster',
      instances: '4',
      script: './.output/server/index.mjs'
    }
  ]
}
