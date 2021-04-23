import { TableComponent } from "./components";
import { useState } from "react";
import { ITableRowProps } from "./components/interfaces";
import { v4 } from "uuid";
import { Dialogue } from "./components/dialogue/Dialogue";

function App() {
  const [userInfo, setUserInfo] = useState<Map<string, ITableRowProps>>(
    new Map()
  );
  const [selectedId, setSelectedId] = useState<string>("");
  const [shouldOpenModel, setShouldOpenModel] = useState<boolean>(false);

  const onDeleteClick = (e: any) => {
    const id = e.target.id.split("_")[1];
    setUserInfo((uInfo) => {
      uInfo.delete(id);
      return new Map(uInfo);
    });
  };
  const onEditClick = (e: any) => {
    const id = e.target.id.split("_")[1];
    setSelectedId(id);

    setShouldOpenModel(true);
  };

  const onAddClick = (e: any) => {
    setShouldOpenModel(true);
  };

  const formSubmitHandler = (data: ITableRowProps) => {
    setUserInfo((userD) => new Map(userD.set(selectedId || v4(), data)));

    setSelectedId("");

    setShouldOpenModel(false);
  };

  const onClickXMark = () => {
    setShouldOpenModel(false);
  };

  return (
    <>
      <TableComponent
        rows={new Map(userInfo)}
        onAddClick={onAddClick}
        onEditClick={onEditClick}
        onDeleteClick={onDeleteClick}
      />
      <Dialogue
        onSubmit={formSubmitHandler}
        open={shouldOpenModel}
        onClickXMark={onClickXMark}
        {...userInfo.get(selectedId)!}
      />
    </>
  );
}

export default App;
