// import JwtStrategy from 'passport-jwt';
// import ExtractJwt from 'passport-jwt';
import { Strategy } from 'passport-jwt';
import { ExtractJwt } from 'passport-jwt';
import { getPassword } from '../env';

const passw = getPassword();

export default (passport) => {
    const opts = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('JWT'),
        secretOrKey: passw,
    };
    passport.use(new Strategy(opts, function(jwt_payload, done) {
        console.log('jwt_payload :>> ', jwt_payload);

        const { username } = jwt_payload;
        if (username) {
            return done(null, username);
        }

        return done(null, false);
    }));
};