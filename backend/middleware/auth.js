const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    
    const authHeader = req.get('Authorization');
    
    if(!authHeader){
        const error = new Error('Jwt must be provided!');
        error.statusCode = 401;
        throw error;
    }

    // Esempio di authorization 'Bearer djerjwejrjejfdej33'
    const token = authHeader.split(' ')[1];
    let decodedToken;

    try {
        decodedToken = jwt.verify(token, 'secretfortoken')
    } catch (err) {
        error.statusCode = 500;
        throw err
    }

    if(!decodedToken){
        const error = new Error('Not authenticated');
        error.statusCode = 401;
        throw error;
    }

    req.isLoggedIn = true;
    req.userId = decodedToken.userId
    req.email = decodedToken.email
    next();
}