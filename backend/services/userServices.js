import bcrypt from 'bcryptjs';

function checkPassword(bodyPassword, password) {
    if(bcrypt.compareSync(bodyPassword, password)) {
        return;
    }
    return false;
}


export default { checkPassword };
