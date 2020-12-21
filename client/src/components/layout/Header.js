import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Googlelogout from "../../authentication/Googlelogout";
function Header({ auth:{user}}) {
   
  // var a = user.name.lastIndexOf(' '); // last occurence of space
  // var b = user.name.substring(0, a);
 
  return (
    <header>
      <h1>
        5PINS
        <div style={{float:"right", display: "flex", flexDirection:"row"}}>
       <p>{user && user.name}</p>
       <img src={user && user.avatar} alt="" style={{borderRadius:"15px", margin:"auto 3%"}} height="30px" width="30px"></img>
       <Googlelogout />
        </div>
      </h1>
    </header>
  );
}

Header.propTypes={
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state =>({
   auth: state.auth
  });
  export default connect(mapStateToProps,null)(Header);
