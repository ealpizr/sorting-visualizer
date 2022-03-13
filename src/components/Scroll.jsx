import './Scroll.css'

const Scroll = ({ arraySize, setArraySize }) => {
  const handleChange = e => {
    setArraySize(e.target.value)
  }

  const convertArraySize = () => {}

  return (
    <div className="scroll-container">
      <p className="scroll-label">Array Size</p>
      <input
        className="scroll-input"
        type="range"
        value={arraySize}
        onChange={handleChange}
      ></input>
    </div>
  )
}

export default Scroll
