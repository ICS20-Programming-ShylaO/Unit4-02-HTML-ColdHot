// Copyright (c) 2023 Shyla Oommen All rights reserved
//
// Created by: Shyla Oommen
// Created on: April 2023
// This file contains the JS functions for index.html

"use strict";
/**
 * This function generates a response to the user based on the temperature given in °C.
 */
function hotOrColdResponse () {
  // initializing variables
  let userTemp = parseInt(document.getElementById('user-temp').value);
  let displayAns = "";
  
  // if userTemp >= 20, display “Wow, it’s hot today!”
  if (userTemp >= 20) {
    displayAns = "Wow, it's hot today!"
  }
  // else, display "Looks like it’s cold today."
  else {
    displayAns = "Looks like it’s cold today."
  }

  // display response to user
  document.getElementById('response').innerHTML = displayAns
}