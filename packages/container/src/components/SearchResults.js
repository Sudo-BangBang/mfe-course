import { mount } from 'searchResults/SearchResultsApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default ({results}) => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const {onParentNavigate} = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({pathname: nextPathname}) => {
        
        const {pathname}=history.location;

        if (pathname !== nextPathname){
          history.push(nextPathname);
        }        
      },
      results

    });

    history.listen(onParentNavigate);

  }, [results]);

  return <div ref={ref} />;
};
