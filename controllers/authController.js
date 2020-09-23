exports.postAuthRegister = async (req, res)=>{
    const email = req.body.email
    await querySQL("SELECT email FROM users WHERE email = ?",[email], (err, result) =>{
        if(err){
            res.send(err)
        }else{
            console.log(result);
        }
    })
}