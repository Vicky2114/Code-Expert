module.exports.home=function(req,res){
    console.log('done');
    return res.render('home',{isprofilepage:false,
        homepage:true,
        reset:false,
        loginpage:false,
        });
}