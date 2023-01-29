module.exports.about=function(req,res){
    console.log('done');
    return res.render('about',{isprofilepage:false,
        homepage:true,
        reset:false,
        loginpage:false,
        });
}