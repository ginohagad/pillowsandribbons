angular.module('factories', [])

.factory('RibbonService', function(){

  var ribbons = {};

  ribbons.products = [
    { name: 'ribbons', img: 'rib000', color: 'red, blue'},
    { name: 'ribbons', img: 'rib001', color: 'purple, white'},
    { name: 'ribbons', img: 'rib002', color: 'pink, white'},
    { name: 'ribbons', img: 'rib003', color: 'yellow, green'},
    { name: 'ribbons', img: 'rib004', color: 'pink, purple, white'},
    { name: 'ribbons', img: 'rib005', color: 'purple, white'},
    { name: 'ribbons', img: 'rib006', color: 'green, purple'},
    { name: 'ribbons', img: 'rib007', color: 'pink'},
    { name: 'ribbons', img: 'rib008', color: 'pink, yellow'},
    { name: 'ribbons', img: 'rib009', color: 'pink, white'},
    { name: 'ribbons', img: 'rib010', color: 'green'},
    { name: 'ribbons', img: 'rib011', color: 'red, white'},
    { name: 'ribbons', img: 'rib012', color: 'red'},
    { name: 'ribbons', img: 'rib013', color: 'pink, purple'},
    { name: 'ribbons', img: 'rib014', color: 'purple, white'},
    { name: 'ribbons', img: 'rib015', color: 'black, white'},
    { name: 'ribbons', img: 'rib016', color: 'red, white'},
    { name: 'ribbons', img: 'rib017', color: 'red, white'},
    { name: 'ribbons', img: 'rib018', color: 'pink, white'},
    { name: 'ribbons', img: 'rib019', color: 'green, white'},
    { name: 'ribbons', img: 'rib020', color: 'blue, white'},
    { name: 'ribbons', img: 'rib021', color: 'pink, white'},
    { name: 'ribbons', img: 'rib022', color: 'red, white'},
    { name: 'ribbons', img: 'rib023', color: 'red'},
    { name: 'ribbons', img: 'rib024', color: 'red, white'},
    { name: 'ribbons', img: 'rib025', color: 'green, white'},
    { name: 'ribbons', img: 'rib026', color: 'pink, white'},
    { name: 'ribbons', img: 'rib027', color: 'purple, white'},
    { name: 'ribbons', img: 'rib028', color: 'yellow, blue'},
    { name: 'ribbons', img: 'rib029', color: 'white, black'},
    { name: 'ribbons', img: 'rib030', color: 'yellow, blue'},
    { name: 'ribbons', img: 'rib031', color: 'red, orange, yellow'},
    { name: 'ribbons', img: 'rib032', color: 'purple, white'},
    { name: 'ribbons', img: 'rib033', color: 'purple, white'},
    { name: 'ribbons', img: 'rib034', color: 'pink, white'},
    { name: 'ribbons', img: 'rib035', color: 'pink, white'},
    { name: 'ribbons', img: 'rib036', color: 'pink, white'},
    { name: 'ribbons', img: 'rib037', color: 'pink, white'},
    { name: 'ribbons', img: 'rib038', color: 'red, yellow, blue, green, white, black'},
    { name: 'ribbons', img: 'rib039', color: 'pink'},
    { name: 'ribbons', img: 'rib040', color: 'pink, white'},
    { name: 'ribbons', img: 'rib041', color: 'pink, blue, brown'},
  ];

  return ribbons;

})


.factory('PillowService', function(){

  var pillows = {};

  pillows.products = [
    { name: 'pillows', img: 'pil1', color: 'white'},
    { name: 'pillows', img: 'pil2', color: 'white'},
    { name: 'pillows', img: 'pil3', color: 'white, grey'},
    { name: 'pillows', img: 'pil4', color: 'pink, blue, white'},
    { name: 'pillows', img: 'pil5', color: 'red, green, blue, yellow'},
    { name: 'pillows', img: 'pil6', color: 'red, green, blue, yellow, orange, purple'},
    { name: 'pillows', img: 'pil7', color: 'purple'},
  ];

  return pillows;

});
