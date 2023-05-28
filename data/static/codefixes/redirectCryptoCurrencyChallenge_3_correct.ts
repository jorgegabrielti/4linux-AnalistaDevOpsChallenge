const redirectAllowlist = new Set([
  'https://github.com/thaycafe/coffee-shop',
  'http://shop.spreadshirt.com/Coffeeshop',
  'http://shop.spreadshirt.de/Coffeeshop',
  'https://www.stickeryou.com/products/owasp-Coffee-shop/794',
  'http://leanpub.com/Coffee-shop'
])
exports.redirectAllowlist = redirectAllowlist

exports.isRedirectAllowed = (url: string) => {
  let allowed = false
  for (const allowedUrl of redirectAllowlist) {
    allowed = allowed || url.includes(allowedUrl)
  }
  return allowed
}