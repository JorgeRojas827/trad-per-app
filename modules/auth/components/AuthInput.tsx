import { Text, View, TextInput, Image } from 'react-native';
import { UseFormRegister, FieldErrors, Controller } from 'react-hook-form';
/* eslint-disable @typescript-eslint/no-explicit-any */

interface IProps {
  label?: string;
  name: string;
  children?: JSX.Element;
  placeholder: string;
  size?: 1 | 2 | 3;
  formControl: any;
  error: FieldErrors<any>;
  max?: boolean;
  unscale?: boolean;
  password?: boolean;
}

export function AuthInput({
  label,
  name,
  children,
  placeholder,
  formControl,
  error,
  max,
  password = false,
}: IProps) {
  return (
    <View>
      <Text className="font-montserrat-regular">{label}</Text>
      <View className="relative">
        <Controller
          control={formControl}
          name={name}
          rules={{
            required: name + ' es requerido.',
          }}
          render={({ field: { onChange, value, onBlur } }) => (
            <TextInput
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
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
              secureTextEntry={password}
            />
          )}
        />

        <View className="absolute opacity-20 top-1/2 -translate-y-3">
          {children}
        </View>
      </View>
      {(error[name] || error['']) && (
        <Text className="mt-1 flex flex-col text-xs text-red-600">
          {error[name]?.message as string}
        </Text>
      )}
    </View>
  );
}
