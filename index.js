const tf = require(`@tensorflow/tfjs`);
function CopyFunction() {
    var releases = "https://github.com/GrowingUnderTheTree/lagscream-spigot-plugin/releases";
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(releases);
  
    /* Alert the copied text */
    alert("Copied the text: " + releases);
  }

function Openvisualizer() {
  tfvis.visor().surface({name: 'Very cool Surface', tab: 'Very cool tab', styles: {
    height: 500
}})
}

function morestuffs() {
  const data = [
    { index: 0, value: 50 },
    { index: 1, value: 100 },
    { index: 2, value: 150 },
  ];
  
  // Get a surface
  const surface = tfvis.visor().surface({ name: 'Barchart', tab: 'Charts' });
  
  // Render a barchart on that surface
  tfvis.render.barchart(surface, data, {});
}