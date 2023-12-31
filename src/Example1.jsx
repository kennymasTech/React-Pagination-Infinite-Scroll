
import { useState, useRef, useCallback } from "react";
import usePosts from "./hooks/usePosts";
import { confirmAlert } from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';
import { isError } from "react-query";
import Post from "./Post";

const Example1 = () => {
  const [pageNum, setPageNum] = useState(1);
  const { loading, isError, error, results, hasNextPage } = usePosts(pageNum);
  const intObserver = useRef();
  
  
  const lastPostRef = useCallback((post) => {
    if(loading) return;
    
    if(intObserver.current) intObserver.current.disconnect();

    const confirmLoad = () => {
      confirmAlert({
        title: "Confirm Load More",
        message: "Are You Sure To Load More Posts",
        buttons: [
          {
            label: "Yes",
            onClick: () => {
              setPageNum((prev) => prev + 1)
            }
          },
          {label: "No"}
        ]
      })
    }
    
    intObserver.current = new IntersectionObserver((post) => {
      if(post[0].isIntersecting && hasNextPage) {
        console.log("we are near the last post");
        confirmLoad()
      }
  });
  
  if(post) intObserver.current.observe(post);
}, [loading, hasNextPage]);

if (isError) return <p className="center">Error : {error.message} </p>

const content = results.map((post, i) => {
  if(results.length === i + 1) {

    return <Post ref={lastPostRef} key={post.id} post={post}/>;
  }
    return <Post key={post.id} post={post}/>;
  });

  return (
    <>
        <h1 id='top' >
            &infin; Infinite Query &amp; Scroll
            <br/>
            &infin; Ex. 1 - React Only
        </h1>

        {content};

        <p className='center'>Loading More Posts...</p>

        <p className='center'>
            <a href="#top">Back To Top</a>
        </p>
    </>
  )
};

export default Example1;