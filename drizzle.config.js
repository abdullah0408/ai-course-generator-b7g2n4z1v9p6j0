/** @type {import('drizzle-kit').Config} */

export default {
  schema: "./configs/schema.jsx",
  dialect: "postgresql",
  dbCredentials: {
    // url: "postgresql://b7g2n4z1v9p6j0_owner:Mf7Vdh0Wotcj@ep-old-shadow-a1v6t2vm.ap-southeast-1.aws.neon.tech/b7g2n4z1v9p6j0?sslmode=require",
    url: process.env.NEXT_PUBLIC_DATABASE_URL,
  },
}