import React from 'react'
import './style.css'

class ReactSingleDropdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedOption: null,
      isOptionsVisible: false
    }
  }

  onDropdownClick = () => {
    this.setState({ isOptionsVisible: !this.state.isOptionsVisible })
  }

  onOptionClick = (option) => {
    this.setState({ selectedOption: option })
    this.props.onSelect ? this.props.onSelect(option) : null;
  }

  collapse = () => {
    this.setState({ isOptionsVisible: false })
  }

  indexOf = (options, value) => {
    let optionIndex = -1;
    for (let i = 0; i < options.length; i++) {
      if (value == options[i]) {
        optionIndex = i;
        break;
      }
    }
    return optionIndex;
  }

  render() {
    let self = this
    let props = this.props
    let state = this.state
    let className = props.className
    let width = props.width + 'px'
    let arrow = props.noAnimation ? 709 : state.isOptionsVisible ? 708 : 709;
    let options = (props.options && Array.isArray(props.options)) ? props.options : [];
    let defaultSelected = state.selectedOption ? state.selectedOption : (props.defaultSelected && this.indexOf(props.options, props.defaultSelected) > -1) ? props.defaultSelected : null;

    return <div className={className}
      style={{ width: width }}
      tabIndex="0"
      onBlur={this.collapse}>
      <ul className="selected-option-container"
        onClick={self.onDropdownClick}>
        <li className="selected-option" data-value={state.selectedOption}>{defaultSelected ? defaultSelected : state.selectedOption}
          <span className='arrow'>{String.fromCharCode(arrow)}</span>
        </li>
        <ul className="options-container"
          style={!state.isOptionsVisible ? { display: 'none' } : null}>
          {options.map((option, index) => {
            return <li key={index}
              className={(option == state.selectedOption || option == defaultSelected) ? 'selected' : null}
              onClick={() => this.onOptionClick(option)}
              data-value={option}>{option}</li>
          })}
        </ul>
      </ul>
    </div>
  }
}

export default ReactSingleDropdown
