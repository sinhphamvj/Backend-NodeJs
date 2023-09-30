import db from '../models/index'

let userHandleLogin = (email, password) => {

}

let checkUserEmail = (email) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { email: userEmail }
            })
            if (user) {
                resolve(true)
            }
            else {
                resolve(false)
            }
        } catch (e) {
            reject(e)
        }
    })
}
module.exports = {
    userHandleLogin: userHandleLogin,
    checkUserEmail: checkUserEmail,
}