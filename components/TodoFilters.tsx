import React from 'react';

const filters = [
  { text: '전체', filter: 'ALL' },
  { text: '완료', filter: 'DONE' },
  { text: '미완료', filter: 'UNDONE' },
];

const TodoFilters = () => (
  <div>
    {filters.map(({ text, filter }) => (
      <button
        type="button"
        key={filter}
      >
        {text}
      </button>
    ))}
  </div>
);

export default TodoFilters;
