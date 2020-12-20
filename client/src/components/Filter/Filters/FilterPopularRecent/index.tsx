import React from 'react';

import styles from './styles.module.scss';
import Text from 'src/components/Text';
import { PopularRecentFilter } from 'src/api/services/event.service';

interface IProps {
  onPopularSelect: () => void;
  onRecentSelect: () => void;
  preSelected?: PopularRecentFilter;
}

const FilterPopularRecent: React.FC<IProps> = ({
  onPopularSelect,
  onRecentSelect,
  preSelected = PopularRecentFilter.popular,
}) => {
  const [selected, setSelected] = React.useState<string>(preSelected);

  React.useEffect(() => {
    setSelected(preSelected);
  }, [preSelected]);

  const getStyles = (type: PopularRecentFilter) =>
    `${styles.button} ${selected === type ? styles.selected : styles.unSelected}`;

  const onClick = (type: PopularRecentFilter) => {
    if (type === PopularRecentFilter.popular) {
      setSelected(PopularRecentFilter.popular);
      onPopularSelect();
    }
    if (type === PopularRecentFilter.recent) {
      setSelected(PopularRecentFilter.recent);
      onRecentSelect();
    }
  };

  return (
    <div className={styles.root}>
      <div className={getStyles(PopularRecentFilter.popular)} onClick={() => onClick(PopularRecentFilter.popular)}>
        <Text color="black">Popular</Text>
      </div>
      <div className={getStyles(PopularRecentFilter.recent)} onClick={() => onClick(PopularRecentFilter.recent)}>
        <Text color="black">Recent</Text>
      </div>
    </div>
  );
};

export default FilterPopularRecent;
