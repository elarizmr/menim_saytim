const express = require('express');
const passport = require('passport');
const generateToken = require('../utils/generateToken'); 
const router = express.Router();

router.get('/github', passport.authenticate('github', { scope: ['user:email'], session: false }));

router.get(
  '/github/callback',
  
  passport.authenticate('github', { failureRedirect: 'http://localhost:3000/login', session: false }),
  (req, res) => {
    
    if (req.user) {
        const token = generateToken(req.user._id);

        res.redirect(`http://localhost:3000/auth-success?token=${token}`);
    } else {
        res.redirect('http://localhost:3000/login');
    }
  }
);

module.exports = router;