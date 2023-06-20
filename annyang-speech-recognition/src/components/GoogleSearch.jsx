import { useEffect } from 'react';
import annyang from 'annyang';

const GoogleSearch = () => {
  useEffect(() => {
    if (annyang) {
      const commands = {
        'search *term': (term) => {
          performGoogleSearch(term);
        },
      };

      annyang.addCommands(commands);
      annyang.start();
    }

    return () => {
      if (annyang) {
        annyang.removeCommands();
        annyang.abort();
      }
    };
  }, []);

  const performGoogleSearch = (term) => {
    // Use the Google Search API or trigger a browser search
    // Use the browser's built-in search functionality to open the search results in a new tab
    window.open(`https://www.google.com/search?q=${encodeURIComponent(term)}`);
  };

  return (
    <div>
        <p>Google Search, for example : search home</p>  
    </div>
    );
};

export default GoogleSearch;
