$(document).ready(function(){
  'use strict';

  // Constant Variables
  const COLOR_CHOICE = $('#colorPicker');
  const HEIGHT_CHOICE = $('#inputHeight');
  const WIDTH_CHOICE = $('#inputWidth');
  const PIXEL_CANVAS = $('#pixelCanvas');
  const UDACITY_GRAY = '#1C272F';

  // Function to Make Grid
  function makeGrid(){
    PIXEL_CANVAS.find('tbody').remove();
    var rows = HEIGHT_CHOICE.val();
    var columns = WIDTH_CHOICE.val();
    PIXEL_CANVAS.append('<tbody></tbody>')
    var canvasBody = PIXEL_CANVAS.find('tbody');
    
    for(var i = 0; i < rows; i++) {
      canvasBody.append('<tr></tr>').css('background-color', UDACITY_GRAY);
      for(var j = 0; j < columns; j++){
        $('tr:last').append('<td></td>');
        $('td').attr('class', 'cells');
      }
    }
  }
  // End of grid maker

  // Draw away
  function draw(){
    var isDrawing = false;
    // NOTE to self: needs refactoring - var color = $('#colorPicker').val(); used 2x
    $('#pixelCanvas').on('mousedown', 'td', function(evt) {
      evt.preventDefault();
      var color = $('#colorPicker').val();
      isDrawing = true;
      if (isDrawing) {
        $(evt.target).css('background-color', color);
      };
    });
    $('#pixelCanvas').on('mouseenter', 'td', function(evt) {
      if (isDrawing) {
        var color = $('#colorPicker').val();
        $(evt.target).css('background-color', color);
      }
    });
    $('#pixelCanvas').on('mouseup', 'td', function(evt) {
      isDrawing = false;
    });
    $('#pixelCanvas').on('mouseleave', function(evt) {
      isDrawing = false;
    });
  }

  // Click to make the grid - we are using submit on the form to allow for HTML5 input validation on width and height
  $('form').on('submit', function(evt) {
    evt.preventDefault();
    // So once button is pushed we prevent the default behavior and make the grid!
    makeGrid();
  });

  draw();

});