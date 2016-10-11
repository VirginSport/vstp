import RoundCorner from './components/round-corner';
import withClass from './helper/with-class';
import onResize from './helper/on-resize';

// Apply the rounded corners to all vs-region--rounded
let rounded = [];

withClass('vs-region--rounded', el => {
  rounded.push(new RoundCorner(el))
});

let update = () => {
  rounded.forEach(round  => round.update());
};

// Re-calculate the size of the rounded elements whenever the window is resized
onResize(update);

// Check each 500ms if the containers change size and need to be updated
window.setInterval(update, 500);
