# React Modal

Simple Modal working with React

- [Installation](#installation)
- [Usage/Examples](#usageexamples)
- [Props](#props)
  - [Examples](#props-examples)

## Installation

Install react-modal with npm

```bash
npm i @fsmnk/react-modal
```

[Back to top](#react-modal)

## Usage/Examples

```js
import Modal from '@fsmnk/react-modal';

const App = () => {
  return (
    <div className="App">
      <Modal>
        <h1>Lorem ipsum</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Modal>
    </div>
  );
};

export default App;
```

[Back to top](#react-modal)

## Props

| Name     | Required | Default   | Type     | Example            |
| -------- | -------- | --------- | -------- | ------------------ |
| title    | no       | undefined | string   | [Click](#title)    |
| onOpen   | no       | undefined | function | [Click](#onopen)   |
| onClose  | no       | undefined | function | [Click](#onclose)  |
| onCreate | no       | undefined | function | [Click](#oncreate) |
| onFocus  | no       | undefined | function | [Click](#onfocus)  |

[Back to top](#react-modal)

## Props Examples

### title

```js
import Modal from '@fsmnk/react-modal';

const App = () => {
  return (
    <div className="App">
      <Modal title="Lorem ipsum">...</Modal>
    </div>
  );
};

export default App;
```

[Back to top](#react-modal)

### onOpen

`onOpen` trigger when menu is opened

```js
<Modal onOpen={() => console.log('onOpen')}>...</Modal>
```

[Back to top](#react-modal)

### onClose

`onClose` trigger when menu is closed

```js
<Modal onClose={() => console.log('onClose')}>...</Modal>
```

[Back to top](#react-modal)

### onCreate

`onCreate` trigger when component is create

[Back to top](#react-modal)

### onFocus

`onFocus` trigger when input is focused

[Back to top](#react-modal)
