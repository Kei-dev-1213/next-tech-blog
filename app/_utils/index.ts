import { createClient } from "microcms-js-sdk";

const microCMSClient = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

export const Util = { microCMSClient };
