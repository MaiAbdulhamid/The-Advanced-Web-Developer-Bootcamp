let minYear    = d3.min(birthData, d => d.year),
    maxYear    = d3.max(birthData, d => d.year);

let width      = 600,
    height     = 600;

let barNumbers = 12,
    barPadding = 10,
    barWidth   = (width / barNumbers) - barPadding ;
let maxBirths  = d3.max(birthData, d => d.births);
let yScale     = d3.scaleLinear()
                     .domain([0, maxBirths])
                     .range([height, 0])
d3.select('input')
    .property('min', minYear)
    .property('max', maxYear)
    .property('value', minYear);

d3.select('svg')
    .attr('width', width)
    .attr('height', height)
  .selectAll('rect')
  .data(birthData.filter(d => d.year === minYear))
  .enter()
  .append('rect')
    .attr('width', barWidth)
    .attr('height', d => height - yScale(d.births))
    .attr('y', d => yScale(d.births))
    .attr('x', (d, i) => ( barPadding + barWidth ) * i );

d3.select('input')
    .on('input', function(){
        let year = +d3.event.target.value
        d3.selectAll('rect')
            .data(birthData.filter(d => d.year === year))
            .attr('height', d => height - yScale(d.births))
            .attr('y', d => yScale(d.births))
    })