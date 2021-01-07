onload = function()
{
    // get canvas element
    var c = document.getElementById('canvas');
    c.width = 500;
    c.height = 300;

    // get webgl context
    var gl = c.getContext('webgl') || c.getContext('experimental-webgl');

    // initialize canvas with black
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
}