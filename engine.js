function loop(){
  //Modifying sectors’ effectiveness according to current Social Mood
  calculateEffectiveness();
  //Selecting Random Event that instantly influences the game
  selectSector();//this will return 1 of the event
}
