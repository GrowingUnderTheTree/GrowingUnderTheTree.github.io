{const tf = require(`@tensorflow/tfjs`);
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
}

function what() {
  const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
}