import { useRecoilValue } from "recoil"
import Header from "./Header"
import { App as AppStyled } from "./styles/App"

import { isLightTheme } from "./recoil/RootState"
import Table from "./Table";

function App() {
  const isLight = useRecoilValue(isLightTheme);
  return (
    <AppStyled theme={isLight}>
        <Header/>
        <Table/>
    </AppStyled>
  )
}

export default App
