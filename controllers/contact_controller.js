module.exports.contact=function(req,res){
    console.log('done');
    return res.render('contact',{isprofilepage:false,
        homepage:true,
        reset:false,
        loginpage:false,
        });
}