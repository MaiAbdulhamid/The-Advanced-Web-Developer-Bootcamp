var minYear = d3.min(birthData, d => d.year);
var maxYear = d3.max(birthData, d => d.year);
var width = 600;
var height = 600;


var continents = []
for(let i = 0; i < birthData.length; i++){
    let continent = birthData[i].continent
    if(continents.indexOf(continent) === -1){
        continents.push(continent)
    }
}
var colorScale = d3.scaleOrdinal()
                    .domain(continents)
                    .range(d3.schemeCategory10) //categorical colors

                    // select svg
d3.select('svg')
    .attr('width', width)
    .attr('height', height)
   .append('g')
    .attr('transform', "translate(" + width / 2 + "," + height / 2 + ")")
    .classed('chart', true);

d3.select('input')
  .property('min', minYear)
  .property('max', maxYear)
  .property('value', minYear)
  .on('input', function(){
    makeGraph(+d3.event.target.value)
  });

makeGraph(minYear);

function makeGraph(year){
  var yearData = birthData.filter(d => d.year === year);

  var arcs = d3.pie()
              .value(d => d.births)
              (yearData);

  var arc = d3.arc()
              .innerRadius(0)
              .outerRadius(width / 4)
              .padAngle(0.02)
              .cornerRadius(2)

  var update = d3.select('.chart')
                  .selectAll('.arc')
                  .data(arcs);

  update
    .exit()
    .remove();

  update
    .enter()
    .append('path')
      .classed('arc', true)
    .merge(update)
      .attr('fill', d => colorScale(d.data.continent))
      .attr('stroke', 'black')
      .attr('d', arc);
}