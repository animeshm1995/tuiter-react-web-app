import PostSummaryList from "../PostSummaryList";


const ExploreComponent = () => {
    return(`
            <div class="row">
                <div class="form-group has-search mt-2 mb-2">
                    <span class="fa fa-search form-control-feedback"></span>
                    <input type="text" class="wd-form-control border-0 wd-background-color form-control-lg" placeholder="Search Tuiter">
                    <span><a href="#">
                            <i class="fa fa-gear fa-2x wd-settings-logo pt-2"></i>
                        </a>
                     </span>
                </div>
            </div>

            <ul class="nav mb-2 nav-tabs mb-2">
                <li class="nav-item">
                    <a class="nav-link active" href="#">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item d-lg-block d-md-none d-sm-none d-none">
                    <a class="nav-link" href="#">Sports</a>
                </li>
                <li class="nav-item d-xl-block d-lg-none d-md-none d-sm-none d-none">
                    <a class="nav-link" href="#">Entertainment</a>
                </li>
            </ul>
            
            <div class="wd-container">
                <img class="wd-header-image" src="../../res/images/space-x-starship.png">
                <p class="bottom-left">
                    <span class="wd-image-span-tag">SpaceX's Starship</span>
                </p>
            </div>
                
            ${PostSummaryList()}
    `);
}
export default ExploreComponent;
