export function taskFirst() {
    const task = 'I prefer const when I can.';
    return task;
  }
  
  export const getLast = () => ' is okay';
  
  export function taskNext() {
    let combination = 'But sometimes let';
    combination += getLast();
  
    return combination;
  }
