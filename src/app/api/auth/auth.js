// pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        const res = await fetch("YOUR_API_ENDPOINT_FOR_AUTH", {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" }
        });
        const user = await res.json();

        if (user) {
          return user;
        } else {
          return null;
        }
      }
    })
  ],
  callbacks: {
    async session(session, user) {
      session.userId = user.id;
      return session;
    },
    async jwt(token, user) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
});
