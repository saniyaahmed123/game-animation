window.onload = function() {
    Swal.fire({
        title: '<i class="fas fa-gamepad"></i> BATTLE RULES',
        html: `
            <div style="display: flex; justify-content: space-around; align-items: flex-start; padding: 20px 0; border-top: 1px solid #444;">
                <div style="flex: 1;">
                    <h3 style="color: #00d2ff; margin-bottom: 15px;">PLAYER 1</h3>
                    <div style="line-height: 2; font-size: 1.1em;">
                        <div><i class="fas fa-arrow-left"></i> <i class="fas fa-arrow-right"></i> Move</div>
                        <div><kbd style="background:#333; padding: 2px 6px; border-radius: 4px;">P</kbd> Punch</div>
                        <div><kbd style="background:#333; padding: 2px 6px; border-radius: 4px;">K</kbd> Kick</div>
                    </div>
                </div>

                <div style="width: 1px; background: #444; height: 100px; align-self: center;"></div>

                <div style="flex: 1;">
                    <h3 style="color: #ff4757; margin-bottom: 15px;">PLAYER 2</h3>
                    <div style="line-height: 2; font-size: 1.1em;">
                        <div><kbd style="background:#333; padding: 2px 6px; border-radius: 4px;">A</kbd> <kbd style="background:#333; padding: 2px 6px; border-radius: 4px;">D</kbd> Move</div>
                        <div><kbd style="background:#333; padding: 2px 6px; border-radius: 4px;">F</kbd> Attack</div>
                        <div><kbd style="background:#333; padding: 2px 6px; border-radius: 4px;">J</kbd> Jump</div>
                    </div>
                </div>
            </div>
        `,
        background: 'rgba(20, 20, 20, 0.95)',
        color: '#fff',
        confirmButtonText: 'FIGHT!',
        confirmButtonColor: '#ff4757',
        width: '600px',
        padding: '2em',
        backdrop: `rgba(0,0,0,0.8)`,
        showClass: { popup: 'animate__animated animate__zoomIn' }
    });
};
var ch1 = document.getElementById('ch1')
var ch2 = document.getElementById('ch2')
var ch1left = 10;

var ch2right = 10;

window.addEventListener('keydown', function (e) {
    if (e.key == 'ArrowRight' && ch1left < 1400) {
        ch1.src = 'assets/ch1walk.gif'
        ch1left += 15;
        ch1.style.left = ch1left + 'px';
    }
    if (e.key == 'ArrowLeft' && ch1left > 0) {
        ch1.src = 'assets/ch1walk.gif'
        ch1left -= 15;
        ch1.style.left = ch1left + 'px';
    }
    if (e.key == 'k' && ch1left < 1300) {
        ch1.src = 'assets/ch1kick.gif';
        ch1.style.width = '280px';
        setTimeout(function () {
            ch1.src = 'assets/ch1.gif';



            ch1.style.width = 130 + 'px';

        }, 1000);



    }
    if (e.key == 'p' && ch1left < 1300) {
        ch1.src = 'assets/ch1punch.gif';
        ch1.style.width = 190 + 'px';
        setTimeout(function () {
            ch1.src = 'assets/ch1.gif';



            ch1.style.width = 130 + 'px';

        }, 1100);




    }
    if (e.key == 'd' && ch2right < 1400) {
        ch2.style.width = 140 + 'px';

        ch2.src = 'assets/ch2walk.gif'
        ch2right += 15;
        ch2.style.right = ch2right + 'px';
    }
    if (e.key == 'a' && ch2right > 7) {
        ch2.style.width = 140 + 'px';

        ch2.src = 'assets/ch2walk.gif'
        ch2right -= 15;
        ch2.style.right = ch2right + 'px';
    }
    if (e.key == 'j' && ch2right < 1300) {
        ch2.src = 'assets/ch2jump.gif';
        ch2.style.width = '200px';
        setTimeout(function () {
            ch2.src = 'assets/ch2.gif';



            ch2.style.width = 180 + 'px';

        }, 2000);



    }
    if (e.key == 'f' && ch2right < 1300) {
        ch2.src = 'assets/ch2punch.gif';
        ch2.style.width = 220 + 'px';
        setTimeout(function () {
            ch2.src = 'assets/ch2.gif';



            ch2.style.width = 180 + 'px';

        }, 1100);

    }
})


window.addEventListener('keyup', function (e) {
    if (e.key == 'ArrowRight' || e.key == 'ArrowLeft') {
        ch1.src = 'assets/ch1.gif'; // Changed from ch2 to ch1
        ch1.style.width = '130px';
    }
})
window.addEventListener('keyup', function (e) {
    if (e.key == 'a' || e.key == 'd') {
        ch2.src = 'assets/ch2.gif'
        ch2.style.width = 180 + 'px';
    }
})