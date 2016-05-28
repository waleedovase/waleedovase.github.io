$(function(){ // on dom ready

$('#cy').cytoscape({
  layout: {
    name: 'breadthfirst',
    padding: 10
  },
  
  style: cytoscape.stylesheet()
    .selector('node')
      .css({
        'shape': 'data(faveShape)',
        'width': 'mapData(weight, 70, 90, 20, 60)',
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
      { data: { id: '1', name: 'STATUS: Alert All Crews, Action Stations!', weight: 80, faveColor: '#1b0100', faveShape: 'octagon' } },
      { data: { id: '2', name: 'STATUS: Unknown Hull Breach Sections 7, 10, 18, 25', weight: 80, faveColor: '#6FB1FC', faveShape: 'octagon' } },
      { data: { id: '3', name: 'STATUS: Casualty Numbers Coming In', weight: 80, faveColor: '#6FB1FC', faveShape: 'octagon' } },
      { data: { id: '4', name: 'STATUS: 14 Bridge Crew, 30 Engineering, 480 Others', weight: 80, faveColor: '#6FB1FC', faveShape: 'octagon' } },
      { data: { id: '5', name: 'Contact Captain Horatio', weight: 80, faveColor: '#e30915', faveShape: 'triangle' } },
      { data: { id: '6', name: 'Horatio here', weight: 80, faveColor: '#6FB1FC', faveShape: 'octagon' } },
      { data: { id: '7', name: 'This is the bridge, were going to need you to get up here', weight: 80, faveColor: '#e30915', faveShape: 'triangle' } },
      { data: { id: '8', name: 'Captain, weve lost Admiral Jenkins, youre the highest ranking officer now', weight: 80, faveColor: '#e30915', faveShape: 'triangle' } },
      { data: { id: '9', name: 'Im the highest ranking? Jeezuz, was everyone in the dining room?', weight: 80, faveColor: '#6FB1FC', faveShape: 'octagon' } },
      { data: { id: '10', name: 'Yes sir, you are.  Were going to need you to come up to the bridge.', weight: 80, faveColor: '#e30915', faveShape: 'triangle' } },
      { data: { id: '11', name: 'Is Dr. Cholodenko still alive?', weight: 80, faveColor: '#6FB1FC', faveShape: 'octagon' } },
      { data: { id: '12', name: 'From Xenobiology?', weight: 80, faveColor: '#e30915', faveShape: 'triangle' } },
      { data: { id: '13', name: 'I can...check that. But, the computers. Most everything is blown or offline! Cant seem to get a response from engineering.', weight: 80, faveColor: '#e30915', faveShape: 'triangle'} },
      { data: { id: '14', name: 'Yes, from xenobiology. We need to make sure shes still alive.', weight: 80, faveColor: '#6FB1FC', faveShape: 'octagon' } },
      { data: { id: '15', name: 'Ill stay on the bridge, you should head towards xenobiology.', weight: 80, faveColor: '#e30915', faveShape: 'triangle' } },
      { data: { id: '16', name: 'Where are you now?', weight: 80, faveColor: '#e30915', faveShape: 'triangle' } },
      { data: { id: '17', name: 'Im on CC Deck, I just exited my quarters. Gimme your input. Where should I go first?', weight: 80, faveColor: '#6FB1FC', faveShape: 'octagon' } }
      { data: { id: '18', name: 'Head towards xenobiology. But youre going to have to tell me what is so important in there!', weight: 80, faveColor: '#e30915', faveShape: 'triangle' } },
      { data: { id: '19', name: 'Whats so important in xenobiology?', weight: 80, faveColor: '#e30915', faveShape: 'triangle' } }
    ],
    edges: [
      { data: { source: '1', target: '2', faveColor: '#6FB1FC', strength: 95 } },
      { data: { source: '2', target: '3', faveColor: '#6FB1FC', strength: 95 } },
      { data: { source: '3', target: '4', faveColor: '#6FB1FC', strength: 95 } },
      { data: { source: '4', target: '5', faveColor: '#6FB1FC', strength: 95 } },
      { data: { source: '5', target: '6', faveColor: '#e30915', strength: 95 } },
      { data: { source: '6', target: '7', faveColor: '#6FB1FC', strength: 95 } },
      { data: { source: '6', target: '8', faveColor: '#6FB1FC', strength: 95 } },
      { data: { source: '8', target: '9', faveColor: '#e30915', strength: 95 } },
      { data: { source: '9', target: '10', faveColor: '#6FB1FC', strength: 95 } },
      { data: { source: '10', target: '11', faveColor: '#e30915', strength: 95 } },
      { data: { source: '11', target: '12', faveColor: '#6FB1FC', strength: 95 } },
      { data: { source: '11', target: '13', faveColor: '#e30915', strength: 95 } },
      { data: { source: '12', target: '14', faveColor: '#e30915', strength: 95 } },
      { data: { source: '14', target: '15', faveColor: '#6FB1FC', strength: 95 } },
      { data: { source: '14', target: '16', faveColor: '#6FB1FC', strength: 95 } },
      { data: { source: '16', target: '17', faveColor: '#e30915', strength: 95 } },
      { data: { source: '17', target: '18', faveColor: '#6FB1FC', strength: 95 } },
      { data: { source: '17', target: '19', faveColor: '#6FB1FC', strength: 95 } }
   
 
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
