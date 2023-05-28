/*
 * Copyright (c) 2014-2023 Bjoern Kimminich & the OWASP Coffee Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import winston = require('winston')

module.exports = winston.createLogger({
  transports: [
    new winston.transports.Console({ level: process.env.NODE_ENV === 'test' ? 'error' : 'info' })
  ],
  format: winston.format.simple()
})
