import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import AuthProvider from "./Context/AuthProvider.jsx";
import "./index.css";
import router from "./Router/router.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <AuthProvider>
            <div className="font-urbanist max-w-7xl mx-auto">
                <RouterProvider router={router}></RouterProvider>
            </div>
        </AuthProvider>
    </StrictMode>,
);
