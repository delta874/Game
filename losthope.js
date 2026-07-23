// =====================
// LOST HOPE MODE
// =====================

let lostHopeNightNumber = 1;


function lostHopeNight(){

    lostHopeNightNumber = night;


    setScene(`

    <p>
    LOST HOPE MODE
    </p>

    <p>
    SURVIVAL NIGHT: ${lostHopeNightNumber}
    </p>

    <p>
    The story is over.
    </p>

    <p>
    The Seekers are still outside.
    </p>

    <p>
    How long can you survive?
    </p>

    `,

    [

    {
        text:"CHECK CAMERAS",
        action:lostHopeCamera
    },

    {
        text:"REST",
        action:lostHopeRest
    },

    {
        text:"SEARCH HOUSE",
        action:lostHopeSearch
    }

    ]);

}





function lostHopeCamera(){

    changeEnergy(-10);

    changeSanity(-5);

    changeAwareness(10);


    setScene(`

    <p>
    You check the cameras.
    </p>

    <p>
    Camera 1: Clear.
    </p>

    <p>
    Camera 2: Static.
    </p>

    <p>
    Camera 3:
    </p>

    <p>
    Something is standing there.
    </p>

    `,

    [

    {
        text:"CONTINUE NIGHT",
        action:lostHopeEndNight
    }

    ]);

}





function lostHopeRest(){

    changeEnergy(20);

    changeSanity(5);

    changeAwareness(5);


    setScene(`

    <p>
    You try to rest.
    </p>

    <p>
    For a moment everything feels normal.
    </p>

    <p>
    Then you hear footsteps.
    </p>

    `,

    [

    {
        text:"CONTINUE NIGHT",
        action:lostHopeEndNight
    }

    ]);

}





function lostHopeSearch(){

    changeEnergy(-15);

    changeSanity(-10);


    let event = Math.floor(Math.random()*2);


    if(event === 0){

        setScene(`

        <p>
        You find old documents.
        </p>

        <p>
        The Seekers have been here before.
        </p>

        `,

        [

        {
            text:"CONTINUE NIGHT",
            action:lostHopeEndNight
        }

        ]);

    }

    else{

        setScene(`

        <p>
        You hear something move upstairs.
        </p>

        <p>
        You leave before finding out what it was.
        </p>

        `,

        [

        {
            text:"CONTINUE NIGHT",
            action:lostHopeEndNight
        }

        ]);

    }

}





function lostHopeEndNight(){


    night++;


    changeEnergy(-5);

    changeAwareness(5);


    if(
        sanity <= 0 ||
        energy <= 0 ||
        seekerActivity >= 100
    ){

        lostHopeGameOver();

    }

    else{

        lostHopeNight();

    }

}





function lostHopeGameOver(){


    setScene(`

    <p>
    LOST HOPE TERMINATED
    </p>


    <p>
    NIGHTS SURVIVED:
    ${night}
    </p>


    <p>
    FINAL SANITY:
    ${sanity}%
    </p>


    <p>
    FINAL ENERGY:
    ${energy}%
    </p>


    <p>
    FINAL SEEKER ACTIVITY:
    ${seekerActivity}%
    </p>


    `,

    [

    {
        text:"RETURN TO MENU",
        action:startMenu
    }

    ]);

}
