import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";
import {logout} from "../../redux/actions/auth";
function Header({ logout, auth:{user , isAuthenticated}}) {
  
    let history = useHistory();
  function signout(){
    logout();
    history.push("/login");
  }
//   if(!isAuthenticated){
//     return <Redirect to="/login" />
// }
  return (
    <header>
      <h1>
        <HighlightIcon />
        5PINS
        <div style={{float:"right", display: "flex", flexDirection:"row"}}>
       <p>{user && user.name}</p>
       <img src={user && user.avatar} alt="" style={{borderRadius:"15px", margin:"auto 3%"}} height="30px" width="30px"></img>
      <button onClick={signout}>
    
      Logout</button>
        </div>
      </h1>
    </header>
  );
}

Header.propTypes={
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state =>({
   auth: state.auth
  });
  export default connect(mapStateToProps,{logout})(Header);
