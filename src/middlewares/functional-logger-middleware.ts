// Consider using the simpler functional middleware alternative any time
// your middleware doesn't need any dependencies.

export function logger(req, res, next) {
  console.log(`Request...`);
  next();
}
