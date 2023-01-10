import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class PortalDemo extends Component {
  render() {
    return ReactDOM.createPortal(<h1>PotalDemo</h1>,document.getElementById("portal-root"))
  }
}

export default PortalDemo

//https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbmNET1hOUFo3M3U1T29WdG40b01pNEtiTzNDUXxBQ3Jtc0tuVWcxYVhHaW9fcGZfcFlDaGxqdWRpeW1iVTZDX1hXRnFFeHdhRnkxQjhSaU5odmVZcWNsWVZrMGtaN0U3b1RmZ1BaQ1VObDFBNDdMNldnVk4yaHBBYkxjVHdpcGthQTM4aG82c3N2R0ZmSXFlMUdDcw&q=https%3A%2F%2Fcodesandbox.io%2Fs%2F00254q4n6p&v=HpHLa-5Wdys
//https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbHpoczJ3cHo4Z2JsS19wUW1JWjJ6YlBCb0FUUXxBQ3Jtc0ttajFPeGQtWm9jX05KS1FGVU16RHN4SldaMnR3WEMtSWFXT1VPQWhfVWhwTlk0ME40ajhMcDcwYkttczNtNWo5Uk9scDlmc0pmY0NPVFlmOXZJd2VKRFRTQjlBenUzOUkwMzlQRkl0N2I2NzBnTExpTQ&q=https%3A%2F%2Fcodepen.io%2Fgaearon%2Fpen%2FjGBWpE&v=HpHLa-5Wdys
//https://codepen.io/gaearon/pen/jGBWpE
//https://codesandbox.io/s/00254q4n6p?file=/src/index.js