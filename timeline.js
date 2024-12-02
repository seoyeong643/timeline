document.addEventListener('DOMContentLoaded', () => {
    // Load the JSON data and render the timeline
    d3.json('data.json').then(data => {
        const timeline = d3.select('.timeline');

        // Create container elements for each timeline item
        const timelineItems = timeline
            .selectAll('.container')
            .data(data)
            .enter()
            .append('div')
            .attr('class', d => `container ${d.containerClass}`);

        // Add images to each container
        timelineItems
            .append('img')
            .attr('src', d => d.image);

        // Create text box for each timeline item
        const textBoxes = timelineItems
            .append('div')
            .attr('class', 'text-box');

        // Add company name
        textBoxes
            .append('h2')
            .text(d => d.year);

        // Add period
        // textBoxes
        //     .append('small')
        //     .text(d => d.event);

        // Add description
        textBoxes
            .append('p')
            .text(d => d.event);

        // Add arrow span
        textBoxes
            .append('span')
            .attr('class', d => `${d.containerClass}-arrow`);

        // Optional: Add transition effects
        timeline
            .selectAll('.container')
            .style('opacity', 0)
            .transition()
            .duration(1000)
            .style('opacity', 1);

    }).catch(error => {
        console.error('Error loading the timeline data:', error);
    });
});