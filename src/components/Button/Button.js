import React from 'react';
import Button from '@material-ui/core/Button';

const appButton = ({ className, variant, color, children, ...rest }) => (
    <Button {...rest}
    variant={variant}
    color={color}
    className={className}
    >
      {children}
    </Button>
);

export default appButton;