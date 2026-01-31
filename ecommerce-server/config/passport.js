const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const User = require('../models/User'); 

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "/api/auth/github/callback", 
      scope: ['user:email']
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
       
        const email = profile.emails && profile.emails[0] ? profile.emails[0].value : null;

        if (!email) {
            return done(new Error("GitHub hesabında email tapılmadı"), null);
        }

        let user = await User.findOne({ $or: [{ githubId: profile.id }, { email: email }] });

        if (user) {
         
          if (!user.githubId) {
              user.githubId = profile.id;
              await user.save();
          }
          return done(null, user);
        }

        user = await User.create({
          name: profile.displayName || profile.username,
          email: email,
          githubId: profile.id,
          password: "", 
          isAdmin: false
        });

        return done(null, user);

      } catch (error) {
        return done(error, null);
      }
    }
  )
);

module.exports = passport;