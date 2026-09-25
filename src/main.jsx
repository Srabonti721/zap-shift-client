import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import "./index.css";
import router from "./Router/router.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <div className="font-urbanist max-w-7xl mx-auto">
            <RouterProvider router={router}></RouterProvider>
        </div>
    </StrictMode>,
);
