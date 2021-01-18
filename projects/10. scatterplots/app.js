//y axis represents the lifeExpectancy
//x axis represents the birth per capita(person) (births/ population) 

let width   = 500,
    height  = 500;
let padding = 35;


let yMinMax = d3.extent(birthData2011, d => d.lifeExpectancy),
    xMinMax = d3.extent(birthData2011, d => d.births / d.population);

let yScale  = d3.scaleLinear()
                .domain(yMinMax)
                .range([height - padding, padding]),
    yAxis   = d3.axisLeft(yScale)
                    .tickSize(2 * padding - width)
                    .tickSizeOuter(0),
    
    xScale  = d3.scaleLinear()
                .domain(xMinMax)
                .range([padding, width - padding]),
    xAxis   = d3.axisBottom(xScale)
                    .tickSize(2 * padding - height)
                    .tickSizeOuter(0);

let rangeColor = d3.extent(birthData2011, d => d.population / d.area),
    colorScale = d3.scaleLinear()
                    .domain(rangeColor)
                    .range(['lightgreen', 'black']);

let birthRange = d3.extent(birthData2011, d => d.births),
    birthScale = d3.scaleLinear()
                    .domain(birthRange)
                    .range([2, 40]);
//X Axis
d3.select('svg')
    .append('g')
    .attr('transform', `translate(0, ${height - padding})`)
    .call(xAxis);
//Y Axis
d3.select('svg')
    .append('g')
    .attr('transform', `translate(${padding}, 0)`)
    .call(yAxis);

//Circles
d3.select('svg')
    .attr('width', width)
    .attr('height', height)
  .selectAll('circle')
  .data(birthData2011)
  .enter()
  .append('circle')
    .attr('cy', d=> yScale(d.lifeExpectancy) )
    .attr('cx', d => xScale(d.births / d.population) )
    .attr('fill', d => colorScale(d.population / d.area))
    .attr('r', d => birthScale(d.births));
//Title and label
d3.select('svg')
    .append('text')
    .attr('x', width / 2)
    .attr('y', padding)
    .attr('font-size', '1.5em')
    .style('text-anchor', 'middle')
    .text('Title');

d3.select('svg')
    .append('text')
    .attr('x', width / 2)
    .attr('y', height - padding)
    .attr('dy', '1.5em')
    .style('text-anchor', 'middle')
    .text('Births per capita')

d3.select('svg')
    .append('text')
    .attr('transform', 'rotate(-90)')
    .attr('x', -(height / 2))
    .attr('y', padding)
    .attr('dy', '-1.5em')
    .style('text-anchor', 'middle')
    .text('Life Expectancy')