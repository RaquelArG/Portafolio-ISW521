import {
    searchTeamById
}
from "./api.js";

import {
    renderTeamData
}
from "./ui.js";

export async function compareTeams(
    teamAId,
    teamBId,
    containerA,
    containerB
) {

    const [
        responseA,
        responseB
    ] = await Promise.all([

        searchTeamById(
            teamAId
        ),

        searchTeamById(
            teamBId
        )
    ]);

    const teamA =
        responseA.team ||
        responseA;

    const teamB =
        responseB.team ||
        responseB;

    renderTeamData(
        containerA,
        teamA
    );

    renderTeamData(
        containerB,
        teamB
    );
}