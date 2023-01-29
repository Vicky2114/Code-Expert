const User = require("../models/user");

module.exports.signup = function(req, res){
    if (req.isAuthenticated()){
        return res.redirect('/home');
    }


    return res.render('sign_up',{isprofilepage:false,
        homepage:false,
        reset:false,
        loginpage:false,
        })
}


// render the sign in page
module.exports.signin = function(req, res){

    if (req.isAuthenticated()){
        return res.redirect('/home');
    }
    return res.render('sign_in',{isprofilepage:false,
        homepage:false,
        reset:false,
        loginpage:true,
        });
}
module.exports.create=function(req,res){
    User.findOne({email:req.body.email},function(err,user){
        if(err){
            console.log("error",err)
            return;
        }
        if(!user){
            User.create({FirstName:req.body.firstName,
                LastName:req.body.lastName,
                gender:req.body.gender,
                email:req.body.email,
                password:req.body.password,
                Phone:req.body.number
                
            },function(err,user){
                if(err){
                    console.log("error in creating account",err)
                    return;
                }
                return res.redirect('/');
            })
        }
        else{
            console.log('you have signed up')
            req.flash('success', 'Sign up Succesfully');
            return res.redirect('back');
        }
    })
}
module.exports.createSession = function(req, res){
    req.flash('success', 'Logged in Successfully');
    return res.redirect('/home');
}

module.exports.destroySession = function(req, res){
    req.logout();
    req.flash('success', 'You have logged out!');


    return res.redirect('/sign_in');
}