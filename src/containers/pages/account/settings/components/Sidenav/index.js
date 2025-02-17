/**
=========================================================
* Argon Dashboard 2 PRO MUI - v3.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-mui
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";

// Argon Dashboard 2 PRO MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Argon Dashboard 2 PRO MUI contexts
import { useArgonController } from "context";

function Sidenav() {
  const [controller] = useArgonController();
  const { darkMode } = controller;

  const sidenavItems = [
    { icon: <i className="ni ni-books" />, label: "basic info", href: "basic-info" },
    { icon: <i className="ni ni-atom" />, label: "change password", href: "change-password" },
  ];

  const renderSidenavItems = sidenavItems.map(({ icon, label, href }, key) => {
    const itemKey = `item-${key}`;

    return (
      <ArgonBox key={itemKey} component="li" pt={key === 0 ? 0 : 1}>
        <ArgonTypography
          component="a"
          href={`#${href}`}
          variant="button"
          fontWeight="regular"
          color="text"
          textTransform="capitalize"
          sx={({
            borders: { borderRadius },
            functions: { pxToRem, rgba },
            palette: { light },
            transitions,
          }) => ({
            display: "flex",
            alignItems: "center",
            borderRadius: borderRadius.md,
            padding: `${pxToRem(10)} ${pxToRem(16)}`,
            transition: transitions.create("background-color", {
              easing: transitions.easing.easeInOut,
              duration: transitions.duration.shorter,
            }),

            "&:hover": {
              backgroundColor: rgba(light.main, darkMode ? 0.1 : 1),
            },
          })}
        >
          <ArgonBox fontSize="16px" color="secondary" mr={1.5} lineHeight={0}>
            {icon}
          </ArgonBox>
          {label}
        </ArgonTypography>
      </ArgonBox>
    );
  });

  return (
    <Card
      sx={{
        borderRadius: ({ borders: { borderRadius } }) => borderRadius.lg,
        position: "sticky",
        top: "1%",
      }}
    >
      <ArgonBox
        component="ul"
        display="flex"
        flexDirection="column"
        p={2}
        m={0}
        sx={{ listStyle: "none" }}
      >
        {renderSidenavItems}
      </ArgonBox>
    </Card>
  );
}

export default Sidenav;
