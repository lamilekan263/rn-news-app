import { FlatList, View } from 'react-native';
import React from 'react';
import RenderItem from './RenderItem/RenderItem';

export type RenderItemType = {
  id: number;
  name: string;
  selected: boolean;
};

const FilterComponent = () => {
  let filterData: RenderItemType[] = [
    {
      id: 1,
      name: 'general',
      selected: false,
    },
    {
      id: 2,
      name: 'business',
      selected: true,
    },
    {
      id: 3,
      name: 'entertainment',
      selected: false,
    },
    {
      id: 4,
      name: 'health',
      selected: false,
    },
    {
      id: 5,
      name: 'science',
      selected: false,
    },
    {
      id: 6,
      name: 'sports',
      selected: false,
    },
    {
      id: 7,
      name: 'technology',
      selected: false,
    },
  ];

  const onSelect = (index) => {
    filterData.map((d) => (d.selected = d.id === index));
  };

  return (
    <View style={{ marginVertical: 12 }}>
      <FlatList
        data={filterData}
        renderItem={({ item }) => (
          <RenderItem onSelect={onSelect} item={item} />
        )}
        keyExtractor={(item: RenderItemType) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default FilterComponent;
