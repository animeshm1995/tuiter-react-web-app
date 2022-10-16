const PostSummaryItem = (post) => {
    return(`
            <div class="flex-container-stretch">
                <div class="wd-grid-col-full-page mt-1 mb-2 ms-0 me-2">
                    <img class="wd-image-right" src="${post.image}">
                    <span class="wd-topic">${post.topic}</span><br/>
                    <span class="wd-username">${post.userName}</span>
                    <img class="wd-verified-icon" src="../../res/images/verified-white.png">
                    <span class="wd-topic-posted-date"> - ${post.time}</span>
                    <p class="wd-title">${post.title}</p>
                </div>
            </div>
   `);
}
export default PostSummaryItem;