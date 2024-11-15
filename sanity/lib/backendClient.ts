import { createClient } from "next-sanity"
import { apiVersion,projectId,dataset} from "../env"

export const backendClient = createClient({
    apiVersion,
    projectId,
    dataset,
    useCdn: true,
    token:process.env.SANITY_API_TOKEN
})