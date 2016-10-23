

$(function(){
  var adBanners = [
    "01.jpg",
    "04.jpg",
    "05.jpg",
    "06.jpg"
  ];
  var bannerLinks = [
    "#",
    "#",
    "#",
    "#"
  ];
  
  
  var imgPrefix   = "./ads/";
  var randNum     = Math.floor(Math.random() * (8 - 0 + 1)) + 0; /* http://stackoverflow.com/a/1527834/477958 */
  var topAdBanner = $('#topad > a > img');
  
  var newBannerImg  = imgPrefix + adBanners[randNum];
  var newBannerLink = bannerLinks[randNum];
  
  // update new img src and link HREF value
  $(topAdBanner).attr('src',newBannerImg);
  $('#topad > a').attr('href',newBannerLink);
});
