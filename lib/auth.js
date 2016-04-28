module.exports = (accountType) => {

    if(accountType) {
        return (req, res, next) => {
            if(req.session.type === accountTyle) {
                return next();
            }
            else {
                return res.redirect('403');
            }
        }
    }

    return (req, res, next) =>{
        if(req.session) {
            return next();
        }
        else {
            return res.redirect('403');
        }
    };
};
