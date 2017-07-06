# react-single-dropdown

## Installation 

`npm install react-single-dropdown --save`

## Features

- React single dropdown
- You can pass options as array
- Set a default selected option
- Get the selected option

## Usage

```js
<ReactSingleDropdown 
    options={'Option 1', 'Option 2', 'Option 3'}
    defaultSelected='Option 2'/>
```

# Props

### `<ReactSingleDropdown>`
Name | Type | Default | Description
-----|------|---------|------------
options | array | [] | Specify the select(Dropdown) component options as an array of values. For example ['option 1', 'options 2', option 3']
defaultSelected | string | null | Specify one option from the options array as default selected option if required.
noAnimation | boolean | true | Whether or not dropdown arrow animation should be enabled.
width | number | 100% | Width of the dropdown menu, in px. The default width of the component is 100% of the parent component's width. For example `width='350'`.  This means that the width of the component is 350px.
onSelect | function | selected value | This is a call-back function which returns the selected value back on `onSelect`.

## Example
```js
import React from 'react'

import ReactSingleDropdown from 'react-single-dropdown'

export default class Demo extends React.Component {

  onDropdownSelect = (value) => {
    console.log('Selected value=', value)
  }
  
  render() {
    return <div>
      <h1>react-single-dropdown Demo</h1>
      <ReactSingleDropdown 
      defaultSelected = 'Option 3'
      onSelect={this.onDropdownSelect}
      noAnimation
      options={['Option 1','Option 2','Option 3']}
      width='500'/>
    </div>
  }
}
```

## License

MIT
