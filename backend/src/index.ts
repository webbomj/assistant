import express from 'express'

const expressApp = express()
expressApp.get('/', (req, res) => {
  res.send('hello world')
})
expressApp.listen(3000, () => {
  console.info('Listening at http://localhost:3000')
})
