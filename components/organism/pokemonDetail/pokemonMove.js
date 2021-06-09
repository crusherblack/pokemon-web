import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Chip from "@material-ui/core/Chip";
import PropTypes from "prop-types";

const PokemonMoveComponent = ({ pokemon }) => {
  return (
    <section className="moves-container">
      <Accordion elevation={0} className="abilities-container">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h4 className="text-capitalize">Moves</h4>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            {pokemon.moves.map((move, index) => (
              <Chip
                label={move.move.name}
                variant="default"
                size="small"
                key={index}
                style={{
                  marginRight: "5px",
                  marginBottom: "5px",
                }}
              />
            ))}
          </div>
        </AccordionDetails>
      </Accordion>
    </section>
  );
};

PokemonMoveComponent.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default PokemonMoveComponent;
