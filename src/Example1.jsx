import { useState, useRef, useCallback } from "react"
import usePosts from "./hooks/usePosts"
import { confirmAlert } from "react-confirm-alert"
// import 'react-confirm-alert/src/react-confirm-alert'

const Example1 = () => {
  return (
    <>
        <h1 id='top' >
            &infin; Infinite Query &amp; Scroll
            <br/>
            &infin; Ex. 1 - React Only
        </h1>

        <p className='center'>Loading More Posts...</p>

        <p className='center'>
            <a href="#top">Back To Top</a>
        </p>
    </>
  )
}

export default Example1