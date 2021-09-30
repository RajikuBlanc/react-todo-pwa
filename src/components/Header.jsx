import React, { useContext } from 'react';
import { signInWithGoogle, signInWithGithub, logOut } from '../service/firebase';
import { AuthContext } from '../providers/AuthProvider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { styled } from '@mui/system';

// --------------- Function ---------------
const Header = () => {
  const currentUser = useContext(AuthContext);
  const authButton = () => {
    let buttonDom;
    if (currentUser) {
      buttonDom = (
        <>
          <CustomButton variant="inherit" onClick={logOut}>
            ログアウト
          </CustomButton>
        </>
      );
    } else {
      buttonDom = (
        <>
          <CustomButton variant="inherit" onClick={signInWithGoogle}>
            Googleログイン
          </CustomButton>
          <CustomButton variant="inherit" onClick={signInWithGithub}>
            GitHubログイン
          </CustomButton>
        </>
      );
    }
    return buttonDom;
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Logo
        </Typography>
        {authButton()}
      </Toolbar>
    </AppBar>
  );
};

// --------------- Styled ---------------

const CustomButton = styled(Button)({
  color: 'white',
  border: 'none'
});

export default Header;
