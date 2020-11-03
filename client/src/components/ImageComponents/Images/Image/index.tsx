import React from 'react';

import styles from './styles.module.scss';

export interface IImageProps {
  classes?: {
    root?: string;
    image?: string;
  };
  imageSrc: string;
  imageAltText?: string;
  hoverElement?: JSX.Element;
  frontElement?: JSX.Element;
}

const Image: React.FC<IImageProps> = ({
  imageSrc,
  imageAltText = 'An image',
  classes = {
    root: '',
    image: '',
  },
  hoverElement = null,
  frontElement = null,
}) => {
  const [hovered, setHovered] = React.useState<boolean>(false);
  return (
    <div
      className={`${styles.wrapper} ${classes.root}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={imageSrc} alt={imageAltText} className={classes.image} />
      {frontElement && frontElement}
      {/* {withText && (
        <div className={`${styles.text} ${textClassName.root}`}>
          {date !== '' && <div className={`${styles.date} ${textClassName.date}`}>{date}</div>}
          {title !== '' && <div className={`${styles.title} ${textClassName.title}`}>{title}</div>}
          {place !== '' && <div className={`${styles.place} ${textClassName.place}`}>{place}</div>}
        </div>
      )} */}
      {hoverElement && hovered && hoverElement}
      {/* {withHover && (
        <div className={styles.hoverOverlay}>
          {withTextOnHover && (
            <div className={`${styles.text} ${textClassName.root}`}>
              {date !== '' && <div className={`${styles.date} ${textClassName.date}`}>{date}</div>}
              {title !== '' && <div className={`${styles.title} ${textClassName.title}`}>{title}</div>}
              {place !== '' && <div className={`${styles.place} ${textClassName.place}`}>{place}</div>}
            </div>
          )}
        </div>
      )} */}
    </div>
  );
};

export default Image;
