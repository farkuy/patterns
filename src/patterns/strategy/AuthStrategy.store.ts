export class User {
    jwtToken?: string;
    phoneCode?: string;
}

interface IAuthStrategy {
    auth: (user: User) => boolean;
}
class AuthStrategyStore {
    constructor(private strategy: IAuthStrategy) {}

    setStrategy(strategy: IAuthStrategy) {
        this.strategy = strategy;
    }

    public authUser(user: User): boolean {
        return this.strategy.auth(user);
    }
}

class JWTStrategy implements IAuthStrategy {
    auth(user: User): boolean {
        if (user.jwtToken)
            return true;
        return false;
    }
}

class PhoneStrategy implements IAuthStrategy {
    auth(user: User): boolean {
        if (user.phoneCode)
            return true;
        return false;
    }
}

const user = new User();
user.jwtToken = 'token';
const auth = new AuthStrategyStore(new JWTStrategy())
auth.authUser(user);
console.log(auth)
auth.setStrategy(new PhoneStrategy())
console.log(auth)

