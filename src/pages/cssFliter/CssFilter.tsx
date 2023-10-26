import { useState } from 'react';
import style from './CssFliter.module.css';
import ParameterInput from './ParameterInput';
import { Simulate } from 'react-dom/test-utils';
import mouseDown = Simulate.mouseDown;
import mouseUp = Simulate.mouseUp;
import FileInput from '../../components/FileInput/FileInput';

export default function CssFilter() {
  const [filter, setFilter] = useState({
    grayscale: 0,
    blur: 0,
    brightness: 100,
    contrast: 100,
    'hue-rotate': 0,
    invert: 0,
    saturate: 100,
    sepia: 0,
  });
  const [imgSrc, setImgSrc] = useState('');

  const [pointer, setPointer] = useState({
    a: 0,
    moveX: 0,
  });

  const changeHandle = (target: any) => {
    setFilter((state) => ({
      ...state,
      [target.name]: parseInt(target.value),
    }));
  };

  const fileChange = (file: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (e: ProgressEvent<FileReader>) {
      setImgSrc(e.target?.result);
    };
  };

  const mouseMoveHandle = (e) => {
    console.log(pointer.a);
    setPointer((prevState) => {
      console.log(e.clientX - prevState.a);
      return {
        ...prevState,
        moveX: -(e.clientX - prevState.a),
      };
    });
  };

  const mouseDownHandler = (e) => {
    console.log(e);
    setPointer((prevState) => ({
      ...prevState,
      a: e.clientX,
    }));
  };

  const mouseUpHandler = () => {
    setPointer((prevState) => ({
      ...prevState,
      a: 0,
    }));
  };

  return (
    <div className={style.wrapper}>
      <FileInput onChange={fileChange} />
      <div className={style.filter}>
        <div className={style['image-view']}>
          <img
            alt=""
            src={imgSrc}
            className={style.blur}
            style={{
              filter: `brightness(${filter.brightness}%) 
            blur(${filter.blur}px) 
            sepia(${filter.sepia}%) 
            invert(${filter.invert}%)
            contrast(${filter.contrast}%)
            grayscale(${filter.grayscale}%)
            saturate(${filter.saturate}%)
            hue-rotate(${filter['hue-rotate']}deg)
            `,
              objectFit: 'contain',
            }}
          />
        </div>
        <div className={style['filter-param']}>
          <div className={style.slider} onMouseMove={mouseMoveHandle}>
            <div className={style.track} onMouseDown={mouseDownHandler} onMouseUp={mouseUpHandler}></div>
            <div className={style.progress} style={{ transform: `translateX(${pointer.moveX}px)` }}></div>
          </div>
          <ParameterInput
            filterType="grayscale"
            value={filter.grayscale.toString()}
            onChange={changeHandle}
            src={imgSrc}
            title="将图像转换为灰度图。值为 100% 则完全转为灰度图像，若为初始值 0% 则图像无变化。值在 0% 到 100%
              之间，则是该效果的线性乘数。"
          />
          <ParameterInput
            filterType="blur"
            value={filter.blur.toString()}
            onChange={changeHandle}
            src={imgSrc}
            max={10}
            unit="px"
            title="将高斯模糊应用于输入图像。"
          />
          <ParameterInput
            filterType="brightness"
            value={filter.brightness.toString()}
            onChange={changeHandle}
            max={300}
            src={imgSrc}
            title="将线性乘法器应用于输入图像，以调整其亮度。值为 0% 将创建全黑图像；值为 100%
              会使输入保持不变，其他值是该效果的线性乘数。如果值大于 100% 将使图像更加明亮。"
          />
          <ParameterInput
            filterType="contrast"
            value={filter.contrast.toString()}
            onChange={changeHandle}
            max={300}
            step={10}
            src={imgSrc}
            title="调整输入图像的对比度。值是 0% 将使图像变灰；值是 100%，则无影响；若值超过 100% 将增强对比度。"
          />
          <ParameterInput
            filterType="hue-rotate"
            value={filter['hue-rotate'].toString()}
            onChange={changeHandle}
            max={360}
            src={imgSrc}
            unit="deg"
            title="应用色相旋转。angle 值设定图像会被调整的色环角度值。值为 0deg，则图像无变化。"
          />
          <ParameterInput
            filterType="invert"
            value={filter.invert.toString()}
            onChange={changeHandle}
            max={100}
            src={imgSrc}
            title="反转输入图像。值为 100% 则图像完全反转，值为 0% 则图像无变化。值在 0% 和 100% 之间，则是该效果的线性乘数。"
          />
          <ParameterInput
            filterType="saturate"
            value={filter.saturate.toString()}
            onChange={changeHandle}
            max={100}
            src={imgSrc}
            title="改变图像饱和度。值为 0% 则是完全不饱和，值为 100% 则图像无变化。超过 100% 则增加饱和度。"
          />
          <ParameterInput
            filterType="sepia"
            value={filter.sepia.toString()}
            onChange={changeHandle}
            max={100}
            src={imgSrc}
            title="将图像转换为深褐色。值为 100% 则完全是深褐色的，值为 0% 图像无变化。"
          />
        </div>
      </div>
    </div>
  );
}
