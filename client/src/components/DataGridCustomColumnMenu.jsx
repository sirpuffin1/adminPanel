import { GridColumnMenuContainer, GridColumnMenuFilterItem, GridColumnMenuHideItem } from "@mui/x-data-grid";
  
  const CustomColumnMenu = (props) => {
    const { hideMenu, open, colDef } = props;
    return (
      <GridColumnMenuContainer
        hideMenu={hideMenu}
        open={open}
        colDef={colDef}
      >
        <GridColumnMenuFilterItem onClick={hideMenu} colDef={colDef}/>
        <GridColumnMenuHideItem onClick={hideMenu} colDef={colDef}/>
      </GridColumnMenuContainer>
    );
  };
  
  export default CustomColumnMenu;