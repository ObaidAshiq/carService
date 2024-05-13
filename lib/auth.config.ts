import { User } from "./models";
import { connectToDb } from "./utils";

export const authConfig = {
    pages: {
      signIn: "/login",
    },
    providers: [],
    callbacks: {
      // FOR MORE DETAIL ABOUT CALLBACK FUNCTIONS CHECK https://next-auth.js.org/configuration/callbacks
      async jwt({ token, user }:any) {
        // console.log('token',token,'user' ,user)
        if (user) {
          // console.log('first')
          connectToDb();
          const userFromDB = await User.findOne({ email: user.email });
          token.id = user.id;
          token.isAdmin = userFromDB.isAdmin;
        }
        return token;
      },
      async session({ session, token }:any) {
        // console.log(token)
        if (token) {
          session.user.id = token.id;
          session.user.isAdmin = token.isAdmin;
        }
        return session;
      },
      authorized({ auth, request }:any) {
        const user = auth?.user;
        const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
        const isOnAppointmentPage = request.nextUrl?.pathname.startsWith("/appointment");
        const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");
  
        // ONLY ADMIN CAN REACH THE ADMIN DASHBOARD
  
        if (isOnAdminPanel && !user?.isAdmin) {
          return false;
        }
  
        // ONLY AUTHENTICATED USERS CAN REACH THE BLOG PAGE
  
        if (isOnAppointmentPage && !user) {
          return false;
        }
  
        // ONLY UNAUTHENTICATED USERS CAN REACH THE LOGIN PAGE
  
        if (isOnLoginPage && user) {
          return Response.redirect(new URL("/", request.nextUrl));
        }
  
        return true
      },
    },
  };