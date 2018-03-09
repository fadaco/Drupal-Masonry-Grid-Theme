//The Masonry Grid for the front page
let masonry = document.getElementById('top-main-content');

let masonryGrid =new Masonry(masonry, {
	itemSelector: '.grid-item',
	columnWidth: 10,
    percentPosition: true,
    gutter: 10
});

for (var i = 0; i < 100; i++ ) {
	console.log('hello')[i];
}




// let sideBar = document.getElementById('sidebar');

// sideBar..mCustomScrollbar({
//          theme: "minimal"
//  });

// // let sideBarCollapse = document.getElementById('sidebarCollapse');


// $(document).ready(function () {

//     $("#sidebar").mCustomScrollbar({
//          theme: "minimal"
//     });

//     $('#sidebarCollapse').on('click', function () {
//         // open or close navbar
//         $('#sidebar').toggleClass('active');
//         // close dropdowns
//         $('.collapse.in').toggleClass('in');
//         // and also adjust aria-expanded attributes we use for the open/closed arrows
//         // in our CSS
//         $('a[aria-expanded=true]').attr('aria-expanded', 'false');
//     });

// });

