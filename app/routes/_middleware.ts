import { secureHeaders, NONCE } from 'hono/secure-headers'

secureHeaders({
  contentSecurityPolicy: {
    scriptSrc: [NONCE],
  },
})
