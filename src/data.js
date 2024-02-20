export const CORE_CONCEPTS = [
  {
    title: 'Bubble Sort',
    description:
    'Continuously iterate through the array, swapping adjacent elements if they are in the wrong order, until the array is sorted.',
  },
  {
    title: 'Merge Sort',
    description:
    'Divide the array into halves, recursively sort each half, and then merge the sorted halves back together.',
  },
  {
    title: 'Selection Sort',
    description:
    'Iterate through the array, find the minimum element, and swap it with the first element.',
  },
  {
    title: 'Quick Sort',
    description:
      'Choose a pivot element, partition the array into two sub-arrays, and recursively sort each sub-array.',
  },
];

export const EXAMPLES = {
  bubbleSort: {
    title: 'Bubble Sort',
    description: 'Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and worst-case time complexity is quite high.',
  },
  mergeSort: {
    title: 'Merge Sort',
    description: 'Merge sort is defined as a sorting algorithm that works by dividing an array into smaller subarrays, sorting each subarray, and then merging the sorted subarrays back together to form the final sorted array.',
    
  },
  selectionSort: {
    title: 'Selection Sort',
    description: 'Selection sort is a simple and efficient sorting algorithm that works by repeatedly selecting the smallest (or largest) element from the unsorted portion of the list and moving it to the sorted portion of the list. ',
    
  },
  quickSort: {
    title: 'Quick Sort',
    description: 'QuickSort is a sorting algorithm based on the Divide and Conquer algorithm that picks an element as a pivot and partitions the given array around the picked pivot by placing the pivot in its correct position in the sorted array.',
    
  },
};