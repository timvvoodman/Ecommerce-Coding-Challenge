# 🏆 Ecommerce Coding Challenge 🏆

![Size](https://img.shields.io/github/repo-size/timvvoodman/Ecommerce-Coding-Challenge)

## Description

A responsive Ecommerce site with filter, dynamic search, sort, and cart maganement functionality.

## Table of Contents

- [Demo](#demo)
- [Reflection](#reflection)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Collaborators](#collaborators)
- [Contributing](#contributing)
- [Contact Information](#contact-information)

## Demo

View the application [Here](https://timvvoodman.github.io/Ecommerce-Coding-Challenge/)

## Reflection

I certainly learned a lot during this challenge. I love working with React. In my coding journey so far one of my most significant “Ah Ha” moments was realizing the reusability of React components. For this project I wanted to use minimal packages & libraries to show what I can do with the basics (plain CSS, built in state management, etc…) That being said I did utilize a couple small packages: axios & Material Icons. I just prefer the syntax of axios when using async/await and I'm no good at graphic design so Material it was for the icons.

This was definitely one of, if not, the most complicated state management I’ve built for a React project. In my early commits I was only using the UseState hook to track the product data and filter states. As I implemented the filters I started to get worried about how cluttered and unreadable the code in some of the individual components was becoming.

Both the largest challenge and the greatest learning experience during this project was converting my “products” state from useState exclusively to a useContext. My goal was to clean up my component code and improve how the state changes effected the component renders. I have used the useContext & useReducer hook before in very simple tinkering apps to learn it. This is the first time I have implemented them together and for a state as complicated as managing ecommerce data. I’m so glad I did though! I took almost a day getting the initial setup right and passing the Fake Store API into the context layer with a dispatch action. Getting the filters working took an evening and now my code was much more organized and readable. And now... As I write this I feel much more comfortable with the structure and the syntax and was able to get the cart functionality working in about an hour this morning!

Thanks for Reading!

## Technology Stack

- HTML
- CSS
- JavaScript
- React

## Installation

1. Fork this repo and clone to your device
2. In the root folder of the project run `npm install` to download and install necessary dependencies
3. Type `npm start`

## Collaborators

timvvoodman | github.com/timvvoodmn |

## Contributing

1. Fork this repository
2. Create a new branch
3. Commit/push your changes
4. Create a new pull request. _Please email me if I do not respond to your pull request_

[Contributor Covenant](https://www.contributor-covenant.org/)

## Contact Information

Please direct all questions regarding this project to timothyrwoodman@gmail.com, Thank You!

[My GitHub](https://github.com/timvvoodman)
