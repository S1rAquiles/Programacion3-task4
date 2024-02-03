function getContentType(extname) {
  switch (extname) {
    case '.html':
      return '.html';
    case '.css':
      return '.css';
    case '.js':
      return '.js';
    case '.json':
      return '.json';
    case '.png':
      return '.png';
    case '.jpg':
      return '.jpg';
    case 'jpeg':
      return '.jpeg';
    default:
      return null;
  }
}
module.exports={
getContentType
}