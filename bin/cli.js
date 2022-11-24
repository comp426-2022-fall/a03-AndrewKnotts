#!/usr/bin/env node

import minimist from "minimist"
import { roll } from "../lib/roll.js"

//reads in the command
const args = minimist(process.argv.slice(2));

//default values to be set if not specified
const sides = args.sides || 6;
const dice = args.dice || 2;
const rolls = args.rolls || 1;

//return the result of the function
console.log(JSON.stringify(roll(sides, dice, rolls)))