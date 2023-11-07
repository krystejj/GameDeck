<img src="./assets/GameDeck Logo/800x414.svg" height=100 />

# GameDeck
![License](https://img.shields.io/github/license/krystejj/GameDeck?label=License)
![Issues](https://img.shields.io/github/issues/krystejj/GameDeck?label=Issues)
![Latest Release](https://img.shields.io/github/v/release/krystejj/GameDeck?label=Latest%20Release)

GameDeck is a free and open-source desktop app that shows various data such as your friends, current store, stats or match history from your games without need to launch them, so it makes access to this information much easier and faster. It also provides more useful tools, for example recording gameplay with events, lineups, esport info, wiki or better Discord presence. It is written in Rust using Tauri and Svelte, so it is fast and efficient. It should be also cross-platform, but because development is in too early stage to support other operating systems, GameDeck currently supports only Windows, but will support also MacOS and Linux in the future.

### 📖 Planned Features
For now it is planned that GameDeck will support 3 games: VALORANT, League of Legends and Minecraft. There will be also features that will work with all games for example gameplay recording but with limits such as event marking will work only in VALORANT and League of Legends and not in Minecraft. Integration for more games is possible but is hard to create and maintain as one person, we will see in the future.

Those planned features are:
- for all games:
    - recording gameplay
- for VALORANT, League of Legends and Minecraft:
    - wiki
- for VALORANT and League of Legends:
    - ability to view your friends, current store, stats and match history
    - notification when wished item appears in store
    - recording gameplay with events
    - esport info
- for VALORANT:
    - explore lineups and crosshairs
    - better Discord presence

If you do not want to use certain feature you can just disable it.

You can find current developer TODO list in [TODO.md file](./TODO.md).

### 🐛 Issues and Ideas
You can report issues or suggest ideas by opening a thread on [this repo issue tracker](https://github.com/krystejj/GameDeck/issues).

### 🛠️ Development
To start developing GameDeck only thing you need to do is install project dependencies.

##### Commands:
- `yarn install` - install project dependencies
- `yarn tauri dev` - run GameDeck in development mode, local port is 5173
- `yarn tauri build` - build GameDeck

##### Requirements:
- Node.js - major version 21
- Yarn - major version 1
- Rust - at least version 1.73.0

### 🙏 Used Projects and Credits
This is a list of projects used in development of GameDeck:
- [Rust](https://www.rust-lang.org/) - a fast, safe and awesome programming language
- [Tauri](https://tauri.app/) - a framework for building fast, secure and efficient desktop apps in Rust with usage of web technologies
- [Svelte](https://svelte.dev/) - an amazingly fast, easy, fun and enjoyable to use framework for building web apps
- [Sass](https://sass-lang.com/) - just CSS on drugs
- [Tailwind CSS](https://tailwindcss.com/) - a framework that makes CSS less annoying and painful to use

💗 Big thanks to the creators and all contributors of these projects.

### 📜 License
Source code of GameDeck is provided under the terms of the GNU General Public License v3.0, a free and open-source license. For more information, please see the [license file](LICENSE.md).
