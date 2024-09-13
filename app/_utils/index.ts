import { createClient } from "microcms-js-sdk";

const microCMSClient = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY,
});

export const Util = { microCMSClient };
