import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  Typography
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ListingSection({ name, data }) {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6">{name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <List>
          {data.map((item, idx) => (
            <ListItem key={idx}>{item}</ListItem>
          ))}
        </List>
      </AccordionDetails>
    </Accordion>
  );
}
