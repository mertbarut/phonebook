import { useState, forwardRef, useImperativeHandle } from 'react'

const button_styles = {
	header: "text-2xl",
	body: "flex justify-around m-5 bg-slate-200 rounded-lg border border-primaryBorder shadow-default py-8 px-5",
	title: "flex justify-center text-xl",
	button_view: "justify-self-end bg-sky-400 py-2 px-4 text-sm text-white rounded border border-sky focus:outline-none focus:border-sky-dark"
}

const Togglable = forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

    useImperativeHandle(ref, () => {
    return {
      toggleVisibility
    }
  })

  return (
    <div>
      <div style={hideWhenVisible}>
        <button id="togglable-section" className={button_styles.button_view} onClick={toggleVisibility}>{props.buttonLabel}</button>
      </div>
      <div style={showWhenVisible}>
        {props.children}
        <button onClick={toggleVisibility} className={button_styles.button_view}>hide</button>
      </div>
    </div>
  )
})

export default Togglable