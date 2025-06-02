import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.createElement("div");
document.body.appendChild(container);

container.style.position = "fixed"
container.style.zIndex = "9999"
container.style.top = "10px";
container.style.right = "10px";

const shadowRoot = container.attachShadow({ mode: "open" });
const mountPoint = document.createElement("div");
shadowRoot.appendChild(mountPoint);

const style = document.createElement("style");
style.textContent = `
    :host {
        all: initial;
    }
    .shadow-container {
        display: flex;
        border-radius: 35px;
        background-color: #E6E0E9;
        height: 520px;
        width: 390px;
        box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
    }
    .close {
        color: #706C76;
        background: none;
        border: none;
        width: 28px;
        height: 28px;
        transition: background-color 0.1s;
        border-radius: 100%;
        margin-left: auto;
        margin-bottom: auto;
    }
    .close:hover {
        cursor: pointer;
        background-color: #d5cee2;
    }
    
`;
shadowRoot.appendChild(style);

const root = createRoot(mountPoint);
root.render(<App shadowContainer={container}/>);
