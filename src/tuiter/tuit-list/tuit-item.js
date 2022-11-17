import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import {useDispatch} from "react-redux";

import TuitStats from "./tuit-stats";
import {deleteTuitThunk} from "../../services/tuits-thunks";
const TuitItem = (
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
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-1">
                    <img className="rounded-circle" height={48} width={48} src={`/images/${tuit.image}`}/>
                </div>
                <div className="col-11">
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteTuitHandler(tuit._id)}></i>
                    <div><span className="fw-bolder ms-2 me-1">{tuit.username}</span>
                        <i className="bi bi-patch-check-fill me-1  wd-blue-color me-1"></i>
                        <span className="wd-handle me-1">{tuit.handle}</span><i className="bi bi-dot"></i>
                        <span className="wd-handle">{tuit.time}</span>
                    </div>
                    <div className="ms-2">
                        {tuit.tuit}
                    </div>
                    <div className="row wd-post-actions mb-3 mt-2 ms-0">
                        <TuitStats key = {tuit._id} tuit = {tuit}/>
                    </div>
                </div>
            </div>
        </li>
    );
};
export default TuitItem;