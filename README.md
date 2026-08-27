# Spartronics Docs

## Overview

This is a repository designed to be used by [FRC Team 4915: Spartronics](https://github.com/Spartronics4915), for the teaching and reference of members. This project uses [MyST](https://github.com/jupyter-book/mystmd) to generate the formatting and markdown files. 

## Structure

The repository will be split into two main branches: `docs` and `course` (Not final). 

### Docs

Inside the `docs` branch you will find the docs (CRAZY). The docs are spread out into 4 main parts: `introduction`, `course`, `hardware guides`, and `API reference`.

#### Introduction

This part is meant to serve as a general introduction to the documentation, as well as the installation guide, for setting up all of the tools and libraries a member would use for FRC programming on 4915.

#### Course

Where the programming learning course for the team is held. It will be structured similar to design.org, this is also where the `course` branch will be referenced.

#### Hardware Guides

Guides for using different hardware (e.g. cameras, radios and robot computers). This could include flashing the device, configuring it, or even wiring instructions.

#### API Reference

References to APIs we use. Some examples of things in here would be how to setup a motor using Phoenix 6, or design a path with BLine. This is meant to serve as a one-stop-shop for all members' APIs needs.

### Course

The structure for this branch is not yet decided.

## Contributing

To contribute follow these steps:

1. Go to [MyST's Installation Guide](https://mystmd.org/guide/installing), where you will setup its Command Line Interface
2. Fork the `docs` branch
3. Reference the [MyST Docs](https://mystmd.org/) for any questions about formatting or features

To set up the developer environment: 

1. Pull up your terminal of choice
2. Get into the docs directory of the project
3. Run this command: `myst`
4. Go to http://localhost:3000/
