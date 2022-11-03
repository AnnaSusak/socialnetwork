import React from "react";
import Avatar from '@mui/material/Avatar';
const Post=(props)=>{
    return <div>
        <Avatar
        alt="Remy Sharp"
        src="https://www.ejin.ru/wp-content/uploads/2018/10/1202399791_preview_15034743_1798112143788452_7709561090543190016_n.jpg"
        sx={{ width: 24, height: 24 }}
      />
      <div>{props.message}</div>
      <span>like {props.likes}</span>
    </div>
}
export default Post;