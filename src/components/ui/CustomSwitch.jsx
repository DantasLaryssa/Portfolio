import Switch from "react-switch";

const CustomSwitch = ({checked, setChecked}) => {
  return (
    <Switch
      checked={checked}
      onChange={(event) => setChecked(event)}
      checkedIcon={false}
      uncheckedIcon={false}
      offHandleColor="#000"
      onHandleColor="#000"
      activeBoxShadow="#000"
      height={26}
      handleDiameter={18}
      offColor="#f5f5f5"
      onColor="#f5f5f5"
    />
  );
};

export default CustomSwitch;