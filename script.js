fetch('/data.json').then((request) => {
  if (!request.ok) {
    console.log('Oops! Something went wrong.');
    return null;
  }

  return request.json();
})

  .then(data => {
    function updateUI(timeframe) {
      const title = document.querySelectorAll(".title");
      const time = document.querySelectorAll(".time");
      const previousTime = document.querySelectorAll(".previous-time");

      data.forEach((element, index) => {
        title[index].textContent = element.title;
        time[index].textContent = `${element.timeframes[timeframe].current}hrs`
        previousTime[index].textContent = `Last Week - ${element.timeframes[timeframe].previous}hrs`
      });
    }
    const dailybtn=document.getElementById("Daily");
    const monthlybtn=document.getElementById("Monthly")
    const weeklybtn=document.getElementById("Weekly");

    dailybtn.addEventListener("click",function(){
     updateUI("daily")
    })
    weeklybtn.addEventListener("click",function(){
      updateUI("weekly")
     })
     monthlybtn.addEventListener("click",function(){
      updateUI("monthly")
     })
  });








