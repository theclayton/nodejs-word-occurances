#!/usr/bin/env node

const fs = require("fs");
const helpText = require("./help");

function getPath() {
  const pathIdx = process.argv.indexOf("-p");

  if (pathIdx < 0) {
    console.log("Missing path after -p flag.");
    abort();
  }

  return process.env.PWD + "/" + process.argv[pathIdx + 1];
}

function has_flag(flags) {
  for (let i = 0; i < flags.length; i++) {
    const flag = flags[i];

    if (process.argv.indexOf(flag) > 1) return true;
  }
  return false;
}

function show_help() {
  process.stdout.write("\r" + helpText);
  abort();
}

function abort() {
  process.exit(0);
}

async function doit() {
  if (has_flag(["-h", "-help", "--h", "--help"])) show_help();

  const path = getPath();

  const rawData = await fs.promises.readFile(path);

  const string = rawData.toString();

  const sanatized = string.replace(/[^a-zA-Z ]/g, "");

  const words = sanatized.split(" ");

  const ocurrences = {};

  let i;
  for (i = 0; i < words.length; i++) {
    const word = words[i].toUpperCase();

    if (!ocurrences[word]) {
      ocurrences[word] = 1;
    } else {
      ocurrences[word] += 1;
    }
  }

  const uniqueWords = Object.keys(ocurrences);

  let sortable = [];
  for (i = 0; i < uniqueWords.length; i++) {
    sortable.push({
      word: uniqueWords[i],
      ocurrences: ocurrences[uniqueWords[i]],
    });
  }

  sortable.sort(function (a, b) {
    return b.ocurrences - a.ocurrences;
  });

  console.table(sortable, ["word", "ocurrences"]);
}

doit();
