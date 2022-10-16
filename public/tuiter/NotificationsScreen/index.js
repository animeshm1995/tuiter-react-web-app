/* eslint-env jquery */

import NavigationSidebar from "../NavigationSidebar/index.js";

function exploreComponent() {
    $('#wd-explore').append(`
  <div class="row mt-2">
   <div class="col-2 col-md-2 col-lg-1 col-xl-2">
        ${NavigationSidebar('Notifications')}
   </div>
   <div class="col-10 col-lg-7 col-xl-6 text-white">
        <h2>To Be Implemented</h2>
   </div>
   <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 text-white">
        
   </div>
  </div>
   `);
}
$(exploreComponent);