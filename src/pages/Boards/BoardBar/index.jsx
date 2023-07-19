import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import { Tooltip } from '@mui/material'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

const MENU_STYLES = {
  color: 'primary.main',
  bgcolor: 'white',
  border: 'none',
  paddingX: '5px',
  fontWeight: 'bold',
  borderRadius: '4px',
  '& .MuiSvgIcon-root': {
    color: 'primary.main'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

function BoardBar() {
  return (
    <Box px={2} sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      overflowX: 'auto',
      borderTop: '1px solid #27ae60'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={ MENU_STYLES }
          icon={<SpaceDashboardIcon />}
          label="CatKhanh"
          clickable
        />

        <Chip
          sx={ MENU_STYLES }
          icon={<VpnLockIcon />}
          label="Public/Private Workspace"
          clickable
        />

        <Chip
          sx={ MENU_STYLES }
          icon={<AddToDriveIcon />}
          label="Add To Google Drive"
          clickable
        />

        <Chip
          sx={ MENU_STYLES }
          icon={<BoltIcon />}
          label="Automation"
          clickable
        />

        <Chip
          sx={ MENU_STYLES }
          icon={<FilterListIcon />}
          label="Filters"
          clickable
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button variant="outlined" startIcon={ <PersonAddIcon /> }>Invite</Button>
        <AvatarGroup
          max={4}
          sx={{
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16
            }
          }}
        >
          <Tooltip title="catkhanh">
            <Avatar
              alt="Remy Sharp"
              src="https://www.tor.com/wp-content/uploads/2014/12/Hunger-Games-Katniss-pin.jpg"
            />
          </Tooltip>
          <Tooltip title="catkhanh">
            <Avatar
              alt="Remy Sharp"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvu2xgIAmRY-i_LpUe_3vzNOk9gRM5b0IZ2z6sMCqte89KBOKU_7qlmK5F5PDYNs0fm4c&usqp=CAU"
            />
          </Tooltip>
          <Tooltip title="catkhanh">
            <Avatar
              alt="Remy Sharp"
              src="data:image/jpeg;base64,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"
            />
          </Tooltip>
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar