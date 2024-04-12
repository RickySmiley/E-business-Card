#!./index.js

const { render } = require('prettyjson')
const data = require('./data')

const renderOpts = {
	dashColor: 'cyan',
	keysColor: 'blue',
	stringColor: 'white'
}

module.exports = ({ json }) => json ? JSON.stringify(data) : render(data, renderOpts)
