import React from "react";
import Search from "./Search";
import StyledInputBase from "./StyledInputBase";
import SearchIconWrapper from "./SearchIconWraper";
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
const Profile = () => {
  return (
    <div className='Profile'><img src='https://answit.com/wp-content/uploads/2017/01/full-hd.jpg'></img>
      <div>ava+description</div>
      <div>
        <div>
          My posts
          <div>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          </div>
          <div>
            New post
          </div>
          <div>post 1</div>
          <div>post 2</div>
        </div>
      </div></div>);
}
export default Profile;