# Don't Die Prototype

*By G/A Augustin, Yifei Chen, Jennie Lee, Proud Taranat, and Harvey Zheng*

![image of a note from david wolinsky](img/cover.png "Don't Die Cover")

This repository is a demo of the interview page for our redesign of [Don't Die](https://nodontdie.com/). Built in React.js, this demo features a sample interview with a text size changer, as well as a color changer component.

## Installation
Requirements: you will need both `node`/`npm` and `git` to install this. For node, refer to [this link for installation](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm). For git, refer to [this link](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

This installation was confirmed to work on an M1 Macbook Air running macOS 12.6, node v20.0.0, and npm 9.6.4. It was also confirmed to work on Windows machine running Windows 10 Home, with npm 9.5.1 and node v18.16.0.

To download the repo, run:

```git clone https://github.com/harvzheng/dont-die.git && cd dont-die```

After, to install the necessary components run:

```npm install```

To run the site with Gatsby, use

```npm run start```

*The actual page is located at `http://localhost:8000/interview`

## Components

The repository features a component, found in `components/color.js`

To use it, use:
`<ColorChanger color1="#FFFFFF" color2="#000000"/>`

where `color1` is the color of the background, and `color2` is the color of the text.
