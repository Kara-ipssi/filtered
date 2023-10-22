import {
  InputLabel,
  TextField,
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { ChangeEvent, useContext } from "react";
import { MainContext } from "../contexts/MainContext";

const Filter: React.FC<IFilterProps> = ({ propertyList }) => {
  const {
    searchValue,
    operatorList,
    selectedProperty,
    selectedOperator,
    handleChangeProperty,
  } = useContext(MainContext);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <span>Filtre :</span>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="propriety">Propriété</InputLabel>
        <Select
          labelId="propriety"
          id="select-propriety"
          value={selectedProperty}
          label="Propriété"
          onChange={(event: SelectChangeEvent) => {
            handleChangeProperty(event, 1);
          }}
        >
          <MenuItem value="" selected disabled>
            None
          </MenuItem>
          {propertyList &&
            propertyList.map((p) => {
              return <MenuItem value={p}>{p}</MenuItem>;
            })}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="operator">Operateur</InputLabel>
        <Select
          labelId="operator"
          id="select-operator"
          value={selectedOperator}
          label="Opérateur"
          onChange={(event: SelectChangeEvent) => {
            handleChangeProperty(event, 2);
          }}
        >
          <MenuItem value="" selected disabled>
            None
          </MenuItem>
          {operatorList &&
            operatorList.map((operator) => {
              return (
                <MenuItem value={operator.value}>{operator.fullName}</MenuItem>
              );
            })}
        </Select>
      </FormControl>

      <FormControl>
        <TextField
          id="outlined-search"
          label="Valeur"
          value={searchValue}
          type="search"
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            handleChangeProperty(event, 3);
          }}
        />
      </FormControl>
    </div>
  );
};
export default Filter;
