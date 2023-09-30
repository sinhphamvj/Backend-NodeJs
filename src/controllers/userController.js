handleLogin = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    if (!email || !password) {
        return res.status(500).json({
            errorCode: 1,
            message: 'missing input parameter'
        })
    }
    return res.status(200).json({

        errorCode: 0,


    })
}

module.exports = {
    handleLogin: handleLogin

}