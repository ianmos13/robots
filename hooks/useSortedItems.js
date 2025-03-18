import { useMemo } from 'react';

export function useSortedItems(items) {
  return useMemo(() => {
    if (!items || !items.length) return [];

    return [...items].sort((a, b) => {
      const sortA = Number(a.sort);
      const sortB = Number(b.sort);


      // Группа 0: sort < 500
      // Группа 1: sort === 500
      // Группа 2: sort > 500
      const groupA = sortA < 500 ? 0 : (sortA === 500 ? 1 : 2);
      const groupB = sortB < 500 ? 0 : (sortB === 500 ? 1 : 2);

      if (groupA !== groupB) {
        return groupA - groupB;
      }

     
      if (groupA === 0) {
        return sortA - sortB;
      } else {

        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA;
      }
    });
  }, [items]);
}
