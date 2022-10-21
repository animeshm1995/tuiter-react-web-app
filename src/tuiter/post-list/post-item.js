import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';
const PostItem = (
    {
        post = {
            "avatarIcon": "spacex-icon.png",
            "isRetuit": false,
            "retuitUserName": "Elon Musk",
            "userName": "SpaceX",
            "handle": "SpaceX",
            "time": "23h",
            "header": "Amazing show about",
            "headerPostLink": "",
            "image": "spacex-icon.png",
            "postContent": {},
            "commentCount": "4.2K",
            "retuitCount": "3.5K",
            "likeCount": "37.5K"
        }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-1">
                    {post.isRetuit && <div className="wd-retuited-username"><i className="fa fa-retweet ms-4"></i></div>}
                    <img className="rounded-circle" height={48} src={`/images/${post.avatarIcon}`}/>
                </div>
                <div className="col-11">
                    {post.isRetuit && <div className="wd-retuited-username ms-2">{post.retuitUserName} Retweeted</div>}
                    <div><span className="fw-bolder ms-2">{post.userName}</span>
                        <i className="bi bi-check-circle-fill ms-1 me-1"></i>
                        <span className="wd-handle">@{post.handle}</span><i className="bi bi-dot"></i>
                        <span className="wd-handle">{post.time}</span>
                        <i className="bi float-end bi-three-dots me-2"></i></div>
                    <div className="ms-2">{post.header} {post.headerPostLink.length > 0 && <i className="bi bi-arrow-right"></i>} <a className="wd-thread-link" href="#">{post.headerPostLink}</a></div>
                    <div className="mt-2 ms-2">
                        {
                            post.image.length > 0 &&
                            <img width="100%" height={350} className="rounded-3" src={`/images/${post.image}`}/>
                        }
                    </div>
                    <div>
                        {
                            post.postContent.userName.length > 0 &&
                            <div className="wd-subtuit ms-2">
                                <div className="mt-1"><img className="rounded-circle me-1 mb-1 ms-2" height={15} src={`/images/${post.postContent.avatarIcon}`}/>
                                    <span className="fw-bolder ms-2">{post.postContent.userName}</span>
                                    <span className="wd-handle"> @{post.postContent.handle}</span> <i className="bi bi-dot"></i><span className="wd-handle">{post.postContent.time}</span></div>
                                <div className="ms-2 me-1 mb-1"> {post.postContent.header} <i className="bi bi-arrow-right"></i>
                                    <a className="wd-thread-link" href="#"> {post.postContent.headerPostLink}</a>
                                </div>
                            </div>
                        }
                    </div>
                    <div className="row wd-post-actions mb-3 mt-2 ms-0">
                        <div className="col-3">
                            <a href="#" className="wd-action">
                                <i className="fa-regular fa-comment me-2"></i>{post.commentCount}</a>
                        </div>
                        <div className="col-3">
                            <a href="#" className="wd-action"><i className="fa fa-retweet me-2"></i>{post.retuitCount}
                            </a>
                        </div>
                        <div className="col-3">
                            <a href="#" className="wd-action"><i
                                className="fa-regular fa-heart me-2"></i>{post.likeCount}</a>
                        </div>
                        <div className="col-3">
                            <a href="#" className="wd-action"><i className="fa-solid fa-arrow-up-from-bracket me-2"></i></a>
                        </div>
                    </div>
                    <div className="ms-2">
                        <a className="wd-thread-link" href="#">Show this thread</a>
                    </div>
                </div>
            </div>
        </li>
    );
};
export default PostItem;