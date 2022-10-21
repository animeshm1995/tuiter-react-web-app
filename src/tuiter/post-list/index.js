import React from "react";
import postsArray from './posts-details.json';
import PostItem from "./post-item";

const PostList = () => {
    return(
        <ul className="list-group">
            {
                postsArray.map(post =>
                    <PostItem
                        key={post._id} post={post}/> )
            }
        </ul>
    );
};
export default PostList;