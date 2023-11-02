import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Route path = '/'  />
    {/* The rest of your app goes here */}
  </BrowserRouter>
);