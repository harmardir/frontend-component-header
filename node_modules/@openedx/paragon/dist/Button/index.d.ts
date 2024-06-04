import React from 'react';
import { type ButtonProps as BaseButtonProps } from 'react-bootstrap/Button';
import { type ButtonGroupProps as BaseButtonGroupProps } from 'react-bootstrap/ButtonGroup';
import { type ButtonToolbarProps } from 'react-bootstrap/ButtonToolbar';
import type { ComponentWithAsProp } from '../utils/types/bootstrap';
interface ButtonProps extends Omit<BaseButtonProps, 'size'> {
    /**
     * An icon component to render. Example:
     * ```
     * import { Close } from '@openedx/paragon/icons';
     * <Button iconBefore={Close}>Close</Button>
     * ```
     */
    iconBefore?: React.ComponentType;
    /**
     * An icon component to render. Example:
     * ```
     * import { Close } from '@openedx/paragon/icons';
     * <Button iconAfter={Close}>Close</Button>
     * ```
     */
    iconAfter?: React.ComponentType;
    size?: 'sm' | 'md' | 'lg' | 'inline';
}
type ButtonType = ComponentWithAsProp<'button', ButtonProps> & {
    Deprecated?: any;
};
declare const Button: ButtonType;
interface ButtonGroupProps extends Omit<BaseButtonGroupProps, 'size'> {
    size?: 'sm' | 'md' | 'lg' | 'inline';
}
declare const ButtonGroup: ComponentWithAsProp<'div', ButtonGroupProps>;
declare const ButtonToolbar: ComponentWithAsProp<'div', ButtonToolbarProps>;
export default Button;
export { ButtonGroup, ButtonToolbar };
