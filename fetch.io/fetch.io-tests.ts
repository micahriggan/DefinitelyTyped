
import Fetch from 'fetch.io'

const request = new Fetch()

request
  .get('')
  .query({})
  .json()

request
  .delete('')
  .json()

request
  .head('')
  .json()

request
  .options('')
  .json()

request
  .put('')
  .json()

request
  .config('key', 'value')
  .json()

request
  .config({key: 'value'})
  .json()

request
  .config('set', 'value')
  .json()

request
  .set({key: 'value'})
  .json()

request
  .type('json')
  .json()

request
  .get('')
  .query({})
  .text()

request
  .get('')
  .query({})
  .then(() => {})

request
  .post('')
  .send({})
  .json()
