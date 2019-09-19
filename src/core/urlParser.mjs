import url from 'url';

/**
 * @param { Object } req - the request object
 * @param { String } req.url
 */
export default function urlParser(req) {
  console.log('req.url', req.url);
  
  // get the url and parse it
  const parsedUrl = url.parse(req.url);
  // extract path
  const urlPath = parsedUrl.pathname;
  // trim slashes
  const trimmedPath = urlPath.replace(/^\/+|\/+$/g, '');

  return {
    trimmedPath
  };
}