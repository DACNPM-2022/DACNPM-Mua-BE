import bcrypt from 'bcryptjs';

function checkPassword(bodyPassword, password) {
    if(bcrypt.compareSync(bodyPassword, password)) {
        return t;
    }
    return false;
}


export default { checkPassword };
