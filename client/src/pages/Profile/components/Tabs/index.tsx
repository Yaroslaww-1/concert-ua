import React from 'react';
import DescriptionHeader from 'src/components/DescriptionHeader';

enum Tabs {
  PERSONAL_INFO,
  LIKES,
}

interface IProps {
  items: {
    index: number;
    child: React.ReactNode;
  }[];
}

const TabsComponent: React.FC<IProps> = ({ items }) => {
  const [activeTab, setActiveTab] = React.useState<Tabs>(Tabs.PERSONAL_INFO);

  const getActiveElement = () => items.filter((it) => it.index === activeTab)[0].child;

  return (
    <div>
      <DescriptionHeader
        links={[
          { label: 'Personal info', onClick: () => setActiveTab(Tabs.PERSONAL_INFO) },
          { label: 'Likes', onClick: () => setActiveTab(Tabs.LIKES) },
        ]}
      />
      {getActiveElement()}
    </div>
  );
};

export default TabsComponent;
