export default (data, password, opts) => {
    return new Promise((resolve, reject) => {
        console.log(data, password, opts);
        jwt.sign(data, password, opts, (err, token) => {
            if (err) {
                reject(err);
            }
            resolve(token);
        });
    });
};