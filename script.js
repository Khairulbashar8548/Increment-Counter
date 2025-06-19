

const counters =document.querySelectorAll('.counter');

counters.forEach((counter)  => {
   // console.log(counter)

   counter.innerHTML = 0;

  const updateCounter = () => {
    const targetcount = counter.getAttribute('data-target');
    console.log(targetcount);
  }

});