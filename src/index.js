// get input values and assign them to players
// add play against AI
// make the AI make any legal move
// implement minimax algorithm

import "./index.html";
import "./styles/index.scss";
import controller from "./components/controller";
import view from "./components/view";

controller.stateListeners.push(view.gameStateChangeListener);
