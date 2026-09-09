export default (app) => {
  app.all(/^\/api(?:\/|$)/, (r) =>
    r.proxy(
      'http://localhost:8000' + r.url + (r.rawQuery ? '?' + r.rawQuery : ''),
    ))
}
