module.exports = require("knex")({
  client: "mysql2",
  connection: {
    host: "45.13.252.43",
    port: 3306,
    user: "u468378300_portalite",
    password: "Portalite=22",
    database: "u468378300_portalite",
    connectTimeout: 60000
  },
  pool: {
    min: 2,

    // maximum size
    max: 500,
  
    // acquire promises are rejected after this many milliseconds
    // if a resource cannot be acquired
    acquireTimeoutMillis: 9999999,
  
    // create operations are cancelled after this many milliseconds
    // if a resource cannot be acquired
    createTimeoutMillis: 9999999,
  
    // destroy operations are awaited for at most this many milliseconds
    // new resources will be created after this timeout
    destroyTimeoutMillis: 9999999,
  
    // Free resources are destroyed after this many milliseconds.
    // Note that if min > 0, some resources may be kept alive for longer.
    // To reliably destroy all idle resources, set min to 0.
    idleTimeoutMillis: 9999999,
  
    // how often to check for idle resources to destroy
    reapIntervalMillis: 9999999,
  
    // how long to idle after failed create before trying again
    createRetryIntervalMillis: 9999999,
  
    // If true, when a create fails, the first pending acquire is
    // rejected with the error. If this is false (the default) then
    // create is retried until acquireTimeoutMillis milliseconds has
    // passed.
    propagateCreateError: false
  },
});
