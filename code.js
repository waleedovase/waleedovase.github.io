$(function(){ // on dom ready

$('#cy').cytoscape({
  layout: {
    name: 'cose',
    padding: 10
  },
  
  style: cytoscape.stylesheet()
    .selector('node')
      .css({
        'shape': 'data(faveShape)',
        'width': 'mapData(weight, 40, 80, 20, 60)',
        'content': 'data(name)',
        'text-valign': 'center',
        'text-outline-width': 2,
        'text-outline-color': 'data(faveColor)',
        'background-color': 'data(faveColor)',
        'color': '#fff'
      })
    .selector(':selected')
      .css({
        'border-width': 3,
        'border-color': '#333'
      })
    .selector('edge')
      .css({
        'curve-style': 'bezier',
        'opacity': 0.666,
        'width': 'mapData(strength, 70, 100, 2, 6)',
        'target-arrow-shape': 'triangle',
        'source-arrow-shape': 'circle',
        'line-color': 'data(faveColor)',
        'source-arrow-color': 'data(faveColor)',
        'target-arrow-color': 'data(faveColor)'
      })
    .selector('edge.questionable')
      .css({
        'line-style': 'dotted',
        'target-arrow-shape': 'diamond'
      })
    .selector('.faded')
      .css({
        'opacity': 0.25,
        'text-opacity': 0
      }),
  
  elements: {
    nodes: [
      { data: { id: '1', name: 'STATUS: Alert All Crews, Action Stations!', weight: 80, faveColor: '#6FB1FC', faveShape: 'octagon' } },
      { data: { id: '2', name: 'STATUS: Unknown Hull Breach Sections 7, 10, 18, 25', weight: 80, faveColor: '#6FB1FC', faveShape: 'octagon' } },
      { data: { id: '3', name: 'STATUS: Casualty Numbers Coming In', weight: 80, faveColor: '#6FB1FC', faveShape: 'octagon' } },
      { data: { id: '4', name: 'STATUS: 14 Bridge Crew, 30 Engineering, 480 Others', weight: 80, faveColor: '#6FB1FC', faveShape: 'octagon' } }
    ],
    edges: [
      { data: { source: '1', target: '2', faveColor: '#6FB1FC', strength: 75 } },
      { data: { source: '2', target: '3', faveColor: '#6FB1FC', strength: 75 } },
      { data: { source: '3', target: '4', faveColor: '#6FB1FC', strength: 75 } }
     
      //{ data: { source: 'e', target: 'j', faveColor: '#EDA1ED', strength: 95 } },
      //{ data: { source: 'e', target: 'k', faveColor: '#EDA1ED', strength: 60 }, classes: 'questionable' },
      
      //{ data: { source: 'k', target: 'j', faveColor: '#86B342', strength: 100 } },
      //{ data: { source: 'k', target: 'e', faveColor: '#86B342', strength: 100 } },
      //{ data: { source: 'k', target: 'g', faveColor: '#86B342', strength: 100 } },
      
      //{ data: { source: 'g', target: 'j', faveColor: '#F5A45D', strength: 90 } }
    ]
  },
  
  ready: function(){
    window.cy = this;
    
    // giddy up
  }
});

}); // on dom ready
