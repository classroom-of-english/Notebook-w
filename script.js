document.addEventListener('DOMContentLoaded', function() {
  var notebookBtn = document.getElementById('notebook-btn');
  notebookBtn.addEventListener('click', function() {
    var notebookContent = document.createElement('div');
    notebookContent.id = 'notebook-content';
    notebookContent.innerHTML = '<h1>记事本</h1><textarea></textarea>';
    document.body.appendChild(notebookContent);
  });
});
