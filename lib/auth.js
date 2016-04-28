'use strict';

module.exports = (accountType) => {

    // Determining account type
    if(typeof accountType === 'string') {
        return (req, res, next) => {
            if( req && req.session && req.session.user &&
                req.session.user.type === accountType &&
                req.session.user.isApproved) {
                return next();
            }
            else {
                return res.redirect('403');
            }
        }
    }
    else if(typeof accountType === 'boolean') {
        // if logged in, continue
        // else redirect to /
        if(accountType) {
            return (req, res, next) => {

                if(req && req.session && req.session.user) {
                    return next();
                }
                else {
                    res.redirect('/');
                }
            };
        }
        // If not logged in, continue
        // else redirect to home
        else {
            return (req, res, next) => {

                if(!req.session.user) {
                    return next();
                }
                else {
                    res.redirect('/home');
                }
            };

        }

    }
    // No account type
};
