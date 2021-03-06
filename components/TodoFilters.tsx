import React from 'react';
import { Filter } from '../types/Filter';

type Filters = {text: string, filter: Filter}[] // 굳이 안해도 되지만 filter 자동완성을 위해서 사용

const filters: Filters = [
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
