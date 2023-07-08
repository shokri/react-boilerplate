import { Box } from '@mui/material'

export default function PublicLayout({ children }) {
  return (
    <Box component="div">
      {children}
    </Box>
  )
}
