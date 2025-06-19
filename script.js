

const counters =document.querySelectorAll('.counter');

counters.forEach((counter)  => {
   // console.log(counter)

   counter.innerHTML = 0;

  const updateCounter = () => {
    const targetcount = +counter.getAttribute('data-target');
    //console.log(typeof targetcount);

    const startingCount =  Number(counter.innerHTML);

    const increment = targetcount / 100;

    if (startingCount < targetcount){
     counter.innerHTML = `${Math.round(startingCount + increment)}`;
     setTimeout(updateCounter , 100)
    }else{
       counter.innerHTML =  targetcount;
    }

  }

  updateCounter();
})