const square = React.createElement('div', {
  style: {
    width: '50px',
    height: '50px',
    backgroundColor: 'red',
    margin: '10px',
    display: 'inline-block'
  }
})
const circle = React.createElement('div', {
  style: {
    width: '50px',
    height: '50px',
    backgroundColor: 'green',
    margin: '10px',
    borderRadius: '50%',
    display: 'inline-block'
  }
})
const container = React.createElement(
// The first argument specifies the element's type
'div',

// The second argument specifies the element's attributes, or "props"
{
  style: {
    border: '5px solid blue'
  }
},

// The remaining arguments list the element's children
square, square, square, square, square, square, square, square, circle, circle, circle,)

ReactDOM.render(container, document.getElementById('app'))
