import React from 'react';

import styles from './styles.module.scss';
import Text from 'src/components/Text';

interface IProps {
  onPopularSelect: () => void;
  onRecentSelect: () => void;
}

enum Selected {
  popular,
  recent,
}

const FilterPopularRecent: React.FC<IProps> = ({ onPopularSelect, onRecentSelect }) => {
  const [selected, setSelected] = React.useState<number>(Selected.popular);

  const getStyles = (type: Selected) => `${styles.button} ${selected === type ? styles.selected : styles.unSelected}`;

  const onClick = (type: Selected) => {
    if (type === Selected.popular) {
      setSelected(Selected.popular);
      onPopularSelect();
    }
    if (type === Selected.recent) {
      setSelected(Selected.recent);
      onRecentSelect();
    }
  };

  return (
    <div className={styles.root}>
      <div className={getStyles(Selected.popular)} onClick={() => onClick(Selected.popular)}>
        <Text color="black">Popular</Text>
      </div>
      <div className={getStyles(Selected.recent)} onClick={() => onClick(Selected.recent)}>
        <Text color="black">Recent</Text>
      </div>
    </div>
  );
};

export default FilterPopularRecent;
