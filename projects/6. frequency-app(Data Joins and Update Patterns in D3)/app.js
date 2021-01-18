// write your code here!
d3.select('#reset')
    .on('click', function(){
        d3.selectAll('.letter')
            .remove();
        d3.select('#count')
            .text('');
        d3.select('#phrase')
            .text('')
    });
    
d3.select('form')
    .on('submit', function(){
        d3.event.preventDefault()
        let input = d3.select('input')
        let text   = input.property('value')

        //Create enter selections and append some divs to page
        let letters = d3.select('#letters')
                            .selectAll('.letter')
                            .data(getFrequencies(text), d => d.char);
        letters
            .classed('new', false)
            .exit()
            .remove();
        letters
            .enter()
            .append('div')
                .classed('letter', true)
                .classed('new', true)
            .merge(letters)
                .style('width', '20px')
                .style('line-height', '20px')
                .style('margin-right', '5px')
                .style('height', d => d.count * 20 + 'px')
                .text(d => d.char);
        d3.select('#phrase')
            .text('Analysis of' + text);
        d3.select('#count')
            .text("(New Characters: " + letters.enter().nodes().length + ')')
        input.property('value', '')
    });
function getFrequencies(str){
    let sortedStr = str.split("").sort();
    let data      = []

    for(let i = 0; i < sortedStr.length; i++){
        let last = data[data.length -1]

        if (last && last.char === sortedStr[i]) last.count++
        else data.push({char: sortedStr[i], count: 1})
    }
    return data;
}
//getFrequencies("hi") -> [{ char:"h", count: 1}, { char:"i", count: 1 }]
