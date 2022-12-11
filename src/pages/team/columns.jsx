import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import { Typography, Box } from "@mui/material";

const color = "#3da58a";
const color1 = "#2e7c67";

export const columns = [
  { field: "id", headerName: "ID" },
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    cellClassName: "name-column--cell",
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    headerAlign: "left",
    align: "left",
  },
  {
    field: "phone",
    headerName: "Phone Number",
    flex: 1,
  },
  {
    field: "email",
    headerName: "Email",
    flex: 1,
  },
  {
    field: "access",
    headerName: "Access",
    flex: 1,
    renderCell: ({ row: { access } }) => {
      return (
        <Box
          width="80%"
          m="0 auto"
          p="5px"
          display="flex"
          justifyContent="center"
          backgroundColor={access === "admin" ? color : color1}
          borderRadius="4px"
        >
          {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
          {access === "manager" && <SecurityOutlinedIcon />}
          {access === "user" && <LockOpenOutlinedIcon />}
          <Typography color={{ color: "#e0e0e0" }} sx={{ ml: "5px" }}>
            {access}
          </Typography>
        </Box>
      );
    },
  },
];
