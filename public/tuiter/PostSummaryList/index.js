import posts from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
    return(`
            <div class="mt-1">
                <ul class="list-group">
                    ${
                        posts.map(post => {
                        return(PostSummaryItem(post));
                        }).join('')
                    }
                </ul>
            </div>
   `);
}
export default PostSummaryList;