import {
  ActionIcon,
  Badge,
  Button,
  Card,
  Checkbox,
  createTheme,
  Modal,
  NavLink,
  PasswordInput,
  Textarea,
  TextInput,
  ThemeIcon
} from '@mantine/core';

export const os7Theme = createTheme({
  activeClassName: '',
  colors: {
    os7: [
      '#f2f5fb',
      '#e4e9f4',
      '#cbd4e6',
      '#a4b2cf',
      '#7788af',
      '#566789',
      '#303b57',
      '#151d33',
      '#080d20',
      '#030717'
    ]
  },
  primaryColor: 'os7',
  primaryShade: 8,
  defaultRadius: 'md',
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", sans-serif',
  headings: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", sans-serif',
    fontWeight: '700'
  },
  components: {
    ActionIcon: ActionIcon.extend({
      defaultProps: {
        radius: 'md',
        size: 'lg'
      }
    }),
    Badge: Badge.extend({
      defaultProps: {
        radius: 'md',
        variant: 'light'
      }
    }),
    Button: Button.extend({
      defaultProps: {
        radius: 'md',
        size: 'md'
      }
    }),
    Card: Card.extend({
      defaultProps: {
        radius: 'lg',
        shadow: 'sm',
        withBorder: true
      }
    }),
    Checkbox: Checkbox.extend({
      defaultProps: {
        color: 'os7',
        radius: 'sm',
        size: 'md'
      }
    }),
    Modal: Modal.extend({
      defaultProps: {
        centered: true,
        radius: 'lg'
      }
    }),
    NavLink: NavLink.extend({
      defaultProps: {
        variant: 'light'
      },
      styles: {
        label: {
          fontSize: 'inherit'
        },
        root: {
          borderRadius: 'var(--mantine-radius-md)'
        }
      }
    }),
    PasswordInput: PasswordInput.extend({
      defaultProps: {
        radius: 'md',
        size: 'md'
      }
    }),
    Textarea: Textarea.extend({
      defaultProps: {
        autosize: true,
        minRows: 3,
        radius: 'md',
        size: 'md'
      }
    }),
    TextInput: TextInput.extend({
      defaultProps: {
        radius: 'md',
        size: 'md'
      }
    }),
    ThemeIcon: ThemeIcon.extend({
      defaultProps: {
        color: 'os7',
        radius: 'md'
      }
    })
  }
});
