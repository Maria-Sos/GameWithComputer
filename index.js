const input = document.querySelector('#guess');
const btn = document.querySelector('#btn');
const answer = Math.floor(Math.random()*20) + 1;

btn.addEventListener('click', play);
input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') play();
});

function play() {
    const userNumber = document.querySelector('#guess').value;
    if(userNumber < 1 || userNumber > 20) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong! Try to type number from 1 to 20!"
          });
    }
    else if(isNaN(userNumber)) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please type a number from 1 to 20!"
          });
    } else {
        if(userNumber < answer) {
            Swal.fire({
                icon: "error",
                title: "Nope...",
                text: "Enter the number above!"
              });
        } else if(userNumber > answer) {
            Swal.fire({
                icon: "error",
                title: "Nope...",
                text: "Enter the number below!"
              });
        } else {
            Swal.fire({
                title: "YOU WON!",
                imageUrl: "https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGlnaHR8ZW58MHwwfDB8fHwy",
                imageWidth: 400,
                imageHeight: 250,
                imageAlt: "Victory"
              });
        }
    }
}