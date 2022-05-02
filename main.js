var lib_req = new XMLHttpRequest();
lib_req.open("GET", "https://cdnjs.cloudflare.com/ajax/libs/jszip/3.9.1/jszip.min.js");
lib_req.onload = function() {
  eval(this.responseText);
  this.open("GET", "https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.0/FileSaver.min.js");
  this.onload = function() {
    eval(this.responseText);
    onCompleteLoad();
  }
  this.send();
}
lib_req.send();
function onCompleteLoad() {
  var html_zip = new JSZip();
  html_zip.file("index.html", `<!DOCTYPE html><html><head>${document.head.innerHTML}</head><body>${document.body.innerHTML}</body>`);
  html_zip.generateAsync().then((file) => {saveAs(file, "download_page.zip")});
}
