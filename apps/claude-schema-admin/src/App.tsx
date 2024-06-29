import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { FunctionSchemaList } from "./functionSchema/FunctionSchemaList";
import { FunctionSchemaCreate } from "./functionSchema/FunctionSchemaCreate";
import { FunctionSchemaEdit } from "./functionSchema/FunctionSchemaEdit";
import { FunctionSchemaShow } from "./functionSchema/FunctionSchemaShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ClaudeSchema"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="FunctionSchema"
          list={FunctionSchemaList}
          edit={FunctionSchemaEdit}
          create={FunctionSchemaCreate}
          show={FunctionSchemaShow}
        />
      </Admin>
    </div>
  );
};

export default App;
