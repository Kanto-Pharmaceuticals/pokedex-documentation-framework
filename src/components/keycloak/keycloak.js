/**
 * Keycloak Client Component
 * Creates a Keycloak client using keycloak-js and the url, realm and clientId
 * from the .env files.
 */

/* Begin React import statements */
import Keycloak from "keycloak-js"

/* Stores Keycloak configuration strings from the appropriate .env file */
const keycloakConfig = {
  url: process.env.KEYCLOAK_URL,
  realm: process.env.KEYCLOAK_REALM,
  clientId: process.env.KEYCLOAK_CLIENTID,
}

/* Create a new Keycloak client using the config from above and export it. */
const keycloak = new Keycloak(keycloakConfig)

/* Export the keycloak const as the default */
export default keycloak
