Fancy = {

  init: function() {
    console.log('oOo fancy');
    Fancy.hammertime();
  },

  zoomIn: function(el, i) {
    var currHeight = el.offsetHeight,
        currWidth = el.width,
        adjustment = 5;

    el.style.height = (currHeight + adjustment) + 'px';
    el.style.width = (currWidth + adjustment) + 'px';
  },

  zoomOut: function(el, i) {
    var currHeight = el.offsetHeight,
        currWidth = el.width,
        adjustment = 5;

    el.style.height = (currHeight - adjustment) + 'px';
    el.style.width = (currWidth - adjustment) + 'px';
  },

  hammertime: function() {
    var pinchables = document.querySelectorAll('[data-tricks="pinchy"]');
    Array.prototype.forEach.call(pinchables, function(el, i) {
      var pinchy = Hammer(el);

      var OG_h = el.offsetHeight,
          OG_w = el.width;

      // enable pinch
      pinchy.get('pinch').set({ enable: true });
      
      // pinch events
      pinchy
        .on('pinchin', function() {
          Fancy.zoomOut(el, i);
        })
        .on('pinchout', function() {
          Fancy.zoomIn(el, i);
        });
    });
  }
}

window.Fancy = Fancy;
