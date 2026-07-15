import {
    searchTeams
} from "./api.js";

import {
    renderSuggestions,
    renderNoResults,
    renderSearchError,
    clearDropdown
} from "./ui.js";

import {
    showAuthModal,
    isAuthModalVisible
} from "./auth.js";

export function createSearchHandler(
    input,
    dropdown,
    onSelect
) {

    let debounceTimer = null;
    let currentController = null;

    input.addEventListener(
        "input",
        async () => {

            clearTimeout(
                debounceTimer
            );

            debounceTimer =
                setTimeout(
                    async () => {

                        const searchText =
                            input.value.trim();

                        clearDropdown(
                            dropdown
                        );

                        if (!searchText) {
                            return;
                        }

                        try {

                            if (
                                currentController
                            ) {
                                currentController.abort();
                            }

                            currentController =
                                new AbortController();

                            const response =
                                await searchTeams(
                                    searchText,
                                    currentController.signal
                                );

                            const teams = [];

                            if (
                                response &&
                                response.team
                            ) {
                                teams.push(
                                    response.team
                                );
                            }

                            if (
                                teams.length === 0
                            ) {

                                renderNoResults(
                                    dropdown
                                );

                                return;
                            }

                            renderSuggestions(
                                dropdown,
                                teams,
                                onSelect
                            );

                        }
                        catch (error) {

                            if (
                                error.name ===
                                "AbortError"
                            ) {
                                return;
                            }

                            if (
                                error.message ===
                                "UNAUTHORIZED"
                            ) {

                                if (
                                    !isAuthModalVisible()
                                ) {

                                    showAuthModal(
                                        () => {

                                            input.dispatchEvent(
                                                new Event(
                                                    "input",
                                                    {
                                                        bubbles: true
                                                    }
                                                )
                                            );

                                        }
                                    );
                                }

                                return;
                            }

                            console.error(
                                error
                            );

                            renderSearchError(
                                dropdown
                            );
                        }
                    },
                    500
                );
        }
    );
}