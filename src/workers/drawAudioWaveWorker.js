onmessage = (e) => {
  // console.log(e);
  const { data } = e;
  const { rawData, canvas, barWidth, barGap } = data;
  const lineCtx = canvas.getContext('2d');

  let xAxis = 0;
  let yAxis = canvas.height / 2;
  let barNum = Math.round(canvas.width / (barWidth + barGap));
  let filterData = [];
  const length = Math.round(rawData.length / barNum);
  console.log(barNum);

  lineCtx.beginPath();
  for (let i = 0; i < barNum; i++) {
    const barH = Math.abs(Math.round(canvas.height * rawData[i * length]));
    lineCtx.roundRect(xAxis, yAxis - barH / 2, barWidth, barH, 4);
    lineCtx.fillStyle = '#4000ff';
    xAxis = i * (barWidth + barGap);
  }
  lineCtx.fill();
};
