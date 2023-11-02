onmessage = (e) => {
  // console.log(e);
  const { data } = e;
  const { rawData, canvas, barWidth, barGap } = data;
  const lineCtx = canvas.getContext('2d');

  let xAxis = 0;
  let yAxis = canvas.height / 2;
  let barNum = Math.round(canvas.width / (barWidth + barGap));
  let filterData = [];
  const length = rawData.length;
  console.log(barNum);

  lineCtx.beginPath();
  for (let i = 0; i < length; i++) {
    filterData.push(rawData[i * barNum]);
    // console.log(i, '<-------->', rawData[i * barNum]);
    // const barH = Math.abs(Math.round(canvas.height * rawData[i * barNum]));
    // lineCtx.roundRect(xAxis, yAxis - barH / 2, barWidth, barH, 4);
    // lineCtx.fillStyle = '#4000ff';
    // xAxis = i * (barWidth + barGap);
  }
  console.log(filterData);
  // lineCtx.fill();
  for (let i = 0; i < filterData.length; i++) {
    const barH = Math.abs(Math.round(canvas.height * filterData[i]));
    lineCtx.roundRect(xAxis, yAxis - barH / 2, barWidth, barH, 4);
    lineCtx.fillStyle = '#4000ff';
    xAxis = i * (barWidth + barGap);
  }
  lineCtx.fill();

  // lineCtx.moveTo(0, yAxis);
  // lineCtx.lineTo(canvas.width, yAxis);
  // lineCtx.lineWidth = 3;
  // lineCtx.stroke();

  // for (let i = 0; i < filterData.length; i++) {
  //   const barH = Math.abs(Math.round(canvas.height * filterData[i]));
  //   console.log(i, '<-------->', barH);
  //   lineCtx.roundRect(xAxis, yAxis - barH / 2, barW, barH, 4);
  //   lineCtx.fillStyle = '#4000ff';
  //   // xAxis = xAxis + barW;
  // }
  // lineCtx.fill();
};
