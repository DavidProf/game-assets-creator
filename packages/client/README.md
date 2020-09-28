# @game-assets-creator/server
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://github.com/othneildrew/Best-README-Template/blob/master/images/logo.png?raw=true" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Game Assets Creator</h3>

  <p align="center">
    A incredible project, with JavaScript Libs and a web application to create assets!
    <br />
    <a href="https://github.com/DavidProf/game-assets-creator#README.md"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="http://davidprof.github.io/game-assets-creator">View Demo</a>
    ·
    <a href="https://github.com/DavidProf/game-assets-creator/issues">Report Bug</a>
    ·
    <a href="https://github.com/DavidProf/game-assets-creator/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->
## About The Project

[![Game Assets Web Application Screen Shot][product-screenshot]](http://davidprof.github.io/game-assets-creator)

There are many great ways to create assets for a game, however, I didn't find one that really suit my needs so I created this enhanced one. I want to create an application so amazing that it'll be the last one you ever need.

Here's why:
* You shouldn't have to know how do draw to create a game
* Your time can be optimized when creating an asset letting a tool do the "hard work"
* You should be able to create amazing things with less effort :smile:
* You should be able to create your own tool to create assets (use our libs)

Of course, not all time it will serve all projects since your needs may be more specific. So we will be adding more features in the near future. You may also suggest changes by forking this repo and creating a pull request or opening an issue.

A list of commonly used resources that I find helpful are listed in the [Acknowledgements](#acknowledgements).

### Built With

* [html-to-image](https://www.npmjs.com/package/html-to-image)

<!-- GETTING STARTED -->
## Getting Started

Follow this instructions on how to set up your project locally.

### Prerequisites

* None for now

### Installation

1. Install the package
```sh
# with npm
npm i @game-assets-creator/client
# with yarn
yarn add @game-assets-creator/client
```

<!-- USAGE EXAMPLES -->
## Usage

Get started:
```js
// ES6 or typescript
import GAC from '@game-assets-creator/server'
// ES5
const GAC = require('@game-assets-creator/server')

const character = GAC.create({type:'human'})

const imageBuffer = character.toPNG()
```


<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/DavidProf/game-assets-creator/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat(some scope): Add some AmazingFeature'`). Please use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->
## Contact

David Lima - [@xarlyudo](https://twitter.com/xarlyudo)

Project Link: [https://github.com/DavidProf/game-assets-creator](https://github.com/DavidProf/game-assets-creator)

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [html-to-image](https://www.npmjs.com/package/html-to-image)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/DavidProf/game-assets-creator.svg?style=flat-square
[contributors-url]: https://github.com/DavidProf/game-assets-creator/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/DavidProf/game-assets-creator.svg?style=flat-square
[forks-url]: https://github.com/DavidProf/game-assets-creator/network/members
[stars-shield]: https://img.shields.io/github/stars/DavidProf/game-assets-creator.svg?style=flat-square
[stars-url]: https://github.com/DavidProf/game-assets-creator/stargazers
[issues-shield]: https://img.shields.io/github/issues/DavidProf/game-assets-creator.svg?style=flat-square
[issues-url]: https://github.com/DavidProf/game-assets-creator/issues
[license-shield]: https://img.shields.io/github/license/DavidProf/game-assets-creator.svg?style=flat-square
[license-url]: https://github.com/DavidProf/game-assets-creator/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/DavidProf
[product-screenshot]: https://github.com/DavidProf/game-assets-creator/raw/master/images/screenshot.png
