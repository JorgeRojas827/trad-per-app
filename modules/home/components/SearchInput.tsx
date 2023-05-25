import { View, TextInput } from 'react-native';
/* eslint-disable @typescript-eslint/no-explicit-any */

interface IProps {
  children?: JSX.Element;
  placeholder: string;
  search: string;
  setSearch: any;
}

export function SearchInput({
  children,
  placeholder,
  search,
  setSearch,
}: IProps) {
  return (
    <View className="relative">
      <TextInput
        className={
          'mt-0 w-full font-montserrat-regular text-sm rounded-xl border-0 p-2 pl-12 bg-backgroundInput/[0.025] font-medium text-backgroundInput outline-none ring-0 focus:outline-none focus:ring-0'
        }
        placeholderTextColor="#24292E"
        placeholder={placeholder}
        autoComplete="off"
        defaultValue={search}
        onChangeText={(e) => setSearch(e)}
      />

      <View className="absolute top-1/2 left-3 -translate-y-3">{children}</View>
    </View>
  );
}
