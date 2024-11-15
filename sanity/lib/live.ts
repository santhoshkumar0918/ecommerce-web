// Querying with "sanityFetch" will keep content automatically updated
// Before using it, import and render "<SanityLive />" in your layout, see
// https://github.com/sanity-io/next-sanity#live-content-api for more information.
 //client: client.withConfig({
    // Live content is currently only available on the experimental API
    // https://www.sanity.io/docs/api-versioning
   // apiVersion: 'vX'
//}) 
  

import "server-only"
import { defineLive } from "next-sanity";
import { client } from '@/sanity/lib/client'


const token = process.env.SANITY_READ_API_TOKEN;
if (!token) {
  throw new Error("Missing SANITY_READ_API_TOKEN")
}

export const { sanityFetch, SanityLive } = defineLive({ 
  client,
  serverToken: token,
  browserToken: token,
  fetchOptions: {
    revalidate:0,
  }
});
