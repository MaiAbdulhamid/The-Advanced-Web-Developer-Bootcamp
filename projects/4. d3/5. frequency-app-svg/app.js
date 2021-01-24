let width = 600,
    height = 300,
    barPadding = 10,
    svg = d3.select('svg')
            .attr('width', width)
            .attr('height', height);

d3.select("#reset")
    .on("click", function() {
      d3.selectAll(".letter")
        .remove();

      d3.select("#phrase")
          .text("");

      d3.select("#count")
          .text("");
    });

d3.select("form")
    .on("submit", function() {
      d3.event.preventDefault();
      let input    = d3.select("input");
      let text     = input.property("value");
      let data     = getFrequencies(text)
      let barWidth = (width / data.length) - barPadding
      let letters  = svg
                      .selectAll(".letter")
                      .data(data, function(d) {
                        return d.character;
                      });
      letters
          .classed("new", false)
        .exit()
        .remove();

      //To make text inside
      let lettersGroup = letters                
                          .enter()
                          .append("g")
                            .classed("letter", true)
                            .classed("new", true);

      lettersGroup.append('rect');
      lettersGroup.append('text');
      //To The rect tags
      lettersGroup
          .merge(letters)
          .select('rect')            
            .attr("width", barWidth)
            .attr("height", d => d.count * 20)
            .attr("y", d => height - d.count * 20) //height - barHeight
            .attr("x", (d, i) => (barWidth + barPadding) * i);
      //To The text tags
      lettersGroup
          .merge(letters)
          .select('text')
            .attr('text-anchor', 'middle')
            .attr('y', d => height - d.count * 20 - 10 )
            .attr('x', (d, i) => (barWidth + barPadding) * i + barWidth / 2)
            .text(d => d.character)

      d3.select("#phrase")
          .text("Analysis of: " + text);

      d3.select("#count")
          .text("(New characters: " + letters.enter().nodes().length + ")");

      input.property("value", "");
    });

function getFrequencies(str) {
  var sorted = str.split("").sort();
  var data = [];
  for (var i = 0; i < sorted.length; i++) {
    var last = data[data.length - 1];
    if (last && last.character === sorted[i]) last.count++;
    else data.push({ character: sorted[i], count: 1 });
  }
  return data;
}