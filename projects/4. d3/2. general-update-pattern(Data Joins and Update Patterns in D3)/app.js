var quotes = [
  {
    quote: "I see dead people.",
    movie: "The Sixth Sense",
    year: 1999,
    rating: "PG-13"
  }, {
    quote: "May the force be with you.",
    movie: "Star Wars: Episode IV - A New Hope",
    year: 1977,
    rating: "PG"
  }, {
    quote: "You've got to ask yourself one question: 'Do I feel lucky?' Well, do ya, punk?",
    movie: "Dirty Harry",
    year: 1971,
    rating: "R"
  }, {
    quote: "You had me at 'hello.'",
    movie: "Jerry Maguire",
    year: 1996,
    rating: "R"
  }, {
    quote: "Just keep swimming. Just keep swimming. Swimming, swimming, swiming.",
    movie: "Finding Nemo",
    year: 2003,
    rating: "G"
  }
];

var newQuotes = [
  {
    quote: "Houston, we have a problem.",
    movie: "Apollo 13",
    year: 1995,
    rating: "PG-13"
  }, {
    quote: "Gentlemen, you can't fight in here! This is the war room!",
    movie: "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
    rating: "PG"
  }
];

var colors = {
  "G": "#3cff00",
  "PG": "#f9ff00",
  "PG-13": "#ff9000",
  "R": "#ff0000"
};
var add = d3.select('#add')
add.on('click', function(){
  quotes = quotes.concat(newQuotes)
  addDataToLi(d3.select("#quotes"))
  add.remove()
})
d3.select("#quotes")
    .style("list-style", "none")
    addDataToLi(d3.select("#quotes"))

var removeBtn = d3.select("#remove");

removeBtn.on('click', function() {
  var nonRQuotes = quotes.filter(function(movie) {
    return movie.rating !== 'R';
  });
  
  d3.selectAll("li")
    .data(nonRQuotes, function(d) {
      return d.quote;
    })
    .exit()
    .remove();

  removeBtn.remove();
});
function addDataToLi(element){
  let listItems = element
            .selectAll("li")
            .data(quotes);
listItems.enter()
  .append("li")
    .text(d => '"' + d.quote + '" - ' + d.movie + ' (' + d.year + ')')
    .style("margin", "20px")
    .style("padding", "20px")
    .style("font-size", d => d.quote.length < 25 ? "2em" : "1em")
    .style("background-color", d => colors[d.rating])
    .style("border-radius", "8px")
  .merge(listItems)
    .style('color', '#f0f0f0');
}