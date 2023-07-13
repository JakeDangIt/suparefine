import { GitHubBanner, Refine, WelcomePage } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import routerBindings, {
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import { dataProvider, liveProvider } from "@refinedev/supabase";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import authProvider from "./authProvider";
import { supabaseClient } from "./utility";
import { CountriesCreate, CountriesEdit, CountriesList, CountriesShow } from "./pages/countries";
import { FoodstuffsList, FoodstuffsCreate, FoodstuffsEdit, FoodstuffsShow } from "./pages/foodstuffs"
import HomePage from "./pages/HomePage.jsx";



function App() {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <Refine
          dataProvider={dataProvider(supabaseClient)}
          liveProvider={liveProvider(supabaseClient)}
          authProvider={authProvider}
          routerProvider={routerBindings}
          options={{
            syncWithLocation: true,
            warnWhenUnsavedChanges: true,
          }}
          resources={[{
            /** 
             *
             * Resource is default with default paths, you need to add the components to the paths accordingly.
             * You can also add custom paths to the resource.
             * 
             * Use `<CountriesList/>` component at `/countries` path.
             * Use `<CountriesCreate/>` component at `/countries/create` path.
             * Use `<CountriesEdit/>` component at `/countries/edit/:id` path.
             * Use `<CountriesShow/>` component at `/countries/show/:id` path.
             *
             **/
            name: "countries",

            list: "/countries",
            create: "/countries/create",
            edit: "/countries/edit/:id",
            show: "/countries/show/:id"
          }, {
            /** 
             *
             * Resource is default with default paths, you need to add the components to the paths accordingly.
             * You can also add custom paths to the resource.
             * 
             * Use `<FoodstuffsList/>` component at `/foodstuffs` path.
             * Use `<FoodstuffsCreate/>` component at `/foodstuffs/create` path.
             * Use `<FoodstuffsEdit/>` component at `/foodstuffs/edit/:id` path.
             * Use `<FoodstuffsShow/>` component at `/foodstuffs/show/:id` path.
             *
             **/
            name: "foodstuffs",

            list: "/foodstuffs",
            create: "/foodstuffs/create",
            edit: "/foodstuffs/edit/:id",
            show: "/foodstuffs/show/:id"
          }]}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/foodstuffs">
              <Route index element={<FoodstuffsList />} />
              <Route path="create" element={<FoodstuffsCreate />} />
              <Route path="edit/:id" element={<FoodstuffsEdit />} />
              <Route path="show/:id" element={<FoodstuffsShow />} />
            </Route>
          </Routes>

          <RefineKbar />
          <UnsavedChangesNotifier />
          <DocumentTitleHandler />
        </Refine>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
