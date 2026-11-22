# 🎲 Random Names Generator

A small vanilla JavaScript project that places names at random positions inside a box. Click **Add** to drop a random name somewhere new, and **Reset** to clear the box.
# Live Link
https://rahulgavel73.github.io/random-name-generator

## Features

- Picks a random name from a list on every click
- Places each name at a random position inside the container
- Reset button clears all names
- Gradient background with hover and scale effects on buttons
- Responsive layout with a media query for smaller screens

## Built With

- HTML5
- CSS3 (Flexbox, absolute positioning, gradients, transitions, media queries)
- JavaScript (ES6)

## What I Practised

- DOM selection with `querySelector`
- Creating and appending elements with `createElement` and `appendChild`
- Handling events with `addEventListener`
- Generating random values with `Math.random()` and `Math.floor()`
- Template literals for dynamic CSS values (`` `${x}%` ``)
- Positioning elements using `position: relative` and `position: absolute`

## How to Run

1. Clone the repository
   ```bash
   git clone https://github.com/rahulgavel73/random-names-generator.git
   ```
2. Open the folder
   ```bash
   cd random-names-generator
   ```
3. Open `index.html` in your browser (or use the VS Code Live Server extension)

## Project Structure

```
random-names-generator/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Customize

Open `script.js` and edit the `arr` array to use your own names:

```js
const arr = ["Rahul", "Sameer", "Subham", "Aryan", "Ichigo"];
```

## Future Improvements

- Random colors and font sizes for each name
- Prevent names from overlapping
- Add a counter showing how many names are on screen
- Let users type in their own names

## Author

**Rahul**
