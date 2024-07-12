const isAuthenticated = (req, res, next) => {
    if (req.session.user) {
      return next();
    } else {
      return res.status(401).send('You must be logged in to access this page');
    }
  };
  

module.exports = isAuthenticated;