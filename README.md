# Blue Template

<!-- [![Infarma | P&D](https://cldup.com/dTxpPi9lDf.thumb.png)](https://infarma.com.br) -->

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)


Objectives: Create a base module of a minimalistic template for complex and robust systems, that are customizable acording to the necessities of each project. The main components will be inserted in the project to facilitate the customization.

Scope: Template Customization with Components + Backend +  DevOps 

Components : 
> Spinner,
> Dropdown,
> Input (many),
> Navbar,
> Sidebar,
> Typography,
> Butttons,
> Draggable Modals,
> Toast,
> Breadcrumbs,
> Popovers,
> Tables,
> Graphs (when needed)

Tecnologies: 
> Electron, 
> React, 
> Bootstrap, 
> JQuery

## Install
Before run, install Yarn.
```sh
npm i -g electron // If not installed
npm install
yarn install
yarn start
yarn build
```

## Usages

### react generate component [module] [component]
*alias: g*

#### module

Module name where the react component should be placed within. (Subdirectory within components directory)

#### component

React component name.
If you leave that empty generator creates folder with module name, and index.js inside

#### Options

* `-f` Generate only file and use module as filename

#### Define propNames
At "Prop names" question you can use "*" to mark as required `title*` and also you can define type `title:string` and sure you can write `title:string*`
If you didn't define a type cli will ask you to choose it from the list.

---------------------------------------

### react generate test [module] [component]
*alias: g*

Create React component.

#### module

Module name where the test file should be placed within. (Subdirectory within __tests__ directory)

#### component

Test file name.

---------------------------------------

### react view -c -t
*alias: v*

View react components and test files.

#### Options

* `-c`
View React components file directory.

* `-t`
View tests file directory.

### react config [key] [value]
*alias: c*

Change configuration in `.reactclirc`.

#### key

Key for configuration
example: `client`

#### value

Value for configuration
example: `src` (source directory)

## References

- [React Scaffolder](https://github.com/99xt/react-scaffolder/blob/master);
- [Yarn Library](https://yarnpkg.com/en/docs/install#mac-stable);