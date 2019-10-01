#!/bin/bash

for i in $(seq -f "%02g" 1 25)
do
  dir="day$i"
  mkdir -v $dir
  touch $dir/day$i.js
  touch $dir/input.txt
  touch $dir/README.md

  # Strip leading zeroes
  noZero=$(echo $i | sed 's/^0*//')
  echo "# Day $noZero: 

## Part One


## Part Two

## Source
https://adventofcode.com/2019/day/$noZero" >> $dir/README.md

done
