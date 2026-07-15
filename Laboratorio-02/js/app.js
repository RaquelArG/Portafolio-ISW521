import {
    createSearchHandler
}
from "./search.js";

import {
    compareTeams
}
from "./compare.js";

import {
    showAuthModal,
    deleteAuthToken
}
from "./auth.js";

import {
    clearTeamCard
}
from "./ui.js";



const inputA =
    document.getElementById(
        "teamAInput"
    );

const inputB =
    document.getElementById(
        "teamBInput"
    );

const dropdownA =
    document.getElementById(
        "teamADropdown"
    );

const dropdownB =
    document.getElementById(
        "teamBDropdown"
    );

const teamAContainer =
    document.getElementById(
        "teamAData"
    );

const teamBContainer =
    document.getElementById(
        "teamBData"
    );

const compareBtn =
    document.getElementById(
        "compareBtn"
    );



let selectedTeamAId = null;
let selectedTeamBId = null;



inputA.addEventListener(
    "input",
    () => {

        selectedTeamAId = null;

        clearTeamCard(
            teamAContainer
        );
    }
);



inputB.addEventListener(
    "input",
    () => {

        selectedTeamBId = null;

        clearTeamCard(
            teamBContainer
        );
    }
);



async function runComparison() {

    if (
        !selectedTeamAId ||
        !selectedTeamBId
    ) {

        alert(
            "Debe seleccionar dos equipos para comparar."
        );

        return;
    }

    try {

        await compareTeams(
            selectedTeamAId,
            selectedTeamBId,
            teamAContainer,
            teamBContainer
        );

    }
    catch (error) {

        console.error(
            error
        );

        if (
            error.message ===
            "UNAUTHORIZED"
        ) {

            showAuthModal(
                runComparison
            );

            return;
        }

        alert(
            "Ocurrió un error al realizar la comparación."
        );
    }
}



document.addEventListener(
    "click",
    (event) => {

        const clickedInsideA =
            dropdownA.contains(
                event.target
            ) ||
            inputA.contains(
                event.target
            );

        const clickedInsideB =
            dropdownB.contains(
                event.target
            ) ||
            inputB.contains(
                event.target
            );

        if (!clickedInsideA) {
            dropdownA.innerHTML = "";
        }

        if (!clickedInsideB) {
            dropdownB.innerHTML = "";
        }
    }
);


createSearchHandler(
    inputA,
    dropdownA,
    (team) => {

        selectedTeamAId =
            team._id;

        inputA.dataset.teamId =
            team._id;

        inputA.value = 
                team.name_en ||
                team.name_fa ||
                team.iso2 ||
                "Equipo"
            // getSpanishName(
            //     team.name_en ||
            //     team.name_fa ||
            //     team.iso2 ||
            //     "Equipo"
            // );

        dropdownA.innerHTML = "";
    }
);

createSearchHandler(
    inputB,
    dropdownB,
    (team) => {

        selectedTeamBId =
            team._id;

        inputB.dataset.teamId =
            team._id;

        inputB.value = 
                team.name_en ||
                team.name_fa ||
                team.iso2 ||
                "Equipo"
            // getSpanishName(
            //     team.name_en ||
            //     team.name_fa ||
            //     team.iso2 ||
            //     "Equipo"
            // );

        dropdownB.innerHTML = "";
    }
);



compareBtn.addEventListener(
    "click",
    runComparison
);

clearTeamCard(
    teamAContainer
);

clearTeamCard(
    teamBContainer
);

tokenBtn.addEventListener(
    "click",
    () => {  
        deleteAuthToken()
    }
);



console.log(
    "Comparador Mundial 2026 iniciado correctamente."
);