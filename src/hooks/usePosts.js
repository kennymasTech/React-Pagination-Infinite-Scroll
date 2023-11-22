import { useState, useEffect } from "react";
import { getPostsPage } from "../api/axios";


const usePosts = () => {
    const [ results, setResults ] = useState([])
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState({})
    const [ isError, setIsError ] = useState(false)
    const [ hasNextPage, setHasNextPage ] = useState(false)

  return { loading, isError, error, results, hasNextPage }
}

export default usePosts