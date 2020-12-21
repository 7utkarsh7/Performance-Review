const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const config= require("config");
const bcrypt = require("bcryptjs");
const {OAuth2Client} =require("google-auth-library");

const client = new OAuth2Client("420831940970-u16rvfgoss3ejhbk9bkmjq9bmcp2uo8v.apps.googleusercontent.com");

//route    get api/gauth
//test     test route
////access public
router.get("/",auth, async(req,res)=>{ res,json("get gauth")});

router.post("/", async (req,res)=>{
    console.log("backend", req.body);

    const {tokenId} = req.body;

const response = await client.verifyIdToken ({ idToken: tokenId, audience: "420831940970-u16rvfgoss3ejhbk9bkmjq9bmcp2uo8v.apps.googleusercontent.com"})
 
    const {email_verified, email, name, picture} = response.payload;
    if (email_verified) {
      const user = await User.findOne({email});
      if (user) {

        const payload ={
            user:{
                id: user.id
            }
        }
        
        jwt.sign(
            payload, 
            config.get("jwtSecret"),
            {expiresIn: 360000},
            (err,token)=>{
                if (err) throw err;
                console.log(err,"here2");
                res.json({token});
            }
            );
      } else {
           let password = email+name;
           let avatar = picture;

           let newuser = new User({
               name,
                email,
                avatar,
                password
            });
            const salt = await bcrypt.genSalt(10);
            newuser.password = await bcrypt.hash(password, salt);
            await newuser.save();

                const payload ={
                    user:{
                        id: newuser.id
                    }
                };
                
                jwt.sign(
                    payload, 
                    config.get("jwtSecret"),
                    {expiresIn: 360000},
                    (err,token)=>{
                        if (err) throw err;
                        console.log(err,"here2");
                        res.json({token});
                    }
                    );
      }
    }
    else{
        return res.status(401).json("Unauthorized");
    }
});



module.exports = router;