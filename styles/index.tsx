import styled, { css } from 'styled-components'
import theme from 'styled-theming'
import colors from '../constants/colors';

export const color = theme.variants('mode', 'variant', {
  default: { light: colors.white, dark: colors.black },
  primary: { light: colors.primary, dark: colors.primary },
  success: { light: colors.success, dark: colors.success },
  warning: { light: colors.warning, dark: colors.warning },
});

export const onColor = theme.variants('mode', 'variant', {
  default: { light: colors.black, dark: colors.white },
  primary: { light: colors.white, dark: colors.white },
  success: { light: colors.white, dark: colors.white },
  warning: { light: colors.white, dark: colors.white },
});

const buttonBoxShadow = theme('mode', {
  light: `box-shadow: 0px 0px 4px ${colors.black}`,
  dark: `box-shadow: 0px 0px 4px ${colors.primary}`,
})

export const borderRadius = {
  small: '0.5rem',
  medium: '1rem',
  large: '2rem',
  rounded: '50%'
}

export const StyledButton = styled.button`
position: relative;
text-decoration: none;
font-size: 1.5rem;
font-family: inherit;
/* font-weight: bold; */
padding: 1rem 2rem;
border-radius: 8px;
/* border: 2px solid transparent; */
border: none;
cursor: pointer;
user-select: none;
${css`${buttonBoxShadow}`};
background-color: ${color};
color: ${onColor || colors.black};
`

export const StyledSpan = styled.span`
  color: ${color};
`

export const StyledContainer = styled.div`
  background-color: ${color};
  color: ${onColor};
`

StyledButton.defaultProps = {
  variant: 'default',
};

StyledContainer.defaultProps = {
  variant: 'default'
}

StyledSpan.defaultProps = {
  variant: 'default'
}
