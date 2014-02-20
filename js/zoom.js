(function() {

          var $p = $('#zoom').panzoom({
            $zoomIn: $(".zoom-in"),
            $zoomOut: $(".zoom-out"),
            $zoomRange: $(".zoom-range"),
            $reset: $(".reset"),
            startTransform: 'scale(1.0)',
            increment: 0.1,
            minScale: 1,
            contain: 'invert'
          });

          $('#zoom-parent').on('click', function(e){
            e.preventDefault();
            $p.panzoom('zoom', {
              focal: e
            });
          });

        })();