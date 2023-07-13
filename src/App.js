import { Refine } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import routerBindings, {
  NavigateToResource,
  DocumentTitleHandler,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import { dataProvider, liveProvider } from "@refinedev/supabase";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import "./App.css";
import authProvider from "./authProvider";
import { supabaseClient } from "./utility";
import {
  FoodstuffsList,
  FoodstuffsCreate,
  FoodstuffsEdit,
  FoodstuffsShow,
} from "./pages/foodstuffs/index";
import UserProfile from "./pages/account/profile";
import SignUp from "./pages/account/signup";
import Login from "./pages/account/login";
import HomePage from "./pages/HomePage";

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
          resources={[
            {
              name: "foodstuffs",

              list: "/foodstuffs",
              create: "/foodstuffs/create",
              edit: "/foodstuffs/edit/:id",
              show: "/foodstuffs/show/:id",
            },
          ]}
        >
          <Routes>
            <Route
              index
              element={<NavigateToResource resource="foodstuffs" />}
            />
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profile" element={<UserProfile />}></Route>
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
