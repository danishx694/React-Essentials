import { Header } from './componets/Header.jsx';
import {CORE_CONCEPTS, EXAMPLES} from './data.js';
import { CoreConcept } from './componets/CoreConcepts.jsx';
import { TabButton } from './componets/TabButton.jsx';
import { useState } from 'react';


function App() {
  const [manageButton , setMangeButton] = useState('components')


  function HandleClick (selectedButton) {
    setMangeButton(selectedButton)
    // console.log(manageButton);
  }


  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
            <CoreConcept  title ={CORE_CONCEPTS[0].title}  description ={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image}/>
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={manageButton === 'components'} onSelect={() => HandleClick('components')}>Components</TabButton>
            <TabButton isSelected={manageButton === 'Tab'} onSelect={() => HandleClick('tab')}>Tab</TabButton>
            <TabButton isSelected={manageButton === 'Boom'} onSelect={() => HandleClick('boom')}>Boom</TabButton>
            <TabButton isSelected={manageButton === 'Hello'} onSelect={() => HandleClick('hello')}>Hello</TabButton>
          </menu>
          <div id = "tab-content">
            <h3>{EXAMPLES[manageButton].title}</h3>
            <p>{EXAMPLES[manageButton].description}</p>
            <pre>
              <code>
              {EXAMPLES[manageButton].code}
              </code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
 