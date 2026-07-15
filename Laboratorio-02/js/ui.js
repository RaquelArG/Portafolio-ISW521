// import {
//     getSpanishName
// } from "./translations.js";

export function clearDropdown(
    dropdown
) {

    dropdown.innerHTML = "";
}

export function renderSuggestions(
    dropdown,
    teams,
    onSelect
) {

    clearDropdown(dropdown);

    teams.forEach(team => {

        const item =
            document.createElement("div");

        item.classList.add(
            "suggestion-item"
        );

        const teamName =
            team.name_en ||
            team.name_fa ||
            team.iso2 ||
            "Equipo";

        item.textContent = teamName
            // getSpanishName(teamName);

        item.addEventListener(
            "click",
            () => {

                clearDropdown(
                    dropdown
                );

                onSelect(team);
            }
        );

        dropdown.appendChild(item);
    });
}

export function renderNoResults(
    dropdown
) {

    dropdown.innerHTML = "";

    const item =
        document.createElement("div");

    item.classList.add(
        "suggestion-item"
    );

    item.textContent =
        "No se encontraron resultados";

    dropdown.appendChild(item);
}

export function renderSearchError(
    dropdown
) {

    dropdown.innerHTML = "";

    const item =
        document.createElement("div");

    item.classList.add(
        "suggestion-item"
    );

    item.textContent =
        "Ocurrió un error al buscar. Intenta de nuevo.";

    dropdown.appendChild(item);
}

export function clearTeamCard(
    container
) {

    container.innerHTML = `
        <div class="empty-state">
            Selecciona un equipo para comenzar
        </div>
    `;
}

export function renderTeamData(
    container,
    team
) {

    container.innerHTML = "";

    if (!team) {

        clearTeamCard(container);

        return;
    }

    const title =
        document.createElement("h3");

    title.style.marginBottom =
        "20px";

    title.style.color =
        "#d4af37";

    title.style.textAlign =
        "center";

    title.textContent =  team.name_en ||
            team.name_fa ||
            team.iso2 ||
            "Equipo";
        // getSpanishName(
        //     team.name_en ||
        //     team.name_fa ||
        //     team.iso2 ||
        //     "Equipo"
        // );

    container.appendChild(title);

    Object.entries(team).forEach(
        ([key, value]) => {

            if (
                value === null ||
                value === undefined ||
                value === ""
            ) {
                return;
            }

            const row =
                document.createElement("div");

            row.classList.add(
                "team-detail"
            );

            row.innerHTML = `
                <span class="label">
                    ${formatLabel(key)}
                </span>

                <span class="value">
                    ${formatValue(key, value)}
                </span>
            `;

            container.appendChild(
                row
            );
        }
    );
}

function formatValue(
    key,
    value
) {

    if (
        key.toLowerCase().includes("team") ||
        key.toLowerCase().includes("name")
    ) {
        String(value)
        // return getSpanishName(
        //     String(value)
        // );
    }

    return value;
}

function formatLabel(
    key
) {

    const dictionary = {

        fifa_team: "Selección",
        name: "Nombre",
        group: "Grupo",
        rank: "Ranking FIFA",
        fifa_rank: "Ranking FIFA",
        federation: "Federación",
        confederation: "Confederación",
        appearances: "Participaciones",
        titles: "Títulos",
        coach: "Director Técnico",
        captain: "Capitán",
        nickname: "Apodo",
        code: "Código FIFA"

    };

    return (
        dictionary[key] ||
        key
            .replaceAll("_", " ")
            .replace(
                /\b\w/g,
                char => char.toUpperCase()
            )
    );
}