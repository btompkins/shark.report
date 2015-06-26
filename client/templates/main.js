Meteor.subscribe('reports');

Template.main.helpers({
  stations: function () {
    return currentStations();
  },
  currentLine: function() {
    return currentLine();
  },
  noReports: function() {
    return numReports(currentLine()) === 0;
  },
  numReports: function() {
    return numReports(currentLine());
  },
  lineColor: function() {
    var line = currentLine();
    var lineColor = 'blue-line';

    return lineColor;
  }
});

Template.main.rendered = function() {
  // Enable modal triggering with + button
  $('.modal-trigger').leanModal();

  setInterval(function(){
    var currentTime = moment().format('hh:mm:ss');
    $('#current-time').text(currentTime);
  }, 1000);
};
