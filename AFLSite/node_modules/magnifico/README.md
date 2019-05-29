# Magnifico
version 1.0.0
Simple way to add magnifying (zoom) feature to your page.
If you have a lot of text or want to zoom-in on some picture with hovering mouse

## Installation

```shell
npm i --save magnifico
```

## Usage

```js

// only provide values if you want to override defaults

var magnifico = require("./magnifico") ({
    scale: 1.5, // default 1.5
    borderRadius:"0", // default 5px
    background: "#aaa", // default white
    padding: "10px" // default 10
});

magnifico.forSelector("p .magnify"); // all with class .par
magnifico.forClassName("my-class");
magnifico.forTagName("p") // paragraph
```

## Contribute
Feel free to create a pull request should you find a bug or want to extend the lib with new features.
