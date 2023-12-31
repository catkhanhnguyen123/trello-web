import Box from '@mui/material/Box'
import Card from './Card/Card'

function ListCards() {
  return (
    <Box sx={{
      p: '0 5px',
      m: '0 5px',
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      overflowX: 'hidden',
      overflowY: 'auto',
      maxHeight: (theme) => `calc(
            ${theme.trello.boardContentHeight} -
            ${theme.spacing(5)} -
            ${theme.trello.columnHeaderHeight} -
            ${theme.trello.columnHeaderHeight}
        )`,
      '&::-webkit-scrollbar-thumb': { backgroundColor: '' },
      '&::-webkit-scrollbar-thumb:hover': { backgroundColor: '' }
    }}>
      <Card />
    </Box>
  )
}

export default ListCards