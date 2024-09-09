import { useState } from 'react';

import TabButton from './TabButton.jsx';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';
import { EXAMPLES } from '../data.js';

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState(); // HOOK FUNCTION : 일부 컴포넌트에 연결된 상태를 관리하기 때문

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
    }

    let tabContent = <p>Please select a topic.</p>;

    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        );
    }

    return (
        <Section title="Examples" id="examples">
            <Tabs
                buttons={
                    <>
                        <TabButton
                            isSelected={selectedTopic === 'components'}
                            onClick={() => handleSelect('components')}
                        >
                            Components
                        </TabButton>
                        <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect('jsx')}>
                            JSX
                        </TabButton>
                        <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect('props')}>
                            Props
                        </TabButton>
                        <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleSelect('state')}>
                            State
                        </TabButton>
                    </>
                }
            >
                {tabContent}
            </Tabs>
        </Section>
    );
}