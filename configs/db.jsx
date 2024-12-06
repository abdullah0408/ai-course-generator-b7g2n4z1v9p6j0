import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http'

// const sql = neon("postgresql://b7g2n4z1v9p6j0_owner:Mf7Vdh0Wotcj@ep-old-shadow-a1v6t2vm.ap-southeast-1.aws.neon.tech/b7g2n4z1v9p6j0?sslmode=require");
const sql = neon(process.env.NEXT_PUBLIC_DATABASE_URL);
export const db = drizzle(sql);