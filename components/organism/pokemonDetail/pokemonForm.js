import TextField from "@material-ui/core/TextField";
import Button from "@/components/atoms/button";
import PropTypes from "prop-types";

const PokemonFormComponent = ({
  isPokeballZero,
  addPokeBall,
  isCatch,
  formik,
  setIsResult,
}) => {
  return isPokeballZero ? (
    <div className="result-container">
      <img src="/images/zeropokeball.png" alt="zero" />
      <h2 className="text-center font-weight-bold text-danger ">
        You Are Run Out Of Pokeball
      </h2>
      <h2
        className="text-center font-weight-bold text-success"
        onClick={addPokeBall}
      >
        <a href="https://www.youtube.com/c/tahucoding" target="_blank">
          Still want more? Subscribe Tahu Coding
        </a>
      </h2>
    </div>
  ) : isCatch ? (
    <>
      <div className="result-container">
        <img src="/images/catch.png" alt="catch" />
        <h2 className="text-center font-weight-bold ">Success Catch</h2>
      </div>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            id="outlined-basic"
            label="Give Your Pokemon's Name"
            variant="outlined"
            color="secondary"
            name="pokemonName"
            className="input"
            value={formik.values.pokemonName}
            onChange={formik.handleChange}
            error={
              formik.touched.pokemonName && Boolean(formik.errors.pokemonName)
            }
            helperText={formik.touched.pokemonName && formik.errors.pokemonName}
          />
          <Button
            type="submit"
            style={{
              width: "100%",
              marginTop: "15px",
            }}
          >
            Addopt Pokemon
          </Button>
        </form>
      </div>
    </>
  ) : (
    <div className="result-container" onClick={() => setIsResult(false)}>
      <img src="/images/notcatch.jpg" alt="fail" />
      <h2 className="text-center font-weight-bold ">Fail To Catch</h2>
    </div>
  );
};

PokemonFormComponent.propTypes = {
  isPokeballZero: PropTypes.bool.isRequired,
  addPokeBall: PropTypes.func.isRequired,
  isCatch: PropTypes.bool.isRequired,
  formik: PropTypes.object.isRequired,
  setIsResult: PropTypes.func.isRequired,
};

export default PokemonFormComponent;
