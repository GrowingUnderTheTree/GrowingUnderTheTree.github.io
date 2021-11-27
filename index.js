function CopyFunction() {
    var releases = "https://github.com/GrowingUnderTheTree/lagscream-spigot-plugin/releases";
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(releases);
  
    /* Alert the copied text */
    alert("Copied the text: " + releases);
  }