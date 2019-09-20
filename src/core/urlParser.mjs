import url from 'url';

/**
 * @param { Object } req - the request object
 * @param { String } req.url
 * @param { String } req.method
 */
export default function urlParser(req) {  
  // get the url and parse it
  const parsedUrl = url.parse(req.url);
  // extract path
  const urlPath = parsedUrl.pathname;
  // trim slashes
  const trimmedPath = urlPath.replace(/^\/+|\/+$/g, '');
  // get method
  const method = req.method;

  return {
    method,
    trimmedPath,
  };
}