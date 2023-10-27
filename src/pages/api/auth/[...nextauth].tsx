import NextAuth from "next-auth"
import { NextAuthOptions } from "next-auth"

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [],
}
export default NextAuth(authOptions)