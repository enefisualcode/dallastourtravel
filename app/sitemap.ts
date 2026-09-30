import type { MetadataRoute } from "next"; import { packages } from "@/data/packages"; import { SITE_CONFIG } from "@/config/site";

export const dynamic = "force-static";

export default function sitemap():MetadataRoute.Sitemap{return ["","/paket-umrah","/tentang-kami","/galeri","/kontak","/haji",...packages.map(x=>`/${x.type==='haji'?'haji':'paket-umrah'}/${x.slug}`)].map(url=>({url:`${SITE_CONFIG.url}${url}`,lastModified:new Date()}));}
