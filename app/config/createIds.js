const fs = require('fs');
const shortid = require('shortid');

const data = JSON.parse(fs.readFileSync('./gradients.json'));
const gradients = data.map(gradient => Object.assign({}, gradient, { id: shortid.generate() }));

fs.writeFileSync('./output.json', JSON.stringify(gradients));