module.exports.course=function(req,res){
    console.log('done');
    return res.render('courses',{isprofilepage:false,
        homepage:true,
        reset:false,
        loginpage:false,
        });
}