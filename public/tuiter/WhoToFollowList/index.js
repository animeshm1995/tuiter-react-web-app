import WhoToFollowListItem from "./WhoToFollowListItem.js";
import whos from "./who.js";
const WhoToFollowList = () => {
    return(`
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Who to follow</h5>
                <div class="card-text">
                    <ul class="list-group">
                     ${
                        whos.map(who => {
                            return(WhoToFollowListItem(who));
                        }).join('')
                     }
                    </ul>
                </div>
            </div>
        </div>
   `);
}
export default WhoToFollowList;