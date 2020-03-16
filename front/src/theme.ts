import { createMuiTheme, Theme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
export interface ThemeApp {
  name: string,
  theme: Theme
}

export const DarkTheme: ThemeApp = {
  name: "DARK",
  theme: createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#00D394',
      },
      secondary: {
        main: '#302D2D',
      },
      error: {
        main: red.A400,
      },
      background: {
        default: '#121212',
      },
      text: {
        primary: 'rgba(255, 255, 255, 0.87)',
        secondary: 'rgba(255, 255, 255, 0.60)',
        disabled: 'rgba(255, 255, 255, 0.38)'
      }
    },
  })
};

export const LightTheme: ThemeApp = {
  name: "LIGHT",
  theme: createMuiTheme({
    palette: {
      type: 'light',
      primary: {
        main: '#00D394',
      },
      secondary: {
        main: '#302D2D',
      },
      error: {
        main: red.A400,
      },
      background: {
        default: '#fff',
      },
      text: {
        primary: 'rgba(0, 0, 0, 0.87)',
        secondary: 'rgba(0, 0, 0, 0.60)',
        disabled: 'rgba(0, 0, 0, 0.38)'
      },
    },
  })
};
