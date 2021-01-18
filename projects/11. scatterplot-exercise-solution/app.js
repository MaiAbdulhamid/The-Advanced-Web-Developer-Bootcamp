// write your code here!
let width   = 500,
    height  = 500,
    padding = 35;

var data    = regionData.filter(mustHaveKey);

let xMinMax = d3.extent(data, d => d.adultLiteracyRate),
    xScale  = d3.scaleLinear()
                .domain(xMinMax)
                .range([padding, width - padding]),
    xAxis   = d3.axisBottom(xScale)
                .tickSize(2 * padding - height)
                .tickSizeOuter(0);

let yMinMax = d3.extent(data, d => d.subscribersPer100),
    yScale  = d3.scaleLinear()
                .domain(yMinMax)
                .range([height - padding, padding]),
    yAxis   = d3.axisLeft(yScale)
                .tickSize(2 * padding - width)
                .tickSizeOuter(0);

let rMinMax = d3.extent(data, d => d.medianAge),
    rScale  = d3.scaleLinear()
                .domain(rMinMax)
                .range([5, 40]);

let cMinMax = d3.extent(data, d => d.urbanPopulationRate),
    cScale  = d3.scaleLinear()
                .domain(cMinMax)
                .range(['green', 'blue']);

let svg     = d3.select('svg')
                    .attr('width', width)
                    .attr('height', height)
function mustHaveKey(obj){
    let keys = [
        "subscribersPer100",
        "adultLiteracyRate",
        "urbanPopulationRate",
        "medianAge"
    ]
    for(let i = 0; i < keys.length; i++){
        if (obj[keys[i]] === null) return false
    }
    return true
}
//Axis
svg
    .append('g')
    .attr('transform', `translate(0, ${height - padding})`)
    .call(xAxis)
svg
    .append('g')
    .attr('transform', `translate(${padding}, 0)`)
    .call(yAxis)

//Circles
svg
    .selectAll('circle')
    .data(regionData)
    .enter()
    .append('circle')
        .attr('cx',   d => xScale(d.adultLiteracyRate))
        .attr('cy',   d => yScale(d.subscribersPer100))
        .attr('r',    d => rScale(d.medianAge))
        .attr('fill', d => cScale(d.urbanPopulationRate))
        .attr('stroke', '#fff')

//Labels
svg
    .append('text')
    .attr('x', width / 2)
    .attr('y', height - padding )
    .attr('dy', padding / 2 )
    .attr('text-anchor', 'middle')
    .text('Litracy Rate, age 15 and ubove')

svg
    .append('text')
    .attr('transform', 'rotate(-90)')
    .attr('x', -height / 2)
    .attr('y', 0 )
    .attr('dy', padding / 2 )
    .attr('text-anchor', 'middle')
    .text('Cellular Subscriptions vs. Literacy Rate');
//Title
svg
    .append('text')
    .attr('x', width / 2)
    .attr('dy', padding / 2 )
    .attr('text-anchor', 'middle')
    .attr('font-size', '1.5em')
    .text('Cellular Subscriptions vs. Literacy Rate');


