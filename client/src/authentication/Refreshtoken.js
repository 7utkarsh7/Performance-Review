export const refreshTokenSetup = (res) => {
    let refreshTimimg = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;
    const refreshToken = async () => {
      const newAuthres = await res.reloadAuthResponse();
      refreshTimimg = (newAuthres.EXPIRES_IN || 3600 - 5 * 60) * 1000;
      console.log("newAuthres", newAuthres);
  
      console.log("new_auth_token", newAuthres.id_token);
  
      setTimeout(refreshToken, refreshTimimg);
    };
    setTimeout(refreshToken, refreshTimimg);
  };