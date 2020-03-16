import React, { useState } from 'react';
import styled from 'styled-components';
import { AppBar, Toolbar, InputBase, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import VolleyIcon from '@material-ui/icons/SportsVolleyball';
import FlexSeparator from './FlexSeparator';
import Link from 'next/link';
import useAuthStore from '../src/stores/AuthStore';
import redirect from '../src/utils/redirect';

const CustomLink = styled.a`
  text-decoration: none;
  color: white;
  font-size: 17px;
  margin-right: 10px;

  :hover {
    border-bottom: 1px solid #00D394;
  }
`;

const ToolbarStartWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const InputWrapper = styled.form`
  position: relative;
  margin-right: 10px;
  margin-left: 10px;
  padding-left: 35px;

  background-color: #65656A;
  border-radius: 3px;
  width: 220px;

  transition: width .3s ease-in-out;

  .MuiInputBase-root {
    width: 100%;
    color: white;
  };

  :focus-within {
    background-color: white;
    width: 350px;

    .MuiInputBase-root {
      color: black;
    }

    .MuiSvgIcon-root {
      color: #00D394;
    }
  }
`;

const InputIcon = styled(SearchIcon)`
  position: absolute;
  z-index: 5;
  left: 5px;
  top: 3px;
  color: #363738;
`;


function ManjocAppBar() {
  const auth = useAuthStore();
  const [search, setSearch] = useState<String>("");
  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <ToolbarStartWrapper>
          <Link href="/">
            <VolleyIcon style={{ cursor: "pointer" }} fontSize="large" color="primary" />
          </Link>
          <InputWrapper onSubmit={(e) => { e.preventDefault(); redirect(`/search?q=${search}`) }}>
            <InputIcon />
            <InputBase value={search} onChange={e => setSearch(e.target.value)} placeholder="Search Sessions" />
          </InputWrapper>
          <Link href="/sessions" passHref>
            <CustomLink>Sessions</CustomLink>
          </Link>
          <Link href="/sessions" passHref>
            <CustomLink>BlahBlah</CustomLink>
          </Link>
        </ToolbarStartWrapper>
        <FlexSeparator />
        {auth.isLogged ?
          <Button variant="contained" color="primary" onClick={(e) => { e.preventDefault(); redirect("/logout") }}>
            Logout
          </Button> :
          <div>
            <Link href="/login" passHref>
              <CustomLink>Sign up</CustomLink>
            </Link>
            <Link href="/login" passHref>
              <CustomLink style={{ color: "#00D394" }}>Log in</CustomLink>
            </Link>
          </div>}
      </Toolbar>
    </AppBar>
  );
}

export default ManjocAppBar;