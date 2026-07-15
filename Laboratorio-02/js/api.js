
import { CONFIG, CONFIG_TOKEN } from "./config.js";

export async function apiFetch(
    endpoint,
    options = {},
    signal = null
) {

    const response = await fetch(
        `${CONFIG.BASE_URL}${endpoint}`,
        {
            ...options,
            signal,
            headers: {
                Authorization: `Bearer ${CONFIG_TOKEN.TOKEN}`,
                "Content-Type": "application/json",
                ...(options.headers || {})
            }
        }
    );

    if (response.status === 401) {

        throw new Error("UNAUTHORIZED");
    }

    if (response.status === 404) {

        return [];
    }

    if (!response.ok) {

        throw new Error(
            `HTTP_ERROR_${response.status}`
        );
    }

    return await response.json();
}

export async function searchTeams(
    text,
    signal
) {

    return await apiFetch(
        `/get/team?name=${encodeURIComponent(text)}`,
        {},
        signal
    )
    .catch( err => {
        console.error(err);
    });
}

export async function searchTeamById(
    teamId,
    signal
) {
    return await apiFetch(
        `/get/team/${encodeURIComponent(teamId)}`,
        {},
        signal
    )
    .catch( err => {
        console.error(err);
    });
}

export async function getTeams() {
    return await apiFetch(
        `/get/teams`
    )
    .catch( err => {
        console.error(err);
    });
}