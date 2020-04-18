function playerWin()
{
    player_score++;
    player_score_p.innerHTML = player_score;
}

function cpuWin()
{
    cpu_score++;
    cpu_score_p.innerHTML = cpu_score;
}

function draw()
{

}

function updateImage(user, choice)
{
    switch(choice)
    {
        case 1:
            user.src = "assets/rock.png";
            break;
        case 2:
            user.src = "assets/Spr_3f_001.png";
            break;
        case 3:
            user.src = "assets/scissors.png";  
    }
}

function play(player)
{
    // cpu choise
    const cpu = Math.floor(Math.random() * 3) + 1;

    // updating selected images cpu
    updateImage(cpu_choice_img, cpu);
    updateImage(player_choice_img, player);

    // comparing
    if (player === cpu)
    {
        draw();
    }
    else if ((player === 1 && cpu === 3) || (player === 2 && cpu === 1) || (player === 3 && cpu === 2))
    {
        playerWin();
    }
    else
    {
        cpuWin();
    }
}





// getting elements from Dom
const player_score_p = document.getElementById('player');
const cpu_score_p = document.getElementById('cpu');
const paper_input = document.getElementById('paper');
const rock_input = document.getElementById('rock');
const scissors_input = document.getElementById('scissors');
const player_choice_img = document.getElementById('player-pick');
const cpu_choice_img = document.getElementById('cpu-pick');

// score variables
let player_score = 0;
let cpu_score = 0;

// adding event listeners
rock_input.addEventListener('click', (e) => play(1));

paper_input.addEventListener('click', (e) => play(2));

scissors_input.addEventListener('click', (e) => play(3));

