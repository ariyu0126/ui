import * as react_jsx_runtime from 'react/jsx-runtime';
import * as react from 'react';
import react__default from 'react';

declare const icons: {
    readonly search: react_jsx_runtime.JSX.Element;
    readonly new: react_jsx_runtime.JSX.Element;
    readonly down: react_jsx_runtime.JSX.Element;
};
type IconKey = keyof typeof icons | 'null' | undefined;
type ButtonProps = {
    size?: 'sm' | 'md' | 'lg';
    style?: 'fill' | 'line' | 'text';
    icon?: IconKey;
    align?: 'left' | 'center' | 'right';
    color?: 'white' | 'dark' | 'point';
    disabled?: boolean;
    children?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
declare const Button: ({ size, style, icon, align, color, disabled, children, onClick, className, ...rest }: ButtonProps) => react_jsx_runtime.JSX.Element;

type ButtonGroupProps = {
    alignGroup?: 'left' | 'center' | 'right' | 'down' | 'full';
    children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;
declare const ButtonGroup: ({ alignGroup, children, ...rest }: ButtonGroupProps) => react_jsx_runtime.JSX.Element;

declare const _Button: typeof Button & {
    Group: typeof ButtonGroup;
};

type CheckboxProps = {
    name?: string;
    label?: React.ReactNode;
    value?: string;
    size?: 'sm' | 'md' | 'lg';
    checked?: boolean;
    defaultChecked?: boolean;
    disabled?: boolean;
    required?: boolean;
    className?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    color?: 'white' | 'dark' | 'point';
    [key: string]: any;
};
declare const Checkbox: ({ name, label, value, size, checked, defaultChecked, disabled, required, className, onChange, color, ...rest }: CheckboxProps) => react_jsx_runtime.JSX.Element;

type CheckboxOption = {
    label: React.ReactNode;
    value: string;
    disabled?: boolean;
};
type CheckboxGroupProps = {
    options?: CheckboxOption[];
    name?: string;
    value?: string[];
    defaultChecked?: string[];
    label?: React.ReactNode;
    direction?: 'row' | 'column';
    optionType?: 'default' | 'button';
    disabled?: boolean;
    groupDisabled?: boolean;
    required?: boolean;
    color?: 'white' | 'dark' | 'point';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    onChange?: (next: string[]) => void;
    [key: string]: any;
};
declare const CheckboxGroup: ({ options, name, value, defaultChecked, label, direction, optionType, disabled, groupDisabled, required, color, size, className, onChange, ...rest }: CheckboxGroupProps) => react_jsx_runtime.JSX.Element;

declare const _Checkbox: typeof Checkbox & {
    Group: typeof CheckboxGroup;
};

type FlexProps = {
    direction?: string;
    justify?: string;
    align?: string;
    gap?: string;
    wrap?: string;
    className?: string;
    children?: react__default.ReactNode;
} & react__default.HTMLAttributes<HTMLDivElement>;
declare const Flex: ({ direction, justify, align, gap, wrap, className, children, ...rest }: FlexProps) => react_jsx_runtime.JSX.Element;

declare const Input: {
    Text: (props: Omit<{
        [key: string]: any;
        size?: "sm" | "md" | "lg";
        type?: "text" | "password" | "number" | "tel" | "email";
        error?: boolean;
        hint?: string;
        required?: boolean;
        disabled?: boolean;
        readOnly?: boolean;
        placeholder?: string;
        label?: string;
        value?: string;
        onChange?: (value: string) => void;
        onReset?: () => void;
        className?: string;
        validate?: (value: any) => boolean | string;
        min?: number;
        max?: number;
        errorBlur?: boolean;
        errorTouched?: boolean;
    }, "type">) => react_jsx_runtime.JSX.Element;
    Password: (props: Omit<{
        [key: string]: any;
        size?: "sm" | "md" | "lg";
        type?: "text" | "password" | "number" | "tel" | "email";
        error?: boolean;
        hint?: string;
        required?: boolean;
        disabled?: boolean;
        readOnly?: boolean;
        placeholder?: string;
        label?: string;
        value?: string;
        onChange?: (value: string) => void;
        onReset?: () => void;
        className?: string;
        validate?: (value: any) => boolean | string;
        min?: number;
        max?: number;
        errorBlur?: boolean;
        errorTouched?: boolean;
    }, "type">) => react_jsx_runtime.JSX.Element;
    Email: (props: Omit<{
        [key: string]: any;
        size?: "sm" | "md" | "lg";
        type?: "text" | "password" | "number" | "tel" | "email";
        error?: boolean;
        hint?: string;
        required?: boolean;
        disabled?: boolean;
        readOnly?: boolean;
        placeholder?: string;
        label?: string;
        value?: string;
        onChange?: (value: string) => void;
        onReset?: () => void;
        className?: string;
        validate?: (value: any) => boolean | string;
        min?: number;
        max?: number;
        errorBlur?: boolean;
        errorTouched?: boolean;
    }, "type">) => react_jsx_runtime.JSX.Element;
    Number: (props: Omit<{
        [key: string]: any;
        size?: "sm" | "md" | "lg";
        type?: "text" | "password" | "number" | "tel" | "email";
        error?: boolean;
        hint?: string;
        required?: boolean;
        disabled?: boolean;
        readOnly?: boolean;
        placeholder?: string;
        label?: string;
        value?: string;
        onChange?: (value: string) => void;
        onReset?: () => void;
        className?: string;
        validate?: (value: any) => boolean | string;
        min?: number;
        max?: number;
        errorBlur?: boolean;
        errorTouched?: boolean;
    }, "type">) => react_jsx_runtime.JSX.Element;
    Tel: (props: Omit<{
        [key: string]: any;
        size?: "sm" | "md" | "lg";
        type?: "text" | "password" | "number" | "tel" | "email";
        error?: boolean;
        hint?: string;
        required?: boolean;
        disabled?: boolean;
        readOnly?: boolean;
        placeholder?: string;
        label?: string;
        value?: string;
        onChange?: (value: string) => void;
        onReset?: () => void;
        className?: string;
        validate?: (value: any) => boolean | string;
        min?: number;
        max?: number;
        errorBlur?: boolean;
        errorTouched?: boolean;
    }, "type">) => react_jsx_runtime.JSX.Element;
};

declare const Pagination: ({ total, pageSize, current, onChange, ellipsis, paginationPosition, }: {
    total: number;
    pageSize: number;
    current: number;
    onChange: (page: number) => void;
    ellipsis?: boolean;
    paginationPosition?: "topLeft" | "topRight" | "topCenter" | "bottomLeft" | "bottomRight" | "bottomCenter";
}) => react_jsx_runtime.JSX.Element;

type RadioProps = {
    name?: string;
    label?: React.ReactNode;
    value?: string;
    size?: 'sm' | 'md' | 'lg';
    checked?: boolean;
    disabled?: boolean;
    required?: boolean;
    className?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    color?: 'white' | 'dark' | 'point';
    [key: string]: any;
};
declare const Radio: ({ name, label, value, size, checked, disabled, required, className, onChange, color, ...rest }: RadioProps) => react_jsx_runtime.JSX.Element;

type RadioOption = {
    label: React.ReactNode;
    value: string;
};
type RadioGroupProps = {
    options?: RadioOption[];
    name?: string;
    value?: string;
    checked?: string;
    label?: string;
    direction?: 'row' | 'column';
    optionType?: 'default' | 'button';
    children?: React.ReactNode;
    disabled?: boolean;
    required?: boolean;
    color?: 'white' | 'dark' | 'point';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    [key: string]: any;
};
declare const RadioGroup: ({ options, name, value, checked, label, direction, optionType, children, disabled, required, color, size, className, onChange, ...rest }: RadioGroupProps) => react_jsx_runtime.JSX.Element;

declare const _Radio: typeof Radio & {
    Group: typeof RadioGroup;
};

declare const Select: ({ options, size, color, minWidth, maxWidth, disabledValues, defaultSelected, className, }: {
    options: {
        value: string;
        name: string;
        disabled?: boolean;
    }[];
    size?: "sm" | "md" | "lg";
    color?: "white" | "dark" | "point";
    minWidth?: string;
    maxWidth?: string;
    disabledValues?: boolean;
    defaultSelected?: {
        value: string;
    };
    className?: string;
}) => react_jsx_runtime.JSX.Element;

type SourceCodeViewerProps = {
    code: string;
    btnText?: string;
    hidden?: boolean;
    copy?: boolean;
    className?: string;
};
declare const SourceCodeViewer: ({ code, btnText, hidden, copy, className, }: SourceCodeViewerProps) => react_jsx_runtime.JSX.Element;

declare const Table: ({ caption, bordered, scroll, dataSource, columns, footerContent, pagination, paginationProps, }: {
    caption?: string;
    bordered?: boolean;
    scroll?: boolean;
    dataSource: any[];
    columns: any[];
    footerContent?: string;
    pagination?: "topLeft" | "topRight" | "topCenter" | "bottomLeft" | "bottomRight" | "bottomCenter" | "none";
    paginationProps?: {
        total: number;
        pageSize: number;
        current: number;
        onChange: (page: number) => void;
        ellipsis?: boolean;
    };
}) => react_jsx_runtime.JSX.Element;

declare const Textarea: ({ resize, className, ...rest }: {
    resize?: "both" | "none" | "horizontal" | "vertical";
    className?: string;
}) => react_jsx_runtime.JSX.Element;

type TypographyProps = {
    className?: string;
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    title?: React.ReactNode;
    titleColor?: string;
    titleClass?: string;
    titleWeight?: string;
    text?: React.ReactNode;
    textWeight?: string;
    /** alias for textWeight to support existing usages */
    weight?: string;
    textClass?: string;
    textColor?: string;
    ptag?: boolean;
    size?: string;
    ellipsis?: string;
    children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;
declare const Typography: {
    ({ className, level, title, titleColor, titleClass, titleWeight, text, textWeight, weight, textClass, textColor, ptag, size, ellipsis, ...rest }: TypographyProps): react_jsx_runtime.JSX.Element;
    Title: ({ level, title, titleClass, children, titleColor, titleWeight, ...rest }: {
        level?: 1 | 2 | 3 | 4 | 5 | 6;
        title?: React.ReactNode;
        titleClass?: string;
        children?: React.ReactNode;
        titleColor?: string;
        titleWeight?: string;
    } & react.HTMLAttributes<HTMLHeadingElement>) => react_jsx_runtime.JSX.Element | null;
    Text: ({ textWeight, weight, text, children, textClass, ptag, textColor, size, ellipsis, ...rest }: {
        textWeight?: "100" | "400" | "700" | string;
        weight?: "100" | "400" | "700" | string;
        text?: React.ReactNode;
        children?: React.ReactNode;
        textClass?: string;
        ptag?: boolean;
        textColor?: string;
        size?: "default" | "small" | "xsmall" | string;
        ellipsis?: string | number;
    } & react.HTMLAttributes<HTMLDivElement> & react.HTMLAttributes<HTMLParagraphElement>) => react_jsx_runtime.JSX.Element | null;
};

type SvgProps = React.SVGProps<SVGSVGElement>;
declare const Icon: {
    readonly search: (props: SvgProps) => react_jsx_runtime.JSX.Element;
    readonly newWindow: (props: SvgProps) => react_jsx_runtime.JSX.Element;
    readonly down: (props: SvgProps) => react_jsx_runtime.JSX.Element;
    readonly browser: (props: SvgProps) => react_jsx_runtime.JSX.Element;
    readonly arrowDown: (props: SvgProps) => react_jsx_runtime.JSX.Element;
    readonly arrowLeft: (props: SvgProps) => react_jsx_runtime.JSX.Element;
    readonly arrowLeftDouble: (props: SvgProps) => react_jsx_runtime.JSX.Element;
    readonly arrowRightDouble: (props: SvgProps) => react_jsx_runtime.JSX.Element;
    readonly arrowRight: (props: SvgProps) => react_jsx_runtime.JSX.Element;
    readonly info: (props: SvgProps) => react_jsx_runtime.JSX.Element;
    readonly code: (props: SvgProps) => react_jsx_runtime.JSX.Element;
    readonly eyeOpen: (props: SvgProps) => react_jsx_runtime.JSX.Element;
    readonly eyeOff: (props: SvgProps) => react_jsx_runtime.JSX.Element;
    readonly close: (props: SvgProps) => react_jsx_runtime.JSX.Element;
};

export { _Button as Button, _Checkbox as Checkbox, Flex, Icon, Input, Pagination, _Radio as Radio, Select as Selectbox, SourceCodeViewer, Table, Textarea, Typography };
