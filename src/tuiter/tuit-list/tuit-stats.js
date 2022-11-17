import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import {updateTuitThunk} from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";
const TuitStats = (
    {
        tuit = {
            "_id": 234,
            "topic": "Space",
            "userName": "SpaceX",
            "handle": "@spacex",
            "time": "2h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "image": "spacex.png",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "dislikes": 123,
            "disliked": false,
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    const dispatch = useDispatch();
    return(
        <>
            <div className="col-2">
                <a href="#" className="wd-action">
                    <i className="bi bi-chat me-2"></i>{tuit.replies}</a>
            </div>
            <div className="col-2">
                <a href="#" className="wd-action"><i className="bi bi-arrow-repeat me-2"></i>{tuit.retuits}
                </a>
            </div>
            <div className="col-2">
                <a href="#" className="wd-action">
                    { tuit.liked && <i className="bi bi-heart-fill me-2 text-danger"
                                                     onClick={() => dispatch(updateTuitThunk({
                                                         ...tuit,
                                                         liked: false,
                                                         likes: tuit.likes - 1}))}/> }
                    { !tuit.liked && <i className="bi bi-heart me-2"
                                                      onClick={() => dispatch(updateTuitThunk({
                                                          ...tuit,
                                                          liked: true,
                                                          likes: tuit.likes + 1}))}/> }
                    {tuit.likes}
                </a>
            </div>
            <div className="col-2">
                <a href="#" className="wd-action">
                    { tuit.disliked && <i className="bi bi-hand-thumbs-down-fill me-2 text-danger"
                                       onClick={() => dispatch(updateTuitThunk({
                                           ...tuit,
                                           disliked: false,
                                           dislikes: tuit.dislikes - 1}))}/> }
                    { !tuit.disliked && <i className="bi bi-hand-thumbs-down me-2"
                                        onClick={() => dispatch(updateTuitThunk({
                                            ...tuit,
                                            disliked: true,
                                            dislikes: tuit.dislikes + 1}))}/> }
                    {tuit.dislikes}
                </a>
            </div>
            <div className="col-2">
                <a href="#" className="wd-action"><i className="bi bi-share me-2"></i></a>
            </div>
        </>
    );
};
export default TuitStats;