import React from 'react';

import { UserModel } from 'src/api/models/user.model';

import styles from './styles.module.scss';
import Section from 'src/components/Sections/Section';
import Text from 'src/components/Text';

interface IProps {
  user: UserModel;
}

const PersonalInfo: React.FC<IProps> = ({ user }) => {
  return (
    <Section>
      <div className={styles.header}>
        <Text color="black" fontSize="3.375rem" textTransform="uppercase" fontFamily="League Gothic">
          Personal info
        </Text>
        <Text color="gray" fontSize="16px">
          ID: {user.id}
        </Text>
      </div>
    </Section>
  );
};

export default PersonalInfo;
