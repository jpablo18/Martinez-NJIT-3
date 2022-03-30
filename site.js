/* SITE.JS: THIS FILE CONTAINS THE METHODS/FUNCTIONS AND VARIABLES CONTROLLING YOUR SITE
//
*/

/* NOTE: MOVIES.JSON CONTAINS A LIST OF MOVIES AND ACCOMPANYING METADATA
//
//    They are in the following format:
//    title (String): the name of the movie
//    iscore (Number): the IMDB score
//    rating (String): the movie's MPAA rating
//    released (Array): the release date. Note that the order of the array is:  YYYY, MM, DD
//    country (String): the country of production
//    posters (Array): an array of String values with the URL to movie posters (in your img/ directory)
//    imdb (String): the URL to the corresponding IMDB website
//    website (String): the URL to the corresponding official website
//    likes (Number): a fictitious number of user likes
//    dislikes (Number): a fictitious number of user dislikes
//    posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
//
// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THE JSON FILE LIST
*/


const vue_app = Vue.createApp({
      // This automatically imports your movies.json file and puts it into
      //   the variable: movies
      created () {
            fetch('movies.json').then(response => response.json()).then(json => {
                  this.movies = json
            })
      },
      data() {
        return {
            // This holds your movies.json data.
            movies:[],
            /* ADD ADDITIONAL VARIABLES FOR STEP 3 HERE */
             title:"IMDB + Juan's Top 8 Movies",
             owner:"Juan Martinez",
             github:"https://github.com/jpablo18/Martinez-P3.git"
      }
    },
      methods: {
            /* ADD FUNCTIONS/METHODS FOR STEP 7 HERE */
          getMonthText(dateArray){
            var month = dateArray[1];
            var day = dateArray[2];
            var year = dateArray[0];

            switch (month) {
  case 1:
    month = "janaurary";
    break;
  case 2:
    day = "Febrabury";
    break;
  case 3:
     day = "March";
    break;
  case 4:
    day = "april";
    break;
  case 5:
    day = "may";
    break;
  case 6:
    day = "june";
    break;
  case 7:
    day = "july";
    break;
    case 8:
      day = "august";
      break;
      case 9:
        day = "september";
        break;
        case 10:
          day = "october";
          break;
          case 11:
            day = "november";
            break;
            case 12:
              day = "december";
              break;
            }
            return month + " " + day + ", " + year;
  },
   posterClick(index){
    return this.movies[index].posterindex++;
   }
 }

})

vue_app.mount("#vue_app")
