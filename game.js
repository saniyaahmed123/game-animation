function showInstructions() {
    Swal.fire({
        title: 'BATTLE CONTROLS', // Main Heading
        html: `
            <div style="text-align: left; font-family: sans-serif;">
                <p style="color: #d33; font-weight: bold;">PLAYER 1 (LEFT):</p>
                <ul>
                    <li><strong>Arrows:</strong> Move Left/Right</li>
                    <li><strong>Up Arrow:</strong> Jump</li>
                </ul>
                <hr>
                <p style="color: #3085d6; font-weight: bold;">PLAYER 2 (RIGHT):</p>
                <ul>
                    <li><strong>A / D Keys:</strong> Move Left/Right</li>
                    <li><strong>K Key:</strong> Kick Attack</li>
                </ul>
            </div>
        `,
        icon: 'warning', 
        confirmButtonText: 'START FIGHT',
        confirmButtonColor: '#000',
        background: '#f4f4f4',
        
        // --- FIXES FOR THE BACKGROUND VIDEO ---
        heightAuto: false,
        scrollbarPadding: false
    });
}

// Call the function to show it
showInstructions();
var ch1 = document.getElementById("ch1");
var ch2 = document.getElementById("ch2");
let ch1Left = 25;
let ch2Right = 25;

function handleKeyDown(event) {
    switch (event.key) {
        case 'ArrowLeft':
            ch1Left -= 5;
            ch1.style.left = ch1Left + '%';
            break;
        case 'ArrowRight':
            ch1Left += 10;
            ch1.style.left = ch1Left + '%';
            break;
        case 'ArrowUp':
            ch1.style.top = '40%';

            ch1.style.width = 250 + 'px';

            ch1.src = 'assets/ch1jump.gif';

            ch1.style.position = 'absolute';
            ch1Left -= 3;
            ch1.style.left = ch1Left + '%';





            ch1.style.width = 250 + 'px';
            setTimeout(function () {
                ch1.src = 'assets/ch1.gif';
                ch1.style.top = '60%';
                ch1Left += 3;
                ch1.style.left = ch1Left + '%';

                ch1.style.width = 200 + 'px';

            }, 1600);
            break;







        case 'a':
            ch2Right -= 5;
            ch2.style.right = ch2Right + '%';
            break;
        case 'd':
            ch2Right += 5;
            ch2.style.right = ch2Right + '%';
            break;
        case 'k':



            ch2.style.width = 250 + 'px';
            ch2.src = 'assets/ch2kick.gif';


            setTimeout(function () {
                ch2.src = 'assets/ch2.gif';



                ch2.style.width = 150 + 'px';

            }, 1600);
            break;






    }
}