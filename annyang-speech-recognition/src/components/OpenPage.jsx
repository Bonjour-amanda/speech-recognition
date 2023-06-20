import { useEffect } from 'react';
import annyang from 'annyang';

const OpenPage = () => {
  useEffect(() => {
    if (annyang) {
      const commands = {
        'hello': () => {
          alert('Hello!'); // Execute a function when 'hello' command is spoken
        },
        'open *page': (page) => {
          // Execute a function with the spoken page as an argument
          window.open(`https://${page}.com`);
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

  return (
    <div>
        <p>Say Something to open a website, for example : open google</p>
    </div>
    );
};

export default OpenPage;