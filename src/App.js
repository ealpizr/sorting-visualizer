import { useEffect, useState } from 'react'
import Header from './components/Header'
import Visualizer from './components/Visualizer'
import getBubbleSortAnimations from './algorithms/bubbleSort'
import getMergeSortAnimations from './algorithms/mergeSort'

const ANIMATION_DELAY = 10

const App = () => {
  const [arraySize, setArraySize] = useState(20)
  const [array, setArray] = useState([])

  useEffect(() => {
    generateArray()
  }, [])

  const generateArray = () => {
    const { clientHeight: height, clientWidth: width } = document.querySelector(
      '.visualizer-container'
    )
    const newArray = []
    for (let i = 0; i < (width + 1) / arraySize; i++) {
      newArray.push(Math.floor(Math.random() * (height - 50 + 1) + 50))
    }
    setArray(newArray)
  }

  const animateAlgorithm = animations => {
    for (let i = 0; i < animations.length; i++) {
      const visualizerBars = document.getElementsByClassName('visualizer-bar')
      const isColorChange = i % 3 !== 2

      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i]
        const barOneStyle = visualizerBars[barOneIdx].style
        const barTwoStyle = visualizerBars[barTwoIdx].style
        const color =
          i % 3 === 0
            ? 'var(--visualizer-bar-highlight)'
            : 'var(--visualizer-bar-set)'
        setTimeout(() => {
          barOneStyle.backgroundColor = color
          barTwoStyle.backgroundColor = color
        }, i * ANIMATION_DELAY)
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i]
          const barOneStyle = visualizerBars[barOneIdx].style
          barOneStyle.height = `${newHeight}px`
        }, i * ANIMATION_DELAY)
      }
    }
  }

  const sort = getSortAnimations => {
    const animations = getSortAnimations(array)
    animateAlgorithm(animations)
  }

  return (
    <>
      <Header
        generateArray={generateArray}
        arraySize={arraySize}
        setArraySize={setArraySize}
        bubbleSort={() => sort(getBubbleSortAnimations)}
        mergeSort={() => sort(getMergeSortAnimations)}
      />
      <Visualizer array={array} />
    </>
  )
}

export default App
