const auth = (state = true, action) => {
    switch(action.type) {
        case 'LOGIN':
            console.log('logging in');
            return state = true;
        case 'LOGOUT':
            console.log('logging out');
            return state = false;
        default:
            return state;
    }
}

export default auth;