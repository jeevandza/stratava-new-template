import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      900: "#1a202c",
      gradient: 'linear(to-r, teal.500, green.500)',
      lightGradient: 'linear(to-r, pink.200, blue.200)',
    },
  },
})


export default theme
