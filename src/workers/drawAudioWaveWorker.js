onmessage = (e) => {
  // console.log(e);
  const { data } = e;
  const { rawData, canvas, barWidth, barGap } = data;
  const lineCtx = canvas.getContext('2d');

  // X轴坐标
  let xAxis = 0;
  // 默认Y轴坐标为canvas高度的一半，目的是为了让图形垂直居中
  let yAxis = canvas.height / 2;
  // canvas宽度可以分配多少个图形
  let barNum = Math.round(canvas.width / (barWidth + barGap));
  // 将音频原始数据分割成多少份
  const length = Math.round(rawData.length / barNum);

  // 开始画图
  lineCtx.beginPath();
  for (let i = 0; i < barNum; i++) {
    const barH = Math.abs(Math.round(canvas.height * rawData[i * length]));
    // 画圆角矩形
    lineCtx.roundRect(xAxis, yAxis - barH / 2, barWidth, barH, 4);
    lineCtx.fillStyle = '#4000ff';
    // 计算每个图形在X轴的位置
    xAxis = i * (barWidth + barGap);
  }
  lineCtx.fill();
};
