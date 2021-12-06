(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";


    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    var planetsArray = planetsString.split('|')
     console.log(planetsArray);
    var planetsArrayBr = planetsArray.join('<br>')
    console.log (planetsArrayBr)
// imply to html easily
    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?



     * console.log(p
     * BONUS:
     * Create another string that would display your planets in an unordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    let planetsList = planetsArray.join('</li><li>')
    planetsList= "<ul><li>" + planetsList + "<li><ul>"
    console.log(planetsList)




})();