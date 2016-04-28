'use strict';

module.exports = (department, position) => {

    // By department or by position
    if(department && typeof department === 'object' && Array.isArray(department) ||
       position && typeof position === 'object' && Array.isArray(position)) {

        // http://stackoverflow.com/questions/5582574/javascript-checking-if-string-contains-text-from-an-array-of-substrings
        const deptRegEx = department.join('|');
        const positionRegEx = position.join('|');


        return (req, res, next) => {
            if( req && req.session && req.session.user &&
                new RexExp(deptRegEx).test(req.session.user.department) &&
                req.session.user.isApproved) {
                return next();
            }
            else {
                return res.redirect('403');
            }
        }
    }

    // Anyone logged on nor not logged in
    else if(typeof department === 'boolean') {
        // if logged in, continue
        // else redirect to /
        if(department) {
            return (req, res, next) => {
                if(req.session.user) {
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
};
