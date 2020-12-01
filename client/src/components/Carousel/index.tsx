/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import styles from './styles.module.scss';
import Slider from 'react-slick';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

type IProps = {
  items: {
    url: string;
    onClick?: () => void;
  }[];
  classes?: {
    image?: string;
  };
};

const Carousel: React.FC<IProps> = ({ items, classes }) => {
  const [drag, setDrag] = React.useState<boolean>(false);

  const NextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div className={`${className} ${styles.arrow} ${styles.next}`} style={{ ...style }} onClick={onClick}>
        <div className={`${styles.shadow} ${styles.next}`}>
          <NavigateNextIcon className={`${styles.nextArrow}`} onClick={onClick} />
        </div>
      </div>
    );
  };

  const PrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div className={`${className} ${styles.arrow} ${styles.prev}`} style={{ ...style }} onClick={onClick}>
        <div className={`${styles.shadow} ${styles.prev}`}>
          <NavigateBeforeIcon className={`${styles.prevArrow}`} onClick={onClick} />
        </div>
      </div>
    );
  };

  return (
    <Slider
      dots={true}
      infinite={true}
      autoplay={true}
      autoplaySpeed={5000}
      speed={500}
      slidesToShow={1}
      slidesToScroll={1}
      dotsClass={`slick-dots ${styles.navigation}`}
      nextArrow={<NextArrow />}
      prevArrow={<PrevArrow />}
      beforeChange={() => setDrag(true)}
      afterChange={() => setDrag(false)}
    >
      {items.map((item) => (
        <img
          className={classes?.image || ''}
          key={item.url}
          src={item.url}
          onClick={(e) => !drag && item.onClick && item.onClick()}
        ></img>
      ))}
    </Slider>
  );
};

export default Carousel;
