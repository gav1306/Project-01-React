import CoreConcepts from "./components/CoreConcepts";
import Header from "./components/Header";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS } from "./data";
import { useState } from "react";
import { EXAMPLES } from "./data";

function App() {
  const [contentDisplay, setContentDisplay] = useState();

  const contentHandler = (selectedBtn) => {
    setContentDisplay(selectedBtn);
  };

  let content = <p>Please select a tab</p>;

  if (contentDisplay) {
    content = (
      <div id="tab-content">
        <h3>{EXAMPLES[contentDisplay].title}</h3>
        <p>{EXAMPLES[contentDisplay].description}</p>
        <pre>
          <code>{EXAMPLES[contentDisplay].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item) => {
              return <CoreConcepts key={item.title} {...item} />;
            })}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={contentDisplay === "components"}
              onSelect={() => contentHandler("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={contentDisplay === "jsx"}
              onSelect={() => contentHandler("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={contentDisplay === "props"}
              onSelect={() => contentHandler("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={contentDisplay === "state"}
              onSelect={() => contentHandler("state")}
            >
              State
            </TabButton>
          </menu>
          {content}
        </section>
      </main>
    </div>
  );
}

export default App;
