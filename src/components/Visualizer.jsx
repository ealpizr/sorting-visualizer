import './Visualizer.css'

const Visualizer = ({ array }) => {
  return (
    <div className="visualizer-container">
      {array.map((val, idx) => (
        <div
          key={idx}
          className="visualizer-bar"
          style={{
            height: `${val}px`,
          }}
        ></div>
      ))}
    </div>
  )
}

export default Visualizer
