class UserConstroller{
    getUser =(req, res) =>{
        const {token} =req.query.token
        res.status(200)({message: 'user'})
    };
}
export default new UserConstroller();