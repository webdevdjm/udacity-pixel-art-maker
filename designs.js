$(document).ready(function(){
  'use strict';

  // Variables
  var colorChoice = $('#colorPicker');
  var heightChoice = $('#inputHeight');
  var widthChoice = $('#inputWidth');
  var canvas = $('#pixelCanvas');
  var isDrawing = false;

  // Function to Make Grid
  function makeGrid(){
    canvas.find('tbody').remove();
    var rows = heightChoice.val();
    var columns = widthChoice.val();
    canvas.append('<tbody></tbody>')
    var canvasBody = canvas.find('tbody');
    
    for(var i = 0; i < rows; i++) {
      canvasBody.append('<tr></tr>').css('background-color', '#1C272F');
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

  // Click to make the grid
  $('input[type="submit"]').on('click', function(evt) {
    evt.preventDefault();
    // So once button is pushed we prevent the default behavior and make the grid!
    makeGrid();
  });

  draw();

});