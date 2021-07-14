self.addEventListener('message', ({ data: { start, count } }) => {
  let counter = 0;
  if (start) {
    console.group('[main worker]: started');
    const startInterval = setInterval(() => {
      console.log(counter);
      counter++;
      if (counter === count) {
        clearInterval(startInterval);
        console.groupEnd('time end');
      }
    }, 10);
  }
});
