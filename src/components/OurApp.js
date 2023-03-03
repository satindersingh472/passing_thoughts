import React, { useState } from 'react';
import { AddThoughtForm } from './AddThoughtForm';
import { Thought } from './Thought';
import { generateId, getNewExpirationTime } from './Utilities';

export default function OurApp() {
  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: 'This is a place for your passing thoughts.',
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "They'll be removed after 15 seconds.",
      expiresAt: getNewExpirationTime(),
    },
  ]);

  const addThought = (thoughts) => {
    setThoughts((prev) => [...prev,thoughts])
  }

  const removeThought = (thoughToRemove) => {
    setThoughts((thoughts) => thoughts.filter((thought)=> thought.id !== thoughToRemove))
  }


  return (
    <div className="App">
      <header>
        <h1>Passing Thoughts</h1>
      </header>
      <main>
        <AddThoughtForm addThought={addThought} />
        <ul className="thoughts">
          {thoughts.map((thought) => (
            <Thought key={thought.id} thought={thought} removeThought={removeThought} />
          ))}
        </ul>
      </main>
    </div>
  );
}
