/* eslint-env jquery */

const NavigationSidebar = () => {
    return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-t"></i></a>
       
     <a id = "home" class="list-group-item" href="../HomeScreen/index.html">
       <i class="fa fa-home fa-1x" style="color: white"></i><span class="d-none d-xl-inline d-xxl-inline">Home</span></a>
       
     <a id = "explore" class="list-group-item" href="../ExploreScreen/index.html">
       <i class="fa fa-hashtag fa-1x" style="color: white"></i><span class="d-none d-xl-inline d-xxl-inline">Explore</span></a>
       
     <a id = "notifications" class="list-group-item" href="#">
       <i class="fa fa-bell fa-1x" style="color: white"></i><span class="d-none d-xl-inline d-xxl-inline">Notifications</span></a>
       
     <a id = "messages" class="list-group-item" href="#">
       <i class="fa fa-envelope fa-1x" style="color: white"></i><span class="d-none d-xl-inline d-xxl-inline">Messages</span></a>
       
     <a id = "bookmarks" class="list-group-item" href="#">
       <i class="fa fa-bookmark fa-1x" style="color: white"></i><span class="d-none d-xl-inline d-xxl-inline">Bookmarks</span></a>
       
     <a id = "lists" class="list-group-item" href="#">
       <i class="fa fa-list fa-1x" style="color: white"></i><span class="d-none d-xl-inline d-xxl-inline">Lists</span></a>
       
     <a id = "profile" class="list-group-item" href="#">
       <i class="fa fa-user fa-1x" style="color: white"></i><span class="d-none d-xl-inline d-xxl-inline">Profile</span></a>
       
     <a id = "more" class="list-group-item" href="#">
       <i class="fa fa-ellipsis-h fa-1x" style="color: white"></i><span class="d-none d-xl-inline d-xxl-inline">More</span></a>
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tuit</a>
   </div>
 `);
}

export default NavigationSidebar;