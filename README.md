# Sketchi - A simple Etch-a-Sketch web app

I built this Sktechi while following The Odin Project, an online web development tutorial.

Sketchi allows a user to define a grid of between one and 99 cells.  The cells become increasingly darker as the mouse is passed over them, allowing a user to draw lines and shapes in the grid.

The user has a choice between a grey-scale and rainbow etch-a-sketch.  The rainbow version will pick a color at random to assign each cell when the mouse passes over it.  This color can then be made darker with subsequent passes.

The project can be found here: galenczk.github.io/Odin_etchASketch
Give it a try!

## Things I Learned

This was the first project that I completed that involved iteracting with the DOM via JavaScript.  I also learned how to take in user inputs, validate them, and use them in a rendering function.  

I was able to implement the rainbow version of the board by assigning a random color to the background of cells on mouse-over.  These, and the grey-scale backgrounds are darkened by 10% on each subsequent mouse-over, up to a maximum of 100%.
