import React from 'react';

import styles from './styles.module.scss';
import Text from 'src/components/Text';
import { useScroll } from 'src/common/hooks/use-scroll';

interface IProps {
  links: {
    onClick: () => void;
    label: string;
  }[];
}

const DescriptionHeader: React.FC<IProps> = ({ links }) => {
  const [scrollToTop, elementRef] = useScroll();

  React.useEffect(() => {
    scrollToTop();
  }, [links]);

  return (
    <div className={styles.navbarRoot} ref={elementRef}>
      <div className={styles.navbarContent}>
        {links.map((link) => (
          <Text
            key={link.label}
            color="black"
            fontSize="1rem"
            textTransform="uppercase"
            classes={{ root: styles.navbarLink }}
            onClick={link.onClick}
          >
            {link.label}
          </Text>
        ))}
      </div>
    </div>
  );
};

export default DescriptionHeader;
