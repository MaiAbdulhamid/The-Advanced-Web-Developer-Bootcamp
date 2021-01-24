let width      = 600,
    height     = 600,
    padding    = 50,
    barPadding = 1,
    initialBinCount = 16;
//filter Data with mustHaveKey function
let data = regionData.filter(mustHaveKey)

//Update histogram using range input
d3.select('input')
   .property('value', initialBinCount)
  .on('input', function(){
    updateRects(+d3.event.target.value);
  });

// select svg
let svg         = d3.select('svg')
                    .attr('width', width)
                    .attr('height', height);
//Append Axis
svg
  .append('g')
    .attr('transform', `translate(0, ${height - padding})`)
    .classed('x-axis', true);
svg
  .append('g')
    .attr('transform', `translate(${padding}, 0)`)
    .classed('y-axis', true);

//Labels
svg
  .append('text')
  .attr('x', width / 2)
  .attr('y', height - padding )
  .attr('dy', padding / 2 )
  .attr('text-anchor', 'middle')
  .text('Median Age')

svg
  .append('text')
  .attr('transform', 'rotate(-90)')
  .attr('x', -height / 2)
  .attr('y', 0 )
  .attr('dy', padding / 2 )
  .attr('text-anchor', 'middle')
  .text('Frequency');
//Title
svg
  .append('text')
  .attr('x', width / 2)
  .attr('dy', padding / 2 )
  .attr('text-anchor', 'middle')
  .attr('font-size', '1.5em')
  .text('Histogram Graph');

updateRects(initialBinCount);

//Filter obj To not have keys with nul values
function mustHaveKey(obj){
  let keys = [
    "urbanPopulationRate",
    "extremePovertyRate",
    "subscribersPer100",
    "adultLiteracyRate",
    "medianAge"
  ]
  for ( let i = 0; i < keys.length; i++){
    if (obj[keys[i]] === null) return false
  }
  return true
}

function updateRects(val){
  //xScale
  let xScale     = d3.scaleLinear()
                     .domain(d3.extent(data, d => d.medianAge))
                     .rangeRound([padding, width - padding]);

  //Histogram scale
  let histogram   = d3.histogram()
                      .domain(xScale.domain())
                      .thresholds(xScale.ticks(val))
                      .value(d => d.medianAge);

  let bins       = histogram(data);

  //yScale using bins
  let yScale     = d3.scaleLinear()
                     .domain(d3.extent(bins, d => d.length))
                     .range([height - padding, padding]);
  //Update Axis
  d3.select('.y-axis')
    .call(d3.axisLeft(yScale));
  d3.select('.x-axis')
      .call(d3.axisBottom(xScale).ticks(val))
    .selectAll("text")
      .attr("y", -3)
      .attr("x", 10)
      .attr("transform", "rotate(90)")
      .style("text-anchor", "start");
  
  let rect = svg
                .selectAll('rect')
                .data(bins);
  rect
      .exit()
      .remove();
  
  rect
    .enter()
      .append('rect')
    .merge(rect)
        .attr('x',      d => xScale(d.x0))
        .attr('y',      d => yScale(d.length))
        .attr('height', d => height - yScale(d.length) - padding )
        .attr('width',  d => xScale(d.x1) - xScale(d.x0) - barPadding)
        .attr('fill', 'blue');

  //Select p tag 
  d3.select('.bins-count')
    .text(`Bins Count is ${bins.length}` )
}