import { cyan, deepOrange, green, orange, teal } from '@mui/material/colors'
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

// Create a theme instance.
const theme = extendTheme({
  trello: {
    appBarHeight: '58px',
    boardBarHeight: '60px'
  },
  colorSchemes: {
    light: {
      palette: {
        primary: green,
        secondary: deepOrange
      }
    },
    dark: {
      palette: {
        primary: cyan,
        secondary: orange
      }
    }
  },
  components: {
    // Name of the component
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': {
            width: '8px',
            height: '8px'
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '',
            borderRadius: '8px'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '',
            borderRadius: '8px'
          }
        }
      }
    },

    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          textTransform: 'none',
          fontWeight: 'bold'
        }
      }
    },

    MuiInputLabel: {
      styleOverrides: {
        // Name of the slot
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: '0.875rem'
        })
      }
    },

    MuiOutlinedInput: {
      styleOverrides: {
        // Name of the slot
        root: ({ theme }) => {
          return {
            color: theme.palette.primary.main,
            fontSize: '0.875rem',
            '&:hover': {
              '.MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.primary.light
              }
            }
          }
        }
      }
    }
  }
  // ...other properties
})

export default theme