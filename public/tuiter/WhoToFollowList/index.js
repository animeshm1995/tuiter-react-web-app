import WhoToFollowListItem from "./WhoToFollowListItem.js";
import whos from "./who.js";
const WhoToFollowList = () => {
    return(`
                    <ul class="list-group">
                    <div class="list-group-item">Who To Follow</div>
                     ${
                        whos.map(who => {
                            return(WhoToFollowListItem(who));
                        }).join('')
                     }
                    </ul>
                
   `);
}
export default WhoToFollowList;