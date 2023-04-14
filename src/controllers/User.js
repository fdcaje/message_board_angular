class User {
    static getUser(auth) {
        if(!auth) return false
        return [auth]
    }
}

export default User;
