var minYear = d3.min(birthData, d => d.year);
var maxYear = d3.max(birthData, d => d.year);
var width = 600;
var height = 600;
var barPadding = 10;
var numBars = 12;
var barWidth = width / numBars - barPadding;

d3.select("input")
    .property("min", minYear)
    .property("max", maxYear)
    .property("value", minYear);

d3.select("svg")
    .attr("width", width)
    .attr("height", height)
  .selectAll("rect")
  .data(birthData.filter(function(d) {
    return d.year === minYear;
  }))
  .enter()
  .append("rect")
    .attr("width", barWidth)
    .attr("height", function(d) {
      return d.births / 2.5e6 * height;
    })
    .attr("y", function(d) {
      return height - d.births / 2.5e6 * height;
    })
    .attr("x", function(d,i) {
      return (barWidth + barPadding) * i;
    })
    .attr("fill", "purple");
d3.select('svg')
  .append('text')
  .classed('title', true)
  .text('Bisths Data in ' + minYear)
  .attr('x', width / 2)
  .attr('y', 30)
  .style('text-anchor', 'middle')
  .style('font-size', '2em')

d3.select("input")
    .on("input", function() {
      var year = +d3.event.target.value;
      d3.selectAll("rect")
        .data(birthData.filter(function(d) {
          return d.year === year;
        }))
        .transition()
        .duration(750)
        .ease(d3.easeLinear)
        .delay((d, i) => i * 250)
        .on('start', function(d,i){
          if(i === 0){
            d3.select('.title')
              .text('Updating to ' + year + 'data')
          }
        })
        .on('end', function(d, i, nodes){
          if(i === nodes.length -1){
            d3.select('.title')
              .text('Bisths Data in ' + year)
          }
        })
        .on('interrupt', function(){
          console.log('Chart is interrupted!');
        })
          .attr("height", function(d) {
            return d.births / 2.5e6 * height;
          })
          .attr("y", function(d) {
            return height - d.births / 2.5e6 * height;
          });
    });
