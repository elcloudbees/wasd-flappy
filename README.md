# wasd-flappy
[![Build Status](https://travis-ci.org/QingWei-Li/wasd-flappy.svg?branch=master)](https://travis-ci.org/QingWei-Li/wasd-flappy)
[![Coverage Status](https://coveralls.io/repos/github/QingWei-Li/wasd-flappy/badge.svg?branch=master)](https://coveralls.io/github/QingWei-Li/wasd-flappy?branch=master)
[![npm](https://img.shields.io/npm/v/wasd-flappy.svg)](https://www.npmjs.com/package/wasd-flappy)

> 🐦 Create your own flappy.

## Installation
```shell
npm i wasd-flappy -S
```

## Demo

- [VanillaJS simple demo](https://wasd-org.github.io/wasd-flappy/vanilla/)
- [Vue.js Flappy Bird](https://wasd-org.github.io/wasd-flappy/vue/)
- *TODO Terminal*
- *TODO React*

## Usage
```javascript
import Flappy, { Player, Block } from 'wasd-flappy'

new Flappy({
  canvas: {
    width: 300,
    height: 400
  },
  player: new Player({
    height: 30,
    width: 30
  }),
  levels: [
    {
      score: 0,
      blocks: [new Block()]
    }
  ]
})
```

## API
### Flappy

#### Options

| Name | Description | Type | Accepted Values | Default |
|------|-------------|------|-----------------|---------|
| width | Canvas width  | Number  | - | 300 |
| height | Canvas height  | Number  | - | 600 |
| floorHeight | floor height  | Number  | - | 0 |
| fps | fps  | Number  | - | 30 |


#### Methods

- `Flappy#start`
- `Flappy#pause`
- `Flappy#continue`
- `Flappy#gameover`
- `Flappy#restart`

#### Events
- `game:start`
- `game:ready`
- `game:progress`
- `game:over`

#### Properties

### Player

#### Options

| Name | Description | Type | Accepted Values | Default |
|------|-------------|------|-----------------|---------|
| width | Player width  | Number  | - | 30 |
| height | Player height  | Number  | - | 30 |
| startX | start x  | Number  | - | 0 |
| startY | start y  | Number  | - | 0 |
| velocity | velocity  | Number  | - | 15 |
| g | gravitational  | Number  | - | 20 |
| name | name  | String  | - | 'Player' |
| pop | Fault tolerance  | Number  | - | 0 |
| reverse | reverse  | Boolean  | - | false |
| meta | anything  | *  | - | null |


#### Methods

- `Player#jump`

#### Events

- `player:hitblock`
- `player:hitfloor`

#### Properties

### Block

#### Options

| Name | Description | Type | Accepted Values | Default |
|------|-------------|------|-----------------|---------|
| width | Block width  | Number  | - | 30 |
| height | Block height  | Number  | - | 30 |
| padding | padding  | Number  | - | 0 |
| placement | placement  | String  | 'random', 'bottom', 'top' | 30 |
| name | name  | String  | - | 'Block' |
| meta | anything  | *  | - | null |

#### Properties

## License
MIT
