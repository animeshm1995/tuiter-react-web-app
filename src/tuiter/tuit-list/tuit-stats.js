import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';
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
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    return(
        <>
            <div className="col-3">
                <a href="#" className="wd-action">
                    <i className="bi bi-chat me-2"></i>{tuit.replies}</a>
            </div>
            <div className="col-3">
                <a href="#" className="wd-action"><i className="bi bi-arrow-repeat me-2"></i>{tuit.retuits}
                </a>
            </div>
            <div className="col-3">
                <a href="#" className="wd-action">
                    {
                        tuit.liked && <i className="bi bi-heart-fill me-2 text-danger"></i>
                    }
                    {
                        !tuit.liked && <i className="bi bi-heart me-2"></i>
                    }
                    {tuit.likes}
                </a>
            </div>
            <div className="col-3">
                <a href="#" className="wd-action"><i className="bi bi-share me-2"></i></a>
            </div>
        </>
    );
};
export default TuitStats;