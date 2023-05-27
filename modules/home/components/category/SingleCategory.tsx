import { Text, TouchableOpacity, View } from 'react-native';
import React, { FC } from 'react';
import { ICategory } from '../../../../common/interfaces/category.interface';

interface IProps {
  category: ICategory;
  selected: string;
  setCurrentSelected: React.Dispatch<React.SetStateAction<string>>;
}

const SingleCategory: FC<IProps> = ({
  category,
  selected,
  setCurrentSelected,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => setCurrentSelected(category.attributes.title)}
    >
      <View
        className={
          selected === category.attributes.title
            ? 'mr-2 py-2 px-4 rounded-xl bg-primary'
            : 'mr-2 py-2 px-4 rounded-xl bg-backgroundInput/[0.025]'
        }
      >
        <Text
          className={
            selected === category.attributes.title
              ? 'font-montserrat-bold text-white'
              : 'font-montserrat-bold text-backgroundInput'
          }
        >
          {category.attributes.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SingleCategory;
