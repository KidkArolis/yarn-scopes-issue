const path = require('path')
const express = require('express')

const PORT = 3300
const app = express()

app.set('trust proxy', true)

app.get('/@foo/bar', (req, res) => {
  console.log('REQ', req.host)
  res.send({
    '_id': '@foo/bar',
    '_rev': '2153',
    'name': '@foo/bar',
    'description': 'Bar at foo',
    'dist-tags': {
      'latest': '1.0.0'
    },
    'time': {
      'modified': '2016-10-27T17:15:30.000Z',
      'created': '2016-06-14T15:01:02.535Z',
      '1.0.0': '2016-06-14T15:01:02.535Z'
    },
    'users': {},
    'author': {
      'name': 'Me'
    },
    'versions': {
      '1.0.0': {
        'name': '@foo/bar',
        'description': 'Recursively mkdir, like `mkdir -p`',
        'version': '1.0.0',
        '_id': '@foo/bar@1.0.0',
        '_nodeSupported': true,
        'dist': {
          'shasum': '3fbd9f4711a5234233dc6c9d7a052d4b9f83b416',
          'tarball': req.protocol + '://' + req.host + ':' + PORT + '/@foo/bar/-/@foo/bar-1.0.0.tgz'
        }
      }
    }
  })
})

app.get('/@foo/bar/-/@foo/bar-1.0.0.tgz', (req, res) => {
  res.sendFile(path.join(__dirname, '@foo-bar-1.0.0.tgz'))
})

app.listen(PORT, () => {
  console.log('NPM registry running.')
})
