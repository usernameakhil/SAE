const alumni2024 = [
    {
        name: "Priya Malhotra",
        position: "Senior Automotive Engineer",
        batch: "2024",
        image1: "https://i.ibb.co/SX4RjFPy/Rectangle-7.png",
        image2: "https://i.ibb.co/9kS5r38R/Rectangle.png"
    },
    {
        name: "John Doe",
        position: "Mechanical Engineer",
        batch: "2023",
        image1: "https://i.ibb.co/SX4RjFPy/Rectangle-7.png",
        image2: "https://i.ibb.co/9kS5r38R/Rectangle.png"
    },
    {
        name: "Jane Smith",
        position: "Software Engineer",
        batch: "2022",
        image2: "https://i.ibb.co/9kS5r38R/Rectangle.png",
        image1: "https://i.ibb.co/SX4RjFPy/Rectangle-7.png"
    }
];

let currentIndex = 0;

function updateProfile() {
    const profileName = document.getElementById("p");
    const profilePosition = document.getElementById("p1");
    const profileImage = document.getElementById("img1");
    const profileImage2=document.getElementById("img2")

    profileName.textContent = alumni2024[currentIndex].name;
    profilePosition.innerHTML = `${alumni2024[currentIndex].position}<br>Batch ${alumni2024[currentIndex].batch}`;
    profileImage.src = alumni2024[currentIndex].image1;
    profileImage2.src=alumni2024[currentIndex].image2;
}

function gonext() {
    currentIndex = (currentIndex + 1) % alumni2024.length; 
    updateProfile()
}
function goprev(){
    if(currentIndex>0){
    currentIndex = (currentIndex-1) % alumni2024.length;
    updateProfile()}
    else{
        currentIndex = (alumni2024.length-1)% alumni2024.length;
    updateProfile()
    }
}
