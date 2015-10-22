/**
 * Create a form for collecting student attendance 
 * Responses are a grid with the choices Present, Absent, or Tardy
 *
 * @param {String} title - title of form
 * @param {String[]} classRoster - names of kids on the class roster
 * @param {String} [destinationId] - ID of the destination spreadsheet
 * @return {Object} formInfo
 * @return {String} id - form id
 * @return {String} publishedUrl - url to fill out form response
 * @return {String} editUrl - url to edit the form
 * @return {String} destinationId - ID of destination spreadsheet
 * @return {String} rosterGridId - ID of the student roster grid
 */


function createForm(title, classRoster, destinationId) {
  
  var form = FormApp.create(title).setAllowResponseEdits(true);
  var rosterGrid = form.addGridItem();
  rosterGrid.setRows(classRoster)
    .setTitle(title)
    .setColumns(['Present', 'Absent', 'Tardy']);

  form.setDestination(FormApp.DestinationType.SPREADSHEET, destinationId);
  
  Logger.log("Form destination error for: " + title);
  
  var publishedUrl = form.getPublishedUrl();

  var formInfo = {
    id: form.getId(),
    publishedUrl: form.getPublishedUrl(),
    editUrl: form.getEditUrl(),
    destinationId: destinationId,
    rosterGridId: rosterGrid.getId()
  };


  return formInfo;
}