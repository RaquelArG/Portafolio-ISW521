import { CONFIG, CONFIG_TOKEN } from "./config.js";

const modal =
    document.getElementById("authModal");

const tokenInput =
    document.getElementById("newToken");

const saveTokenBtn =
    document.getElementById("saveTokenBtn");


let pendingRetry = null;

export function showAuthModal(onRetry = null) {

    pendingRetry = onRetry;

    modal.classList.remove("hidden");
}

export function hideAuthModal() {

    modal.classList.add("hidden");
}

export function isAuthModalVisible() {

    return !modal.classList.contains(
        "hidden"
    );
}

export function deleteAuthToken() {
    CONFIG_TOKEN.TOKEN = null;
    showAuthModal();
}

saveTokenBtn.addEventListener(
    "click",
    () => {

        const newToken =
            tokenInput.value.trim();

        if (!newToken) {
            alert(
                "Debe ingresar un token."
            );

            return;
        }

        if(newToken !== CONFIG.TOKEN) {
            alert(
                "Debe ingresar un token JWT válido."
            );

            return
        }


        CONFIG_TOKEN.TOKEN = newToken;

        tokenInput.value = "";

        hideAuthModal();


        if (typeof pendingRetry === "function") {

            const retry = pendingRetry;

            pendingRetry = null;

            retry();
        }
    }
);
