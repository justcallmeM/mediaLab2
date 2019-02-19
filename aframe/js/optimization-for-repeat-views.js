(function() {
// Optimization for Repeat Views
if( sessionStorage.criticalFoftFontsLoaded ) {
    console.log("fonts are already loaded");
    return;
}
var guiWebFont = new FontFaceObserver('Fira Sans');
Promise.all([guiWebFont.load()]).then(function () {
    console.log("fonts are loaded");
    // Optimization for Repeat Views
    sessionStorage.criticalFoftFontsLoaded = true;
});
})();