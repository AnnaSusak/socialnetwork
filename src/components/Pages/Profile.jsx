import React from "react";
import Search from "../SearchingComponents/Search";
import StyledInputBase from "../SearchingComponents/StyledInputBase";
import SearchIconWrapper from "../SearchingComponents/SearchIconWraper";
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import MyPosts from "../PostsComponents/MyPosts";
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
            <Button variant="contained" size="small">
              New Post
            </Button>
          </div>
          <MyPosts />
        </div>
      </div>
    </div>);
}
export default Profile;