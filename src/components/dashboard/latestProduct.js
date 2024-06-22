import {
  Box,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
  Image,
  Avatar,
  ListItemAvatar,
  Button,
} from "@mui/material";

import Card from "@mui/material/Card";

export function LatestProduct({ products = [] }) {
  return (
    <Card sx={{ borderWidth: 1, borderRadius: 3, margin: 3 }}>
      <CardHeader title="Latest Products" variant="h5" fontSize={15} />
      <Divider />

      <List>
        {products.map((item, index) => (
          <Box height={"55px"} key={item.id}>
            <Stack
              direction="row"
              margin={2}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <ListItemAvatar>
                <Box
                  component="img"
                  src={item.image}
                  sx={{ borderRadius: 2, height: "48px", width: "48px" }}
                />
              </ListItemAvatar>

              <ListItemText primary={item.name} />
            </Stack>

            <Divider />
          </Box>
        ))}
      </List>

      <Stack direction={"row-reverse"} marginRight={5}>
        <Button height={45}>View all </Button>
      </Stack>
    </Card>
  );
}

export default LatestProduct;
