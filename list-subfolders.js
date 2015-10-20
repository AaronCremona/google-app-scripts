/**
 * Lists all subfolder names, IDs, editors, and viewers 
 *
 * @param {String} folderID - ID of the parent folder
 * @return {Array} 
 */

function listSubFolders(folderId) {
  var folder = DriveApp.getFolderById(folderId);
  var folders = folder.getFolders();
  var folderInfo = [["Folder Name", "Folder ID", "Editors", "Viewers"]];
  Logger.log(folderInfo);
  var folderCounter = 1;

  while (folders.hasNext()) {
    var folder = folders.next();
    var name = folder.getName();
    var id = folder.getId();
    
    var editors = folder.getEditors();
    var editorEmails = "";
    for (var i = 0; i < editors.length; i++) {
      if (i > 0) {
        editorEmails += ", "
      }
      editorEmails += editors[i].getEmail();
    }
    
    Logger.log(editorEmails);

      
    var viewers = folder.getViewers();
    var viewerEmails = "";
    for (var j = 0; j < viewers.length; j++) {
      if (j > 0) {
        viewerEmails += ", "
      }
      viewerEmails += viewers[j].getEmail();
    }  
    
     Logger.log(viewerEmails);


   folderInfo.push([name, id, editorEmails, viewerEmails]);
  }

  return folderInfo;
}