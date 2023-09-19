# React Modal

Simple Modal working with React

- [Installation](#installation)
- [Usage/Examples](#usageexamples)

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
| onClose  | no       | undefined | function | [Click](#onclose)  |
| onCreate | no       | undefined | function | [Click](#oncreate) |
| onFocus  | no       | undefined | function | [Click](#onfocus)  |
| onOpen   | no       | undefined | function | [Click](#onopen)   |
| onSelect | no       | undefined | function | [Click](#onselect) |

[Back to top](#react-modal)

## Props Examples

### onClose

`onClose` trigger when menu is closed

```js
<Select id="id" options={options} onClose={() => console.log('onClose')} />
```

[Back to top](#react-modal)

### onCreate

`onCreate` trigger when component is create

```js
<Select id="id" options={options} onCreate={() => console.log('onCreate')} />
```

[Back to top](#react-modal)

### onFocus

`onFocus` trigger when input is focused

```js
<Select id="id" options={options} onFocus={() => console.log('onFocus')} />
```

[Back to top](#react-modal)

### onOpen

`onOpen` trigger when menu is opened

```js
<Select id="id" options={options} onOpen={() => console.log('onOpen')} />
```

[Back to top](#react-modal)

### onSelect

`onSelect` trigger when option is selected

```js
<Select id="id" options={options} onSelect={() => console.log('onSelect')} />
```

[Back to top](#react-modal)
