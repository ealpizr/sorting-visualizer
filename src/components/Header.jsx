import './Header.css'

const Header = ({ generateArray, bubbleSort, mergeSort }) => {
  return (
    <div className="header-container">
      <div className="header-button-container">
        <button className="header-button" onClick={generateArray}>
          New Array
        </button>
      </div>
      <h1 className="header-title">Sorting Algorithm Visualizer</h1>
      <div className="header-button-container">
        <button className="header-button" onClick={bubbleSort}>
          Bubble Sort
        </button>
        <button className="header-button" onClick={mergeSort}>
          Merge Sort
        </button>
      </div>
    </div>
  )
}

export default Header
