#!/usr/bin/env node

import process from "node:process";

const VERSION = "0.0.0";

function printHelp(): void {
  console.log(`Loomara

Artifact-driven website assembler and publishing toolkit.

Usage:
  loomara <command>
  loomara --help
  loomara --version

Commands:
  doctor      Check the local runtime
  help        Show this help

The init, dev, build, and publish workflows will be added as the artifact
contracts and first website vertical slice are established.
`);
}

function doctor(): void {
  const nodeMajor = Number(process.versions.node.split(".")[0]);

  console.log("Loomara doctor");
  console.log(`  Node.js: ${process.version}`);
  console.log(`  Platform: ${process.platform} ${process.arch}`);

  if (nodeMajor < 22) {
    console.error(
      "  Status: unsupported Node.js version; use Node.js 22 or newer.",
    );
    process.exitCode = 1;
    return;
  }

  console.log("  Status: ready");
}

const command = process.argv[2] ?? "help";

switch (command) {
  case "--version":
  case "-v":
  case "version":
    console.log(VERSION);
    break;
  case "doctor":
    doctor();
    break;
  case "--help":
  case "-h":
  case "help":
    printHelp();
    break;
  default:
    console.error(`Unknown command: ${command}`);
    console.error(`Run "loomara --help" for usage.`);
    process.exitCode = 2;
}
