import type { InputExtraProps, InputProps } from './Input';
/**
 * Is basically Input but with rows = 4 to start
 */
export declare const TextAreaFrame: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("react-native").TextInput, import("@tamagui/web/types/interfaces/TamaguiComponentPropsBaseBase").TamaguiComponentPropsBaseBase & import("react-native").TextInputProps, import("@tamagui/core").TextStylePropsBase & {
    readonly placeholderTextColor?: Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
    readonly selectionColor?: Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
}, {
    size?: import("@tamagui/core").SizeTokens | undefined;
    disabled?: boolean | undefined;
    unstyled?: boolean | undefined;
}, {
    isInput: true;
    accept: {
        readonly placeholderTextColor: "color";
        readonly selectionColor: "color";
    };
} & import("@tamagui/core").StaticConfigPublic>;
export type TextAreaProps = InputProps;
export declare const TextArea: import("@tamagui/core").TamaguiComponent<Omit<import("@tamagui/core").GetFinalProps<import("@tamagui/web/types/interfaces/TamaguiComponentPropsBaseBase").TamaguiComponentPropsBaseBase & import("react-native").TextInputProps, import("@tamagui/core").TextStylePropsBase & {
    readonly placeholderTextColor?: Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
    readonly selectionColor?: Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
}, {
    size?: import("@tamagui/core").SizeTokens | undefined;
    disabled?: boolean | undefined;
    unstyled?: boolean | undefined;
}>, "rows"> & InputExtraProps, import("react-native").TextInput, import("@tamagui/web/types/interfaces/TamaguiComponentPropsBaseBase").TamaguiComponentPropsBaseBase & import("react-native").TextInputProps & InputExtraProps, import("@tamagui/core").TextStylePropsBase & {
    readonly placeholderTextColor?: Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
    readonly selectionColor?: Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
}, {
    size?: import("@tamagui/core").SizeTokens | undefined;
    disabled?: boolean | undefined;
    unstyled?: boolean | undefined;
}, {
    isInput: true;
    accept: {
        readonly placeholderTextColor: "color";
        readonly selectionColor: "color";
    };
}>;
//# sourceMappingURL=TextArea.d.ts.map