const fs = require('fs');

const data = fs.readFileSync('test-page.html', 'utf8');

module.exports.content = data.toString();
