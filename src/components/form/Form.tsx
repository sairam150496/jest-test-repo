import { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { IFormInputProps } from "../interfaces";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export const Form = (props: IFormInputProps) => {
  const classes = useStyles();
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<number>(0);
  const [userId, setUserId] = useState<string>("");

  useEffect(() => {
    if (props.name) {
      setName(props.name);
    }
  }, [props.name]);
  useEffect(() => {
    if (props.email) {
      setEmail(props.email);
    }
  }, [props.email]);
  useEffect(() => {
    if (props.phoneNumber) {
      setPhoneNumber(props.phoneNumber);
    }
  }, [props.phoneNumber]);
  useEffect(() => {
    if (props.userId) {
      setUserId(props.userId);
    }
  }, [props.userId]);
  const handleName = (e: any) => {
    setName(e.target.value);
  };
  const handlePhoneNumber = (e: any) => {
    setPhoneNumber(e.target.value);
  };
  const handleEmail = (e: any) => {
    setEmail(e.target.value);
  };
  const handleUserId = (e: any) => {
    setUserId(e.target.value);
  };

  const handleSubmit = () => {
    props.onSubmit({ name, phoneNumber, email, userId });
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          required
          value={email}
          onChange={handleEmail}
          id="outlined-required-email"
          label="Email"
          type="email"
          variant="outlined"
        />
        <TextField
          required
          value={name}
          onChange={handleName}
          id="outlined-required-name"
          label="Name"
          variant="outlined"
        />
        <TextField
          required
          value={userId}
          onChange={handleUserId}
          id="outlined-required-uid"
          label="User Id"
          variant="outlined"
        />
        <TextField
          value={phoneNumber}
          onChange={handlePhoneNumber}
          id="outlined-number"
          label="Phone Number"
          type="tel"
          InputLabelProps={{
            shrink: true,
          }}
          required
          variant="outlined"
        />
      </div>
      <div
        style={{
          paddingLeft: "10px",
        }}
      >
        <Button
          color="primary"
          onClick={handleSubmit}
          variant="contained"
          id="form-save-button"
        >
          Save
        </Button>
      </div>
    </form>
  );
};
