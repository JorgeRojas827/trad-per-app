import { Text, View, TextInput, Image } from 'react-native';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
/* eslint-disable @typescript-eslint/no-explicit-any */

interface IProps {
  label?: string;
  name: string;
  children?: JSX.Element;
  placeholder: string;
  size?: 1 | 2 | 3;
  formRegister?: UseFormRegister<any>;
  error?: FieldErrors<any>;
  max?: boolean;
  unscale?: boolean;
}

export function AuthInput({
  label,
  name,
  children,
  placeholder,
  formRegister,
  error,
  max,
  unscale = false,
}: IProps) {
  return (
    <View>
      <Text className="font-montserrat-regular">{label}</Text>
      <View className="relative">
        <TextInput
          maxLength={max ? 6 : 300}
          className={
            'mt-0 w-full font-montserrat-regular text-sm border-0 p-2 pl-8 border-b border-b-[#1B1B1B] border-opacity-10 font-medium text-neutral-800 outline-none ring-0 focus:outline-none focus:ring-0'
          }
          style={{
            borderBottomColor: 'rgba(27, 27, 27, 0.09)',
          }}
          placeholderTextColor="rgba(0, 0, 0, 0.21)"
          placeholder={placeholder}
          autoComplete="off"
        />
        <View className="absolute opacity-20 top-1/2 -translate-y-3">
          {children}
        </View>
        {/* {(error[name] || error['']) && (
          <Text className="mt-1 flex flex-col text-xs text-secondary-900">
            {error[name]?.message as string}
            {error[name]?.message && <br />}
            {error['']?.message as string}
          </Text>
        )} */}
      </View>
    </View>
  );
}
